'use client';

import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface PartnerCardProps {
  title: string;
  location: string;
  imageUrl: string;
  onOpen?: () => void;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  title,
  location,
  imageUrl = "/placeholder.svg?height=400&width=600",
  onOpen
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
    onOpen?.();
  };

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-2xl bg-[#111] hover:bg-[#1a1a1a] transition-all duration-500 cursor-pointer"
        onClick={handleClick}
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-[var(--village-orange)] uppercase tracking-wider text-sm">
              {location}
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/20 pointer-events-none" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-4"
              >
                <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-[#111]/95 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="relative aspect-video mb-6">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <Dialog.Title as="h3" className="text-3xl font-bold text-white mb-2">
                    {title}
                  </Dialog.Title>
                  <p className="text-[var(--village-orange)] uppercase tracking-wider text-sm mb-4">
                    {location}
                  </p>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[var(--village-orange)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--village-orange)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--village-orange)] focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}; 