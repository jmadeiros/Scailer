"use client"

import React from 'react'
import HAL900AuditForm from '@/components/HAL900-AuditForm'
import { Toaster } from 'sonner'

export default function TestAuditPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-md">
        <h1 className="text-2xl text-white font-bold mb-6 text-center">Audit Form Test</h1>
        <p className="text-gray-400 mb-8 text-center text-sm">
          This page tests the connection to Firestore via Firebase Functions.
        </p>
        <HAL900AuditForm />
      </div>
    </div>
  )
} 