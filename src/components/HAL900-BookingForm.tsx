"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast, Toaster } from 'sonner'
import { Loader2 } from 'lucide-react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

// Custom styles for react-phone-number-input
const phoneInputCustomStyles = `
  .PhoneInputInput {
    background-color: transparent !important;
    border: none !important;
    color: white !important;
    height: 100%;
    font-size: inherit;
    outline: none !important;
    box-shadow: none !important;
  }
  .PhoneInputInput::placeholder {
    color: #6b7280; /* gray-500 */
  }
  .PhoneInputCountrySelect {
    /* You can add custom styles for the country select dropdown arrow or container if needed */
  }
  .PhoneInputCountryIcon--border {
    box-shadow: none !important; /* Remove default border shadow if any */
  }
`;

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
}

export default function HAL900BookingForm({ selectedDate, selectedTime, onClose, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    additionalInfo: "",
  })
  const [loading, setLoading] = useState(false)
  const [isPhoneValid, setIsPhoneValid] = useState(true); // New state for phone validity

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Directly show a loading toast
    const toastId = toast.loading("Scheduling your strategy session...");
    
    try {
      await onSubmit(formData);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        additionalInfo: '',
      });
      
      // Update the loading toast to success
      toast.success("Strategy session confirmed! A confirmation email has been sent to your inbox.", {
        id: toastId,
        duration: 5000
      });
      
      // Close the form after a short delay
      setTimeout(() => {
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Submission error:', error);
      // Update the loading toast to error
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      toast.error(`There was an issue with your booking: ${errorMessage}`, {
        id: toastId,
        duration: 5000
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      {/* Inject custom styles for phone input */}
      <style>{phoneInputCustomStyles}</style>
      
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

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm text-white/80">
                Phone
              </label>
              <div className={cn(
                "relative bg-[#2a2a2a] rounded-md text-white placeholder:text-gray-500",
                "flex items-center h-10",
                "focus-within:ring-1 focus-within:ring-scailer-green/50",
                !isPhoneValid && formData.phone ? "ring-1 ring-red-500" : ""
              )}>
                <PhoneInput
                  international
                  defaultCountry="GB"
                  value={formData.phone}
                  onChange={(value) => {
                    setFormData(prev => ({ ...prev, phone: value || "" }));
                    setIsPhoneValid(value ? isValidPhoneNumber(value) : true);
                  }}
                  className="custom-phone-input"
                />
              </div>
              {!isPhoneValid && formData.phone && (
                <p className="text-xs text-red-500 mt-1">Please enter a valid phone number.</p>
              )}
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

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              onClick={onClose}
              className="bg-transparent border border-scailer-green text-scailer-green hover:bg-scailer-green/10 py-2 px-5 text-base font-medium h-12"
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
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "py-2 px-5 text-base font-medium h-12"
              )}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Scheduling...
                </>
              ) : (
                "Schedule Session"
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </>
  )
} 