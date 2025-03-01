import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { GB } from 'country-flag-icons/react/3x2'

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

export default function HAL900BookingForm({ selectedDate, selectedTime, onClose, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    additionalInfo: "",
    marketingConsent: false
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await onSubmit(formData)
      setSuccess(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setError(error instanceof Error ? error.message : 'Failed to book session')
    } finally {
      setLoading(false)
    }
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
            onCheckedChange={(checked) => 
              setFormData(prev => ({ ...prev, marketingConsent: checked as boolean }))
            }
            className="mt-1"
          />
          <label htmlFor="marketingConsent" className="text-sm text-white/80">
            I confirm that I want to receive content from this company using any contact information I provide.
          </label>
        </div>

        <div className="pt-1 md:pt-2">
          {error && (
            <div className="text-red-400 text-sm mb-2">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-scailer-green/20 border border-scailer-green rounded-lg p-4 mb-4">
              <h3 className="text-scailer-green font-medium mb-2">Booking Successful!</h3>
              <p className="text-white/90 text-sm mb-2">
                Your strategy session has been scheduled. You will receive a confirmation email shortly.
              </p>
              <p className="text-white/70 text-xs">
                If you don't receive an email within a few minutes, please check your spam folder or contact us.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            onClick={onClose}
            className="bg-transparent border border-scailer-green text-scailer-green hover:bg-scailer-green/10"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className="bg-scailer-green text-white hover:bg-[#128C7E]"
          >
            {loading ? "Scheduling..." : "Schedule Meeting"}
          </Button>
        </div>
      </form>
    </motion.div>
  )
} 