"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import type { BookingFormData } from "./HAL900-BookingForm";
import { toast, Toaster } from 'sonner';

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const convertTo24Hour = (time12h: string) => {
  // Extract time and AM/PM
  const timeMatch = time12h.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!timeMatch) {
    console.error('Invalid time format:', time12h);
    return '00:00'; // Default fallback
  }
  
  let hours = parseInt(timeMatch[1], 10);
  const minutes = timeMatch[2];
  const modifier = timeMatch[3].toUpperCase();
  
  // Convert hours based on AM/PM
  if (hours === 12) {
    hours = modifier === 'AM' ? 0 : 12;
  } else if (modifier === 'PM') {
    hours += 12;
  }
  
  return `${hours.toString().padStart(2, '0')}:${minutes}`;
};

const HAL900BookingInterface = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [isBooking, setIsBooking] = useState(false);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDayOfMonth };
  };

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentMonth);

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
  };

  const handleMonthChange = (increment: number) => {
    setCurrentMonth(prevMonth => {
      // Create a new date object with the same values to avoid any reference issues
      const newMonth = new Date(
        prevMonth.getFullYear(),
        prevMonth.getMonth() + increment,
        1  // Set to first day of month to avoid any day-of-month issues
      );
      return newMonth;
    });
  };

  const handleBookingFlow = async () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time slot.");
      return;
    }

      setIsBooking(true);

    try {
      // Dynamic import for BookingForm to avoid initial load cost
      const BookingFormComponent = (await import('./HAL900-BookingForm')).default;
      const ReactDOM = (await import('react-dom/client')).default;

      const bookingFormContainer = document.createElement('div');
      bookingFormContainer.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
      const formRootElement = document.createElement('div');
      bookingFormContainer.appendChild(formRootElement);
      document.body.appendChild(bookingFormContainer);

      const closeForm = () => {
        if (document.body.contains(bookingFormContainer)) {
          document.body.removeChild(bookingFormContainer);
        }
        setIsBooking(false);
      };

      // This function will be called by the form's onSubmit
      const submitBooking = async (formData: BookingFormData) => {
        setIsBooking(true);
        let calendarResult = null;
        let emailResult = null;

        try {
          // --- Date Formatting Logic (from removed API route) ---
          let formattedDate = '';
          if (selectedDate instanceof Date) {
            formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
          } else {
            console.error("Selected date is not a Date object:", selectedDate);
            toast.error("Invalid date selected. Please try again.");
            closeForm();
            return;
          }
            const convertedTime = convertTo24Hour(selectedTime);
          console.log('Formatted Date:', formattedDate, 'Converted Time:', convertedTime);
          // --- End Date Formatting ---

          // --- Firebase Function Base URL ---
          const isProduction = process.env.NODE_ENV === 'production';
          const functionsBaseUrl = process.env.NEXT_PUBLIC_FIREBASE_FUNCTION_URL || (isProduction
            ? 'https://europe-west1-scailertest-37078.cloudfunctions.net' // Default production URL
            : 'http://localhost:5001/scailertest-37078/europe-west1'); // Default local URL
          console.log("Using Firebase Functions base URL:", functionsBaseUrl);
          // --- End Base URL ---

          // --- Call calendarPrecise Firebase Function ---
          console.log("Calling calendarPrecise function...");
          const calendarResponse = await fetch(`${functionsBaseUrl}/calendarPrecise`, {
              method: 'POST',
            headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                formData,
              selectedDate: formattedDate,
                selectedTime: convertedTime,
              }),
            });

          const rawCalendarResponse = await calendarResponse.text();
          console.log("Raw calendar response:", { status: calendarResponse.status, text: rawCalendarResponse.substring(0, 200) });

          if (!calendarResponse.ok) {
            throw new Error(`Calendar function failed: ${calendarResponse.status} - ${rawCalendarResponse.substring(0, 100)}`);
          }
          try {
            calendarResult = JSON.parse(rawCalendarResponse);
            console.log("Calendar function success:", calendarResult);
          } catch (e) {
            throw new Error("Invalid JSON from calendar function");
          }
          // --- End Calendar Call ---

          // --- Call sendBookingEmails Firebase Function ---
          if (calendarResult?.htmlLink) {
            console.log("Calling sendBookingEmails function...");
            const emailPayload = {
              formData,
              selectedDate: formattedDate,
              selectedTime: convertedTime,
              calendarLink: calendarResult.htmlLink,
            };
            const emailResponse = await fetch(`${functionsBaseUrl}/sendBookingEmails`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(emailPayload),
            });

            const rawEmailResponse = await emailResponse.text();
            console.log("Raw email response:", { status: emailResponse.status, text: rawEmailResponse.substring(0, 200) });

            if (!emailResponse.ok) {
              console.error(`Email function failed: ${emailResponse.status} - ${rawEmailResponse.substring(0, 100)}`);
              toast.error("Booking scheduled, but failed to send confirmation email.");
            } else {
              try {
                emailResult = JSON.parse(rawEmailResponse);
                console.log("Email function success:", emailResult);
                toast.success("Booking successful! Check your calendar and email.");
              } catch (e) {
                console.error("Invalid JSON from email function");
                toast.warning("Booking scheduled, but confirmation email response was invalid.");
              }
            }
          } else {
            toast.error("Booking failed: Calendar link missing.");
          }
          // --- End Email Call ---

          // Only reset if both calls were at least attempted (calendar link was present)
          if (calendarResult?.htmlLink) {
            // Reset UI state after success
              setSelectedDate(new Date());
              setSelectedTime("");
            closeForm();
          }

        } catch (error: any) {
          console.error('Error during booking submission:', error);
          toast.error(`Booking failed: ${error.message || 'Please try again.'}`);
          closeForm();
          }
        };

      // Render the form dynamically
      const formRoot = ReactDOM.createRoot(formRootElement);
      formRoot.render(
        <BookingFormComponent
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          onClose={closeForm}
          onSubmit={submitBooking}
        />
      );

      } catch (error) {
      console.error('Error dynamically loading or rendering booking form:', error);
      toast.error("Failed to load booking form. Please refresh and try again.");
        setIsBooking(false);
    }
  };

  return (
    <section id="booking-interface" className="py-20 bg-scailer-darker">
      <Toaster position="top-center" richColors />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Book a Strategy Session</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Schedule a one-on-one consultation with our scaling experts.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-scailer-light p-6 rounded-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => handleMonthChange(-1)}
                className="p-2 hover:bg-scailer-dark rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-medium">
                {currentMonth.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h3>
              <button
                onClick={() => handleMonthChange(1)}
                className="p-2 hover:bg-scailer-dark rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="text-center text-white/60 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={`empty-${index}`} className="p-2" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const isSelected =
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth.getMonth() &&
                  selectedDate.getFullYear() === currentMonth.getFullYear();
                const isToday =
                  new Date().getDate() === day &&
                  new Date().getMonth() === currentMonth.getMonth() &&
                  new Date().getFullYear() === currentMonth.getFullYear();

                return (
                  <motion.button
                    key={day}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDateClick(day)}
                    className={`p-2 rounded-lg text-center ${
                      isSelected
                        ? "bg-scailer-green text-white"
                        : isToday
                        ? "border border-scailer-green text-scailer-green"
                        : "hover:bg-scailer-dark"
                    }`}
                  >
                    {day}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Time Slots */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-scailer-light p-6 rounded-xl flex flex-col"
          >
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-scailer-green" />
              Select a Time
            </h3>
            <div className="grid grid-cols-2 gap-3 flex-grow mb-6">
              {timeSlots.map((time) => (
                <motion.button
                  key={time}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg text-center transition-colors ${
                    selectedTime === time
                      ? "bg-scailer-green text-white"
                      : "bg-scailer-dark hover:bg-scailer-dark/70"
                  }`}
                >
                  {time}
                </motion.button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBookingFlow}
              disabled={!selectedDate || !selectedTime || isBooking}
              className={`w-full mt-auto p-4 rounded-lg text-lg font-bold transition-all ${
                !selectedDate || !selectedTime || isBooking
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-scailer-green text-white hover:bg-scailer-green/90"
              }`}
            >
              {isBooking ? "Processing..." : "Confirm Booking"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HAL900BookingInterface; 