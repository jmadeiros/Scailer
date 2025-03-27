'use client';

import { RefObject, useEffect, useState } from "react"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  details: string[]
  buttonRef: RefObject<HTMLButtonElement>
  isLeft: boolean
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  details,
  buttonRef,
  isLeft,
}: ModalProps) {
  const [animate, setAnimate] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0, side: isLeft ? 'right' : 'left' })
  
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const button = buttonRef.current
      const rect = button.getBoundingClientRect()
      const modalWidth = 300 // Width of our modal
      const modalHeight = 200 // Approximate height, will be adjusted based on content
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      // Calculate initial position
      let top = rect.top - modalHeight - 10 // 10px gap
      let left = isLeft ? rect.right - modalWidth : rect.left
      let side = isLeft ? 'right' : 'left'

      // Check if modal would go off the top of the screen
      if (top < 10) {
        top = rect.bottom + 10 // Place below the button
      }

      // Check if modal would go off the sides of the screen
      if (left < 10) {
        left = rect.right // Place on right side of button
        side = 'left'
      } else if (left + modalWidth > windowWidth - 10) {
        left = rect.left - modalWidth // Place on left side of button
        side = 'right'
      }

      setPosition({ top: top + window.scrollY, left, side })
      const timer = setTimeout(() => setAnimate(true), 10)
      return () => clearTimeout(timer)
    } else {
      setAnimate(false)
    }
  }, [isOpen, buttonRef, isLeft])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, buttonRef]);
  
  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: '300px',
        zIndex: 50,
        opacity: animate ? 1 : 0,
        transform: animate ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
      }}
    >
      <div className="relative">
        {/* Arrow pointer */}
        <div 
          className="absolute w-3 h-3 bg-[#111] border-t border-l border-[#333] transform rotate-45"
          style={{
            [position.side === 'left' ? 'left' : 'right']: '20px',
            top: '-1.5px',
            marginTop: '-6px',
          }}
        />
        
        <div className="bg-[#111] rounded-lg p-4 border border-[#333] shadow-xl">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-base font-bold text-white pr-2">{title}</h3>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="text-gray-400 hover:text-white transition-colors rounded-full p-1 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-gray-300 text-sm mb-3">{description}</p>
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li
                key={index}
                className="flex items-start gap-2"
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? 'translateY(0)' : 'translateY(5px)',
                  transition: 'all 0.25s ease',
                  transitionDelay: `${0.15 + index * 0.05}s`
                }}
              >
                <span className="text-[var(--village-orange)] mt-1 text-xs">•</span>
                <span className="text-gray-300 text-sm">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
} 