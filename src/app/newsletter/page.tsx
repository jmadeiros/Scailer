"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Check } from 'lucide-react';
import HAL900Header from '@/components/HAL900-Header';
import { toast, Toaster } from 'sonner';

// Create custom mail icon since lucide-react doesn't have Mail
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function BlogPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const router = useRouter();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Get the Firebase Functions base URL from environment variable or use a default
      const functionsBaseUrl = process.env.NEXT_PUBLIC_FIREBASE_FUNCTION_URL || 'https://europe-west1-scailertest-37078.cloudfunctions.net';
      
      // Call the Firebase function to save the blog subscription
      const response = await fetch(`${functionsBaseUrl}/saveBlogSubscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          topics: ['all'],
          source: 'blog-subscribe'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      console.log('Blog subscription saved with ID:', data.id);
      
      // Show success message
      if (data.alreadySubscribed) {
        toast.success("You're already subscribed to our blog updates!");
      } else {
        toast.success("Thank you for subscribing to our blog updates!");
      }
      
      setIsSubscribed(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
        setIsPopoverOpen(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error subscribing to blog:", error);
      toast.error("There was an error subscribing. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <HAL900Header onTryForFree={() => router.push('/#booking-interface')} />
      <Toaster position="top-center" />
      
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Newsletter</h1>
          <p className="text-xl text-gray-300 mb-12">
            Stay updated with our latest insights on AI, automation, and business scaling.
          </p>

          {/* Email Subscription Popover */}
          <div className="relative inline-block mb-16">
            <Button
              onClick={togglePopover}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full"
            >
              <MailIcon />
              <span>Subscribe</span>
            </Button>

            {isPopoverOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute mt-2 p-4 bg-[#222] border border-[#333] rounded-lg shadow-xl w-80 z-10 left-1/2 transform -translate-x-1/2"
              >
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                  <p className="text-white text-sm mb-2">
                    Get the latest updates and insights directly to your inbox.
                  </p>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-[#333] border-[#444] text-white"
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 h-12 text-lg font-bold rounded-md"
                    disabled={isLoading || isSubscribed}
                  >
                    {isLoading ? (
                      <span>Subscribing...</span>
                    ) : isSubscribed ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            )}
          </div>

          {/* Placeholder for newsletter content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#222] p-6 rounded-lg border border-[#333]">
              <h2 className="text-xl font-bold text-white mb-3">Coming Soon</h2>
              <p className="text-gray-300">
                We're preparing insightful content on AI implementation, business automation, and scaling strategies.
                Subscribe to be notified when our newsletter launches.
              </p>
            </div>
            <div className="bg-[#222] p-6 rounded-lg border border-[#333]">
              <h2 className="text-xl font-bold text-white mb-3">Have a Topic in Mind?</h2>
              <p className="text-gray-300">
                Is there something specific you'd like to see in the newsletter? Let us know by emailing us at{' '}
                <a href="mailto:all@scailer.io" className="text-purple-400 hover:text-purple-300">
                  all@scailer.io
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 