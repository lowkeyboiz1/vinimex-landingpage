import { toast, type ExternalToast } from 'sonner'
import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react'
import React from 'react'

export enum ToastId {
  OTP_SUCCESS = 'otp-success',
  OTP_ERROR = 'otp-error',
  LOGIN_SUCCESS = 'login-success',
  LOGIN_ERROR = 'login-error',
  INFO = 'info',
  WARNING = 'warning',
  ONBOARDING_SUCCESS = 'onboarding-success',
  ONBOARDING_ERROR = 'onboarding-error'
}

export const useToast = () => {
  return {
    success: (message: string, description?: string, id?: string) =>
      toast(message, {
        description,
        icon: React.createElement(CheckCircle, { className: 'text-green-500 mt-1 ml-1' }),
        style: { background: '#ecfdf5', color: '#065f46', alignItems: 'start', justifyContent: 'start' },
        id
      }),

    error: (message: string, description?: string, id?: string) =>
      toast(message, {
        description,
        icon: React.createElement(AlertCircle, { className: 'text-red-500 mt-1 ml-1' }),
        style: { background: '#fef2f2', color: '#b91c1c', alignItems: 'start', justifyContent: 'start' },
        id
      }),

    info: (message: string, description?: string, id?: string) =>
      toast(message, {
        description,
        icon: React.createElement(Info, { className: 'text-blue-500' }),
        style: { background: '#eff6ff', color: '#1e40af', alignItems: 'start', justifyContent: 'start' },
        id
      }),

    warning: (message: string, description?: string, id?: string) =>
      toast(message, {
        description,
        icon: React.createElement(XCircle, { className: 'text-yellow-500 mt-1 ml-1' }),
        style: { background: '#fef9c3', color: '#b45309', alignItems: 'start', justifyContent: 'start' },
        id
      })
  }
}
