"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { GB } from 'country-flag-icons/react/3x2'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

interface BookingFormProps {
  selectedDate: Date
  selectedTime: string
  onClose: () => void
  onSubmit: (formData: BookingFormData) => Promise<void>
}

export interface BookingFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  additionalInfo: string
  marketingConsent: boolean
}

export default function HAL900BookingForm({ selectedDate, selectedTime, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    additionalInfo: "",
    marketingConsent: false
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    toast.promise(
      (async () => {
        try {
          // Create calendar event via API route
          const calendarResponse = await fetch('/api/calendar', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              formData,
              selectedDate,
              selectedTime,
            }),
          });

          if (!calendarResponse.ok) {
            const errorData = await calendarResponse.json();
            throw new Error(errorData.error || 'Failed to create calendar event');
          }

          const calendarResult = await calendarResponse.json();

          // Send email notifications
          const isProduction = process.env.NODE_ENV === 'production';
          const functionUrl = isProduction 
            ? process.env.NEXT_PUBLIC_FIREBASE_FUNCTION_URL || 'https://us-central1-scailertest-37078.cloudfunctions.net/sendBookingEmails'
            : '/api/send-booking-emails';
          
          const emailResponse = await fetch(functionUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              formData,
              selectedDate,
              selectedTime,
              calendarLink: calendarResult.htmlLink,
            }),
          });

          if (!emailResponse.ok) {
            const errorData = await emailResponse.json();
            throw new Error(`Failed to send email notifications: ${errorData.error}`);
          }

          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            additionalInfo: '',
            marketingConsent: false,
          });
          
          // Close the form after a short delay
          setTimeout(() => {
            onClose();
          }, 2000);
          
          return "success";
        } catch (error) {
          console.error('Submission error:', error);
          throw error instanceof Error ? error.message : 'An unknown error occurred';
        } finally {
          setLoading(false);
        }
      })(),
      {
        loading: "Scheduling your session...",
        success: "Your strategy session has been scheduled. You will receive a confirmation email shortly.",
        error: (err) => err.toString()
      }
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-scailer-light rounded-xl p-6 shadow-lg max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Enter Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm text-white/80">
              First Name <span className="text-scailer-green">*</span>
            </label>
            <Input
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              className={cn(
                "bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500",
                "focus:ring-1 focus:ring-scailer-green/50"
              )}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm text-white/80">
              Last Name <span className="text-scailer-green">*</span>
            </label>
            <Input
              id="lastName"
              required
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              className={cn(
                "bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500",
                "focus:ring-1 focus:ring-scailer-green/50"
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm text-white/80">
              Phone <span className="text-scailer-green">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <GB className="w-4 h-4 rounded-sm" />
                <span className="text-white">+</span>
              </div>
              <Input
                id="phone"
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className={cn(
                  "pl-16 bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500",
                  "focus:ring-1 focus:ring-scailer-green/50"
                )}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-white/80">
              Email <span className="text-scailer-green">*</span>
            </label>
            <Input
              id="email"
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={cn(
                "bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500",
                "focus:ring-1 focus:ring-scailer-green/50"
              )}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="additionalInfo" className="text-sm text-white/80">
            Additional Information
          </label>
          <Textarea
            id="additionalInfo"
            placeholder="Is there anything you would like us to know before your appointment?"
            value={formData.additionalInfo}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
            className={cn(
              "min-h-[100px] bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500",
              "focus:ring-1 focus:ring-scailer-green/50"
            )}
          />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="marketingConsent"
            checked={formData.marketingConsent}
            onCheckedChange={(checked: boolean) => 
              setFormData(prev => ({ ...prev, marketingConsent: checked }))
            }
            className="mt-1"
          />
          <label htmlFor="marketingConsent" className="text-sm text-white/80">
            I confirm that I want to receive content from this company using any contact information I provide.
          </label>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            onClick={onClose}
            className="bg-transparent border border-scailer-green text-scailer-green hover:bg-scailer-green/10"
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className={cn(
              "bg-scailer-green text-white",
              "hover:bg-scailer-green/90",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Scheduling...
              </>
            ) : (
              "Schedule Session"
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  )
} 