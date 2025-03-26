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
  
  if (!isOpen) return null

  // Position centered relative to the button
  const modalStyle = {
    position: 'absolute',
    top: '-80px',
    left: '50%',
    transform: animate 
      ? 'translateX(-50%) scale(1)' 
      : 'translateX(-50%) scale(0.95)',
    width: '300px',
    zIndex: 9999,
    opacity: animate ? 1 : 0,
    transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  } as const

  return (
    <div
      style={modalStyle}
    >
      <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#444] shadow-xl">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-base font-bold text-white pr-2">{title}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-gray-300 text-xs mb-3">{description}</p>
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
              <span className="text-green-500 mt-1 text-xs">•</span>
              <span className="text-gray-300 text-xs">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 