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
  
  useEffect(() => {
    if (isOpen) {
      // Start animation after a tiny delay
      const timer = setTimeout(() => setAnimate(true), 10)
      return () => clearTimeout(timer)
    } else {
      setAnimate(false)
    }
  }, [isOpen])

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

  // Position relative to the button
  const modalStyle = {
    position: 'absolute' as const,
    top: '-80px',
    [isLeft ? 'right' : 'left']: '0px',
    width: '300px',
    zIndex: 50,
    opacity: animate ? 1 : 0,
    transform: animate 
      ? 'translateY(0)' 
      : 'translateY(10px)',
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  }

  return (
    <div style={modalStyle}>
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
  )
} 