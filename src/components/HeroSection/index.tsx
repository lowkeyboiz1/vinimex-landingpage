'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { BellRing, Focus, User, Mail, MapPin } from 'lucide-react'
import Title from '@/components/Title'
import { useForm } from 'react-hook-form'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { accountServices } from '@/services/api/account'
import { useToast } from '@/hooks/useToast'

type RegistrationFormData = {
  fullName: string
  email: string
  address: string
}

const HeroSection = () => {
  const toast = useToast()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isThankYouPopupOpen, setIsThankYouPopupOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormData>()

  const formFields = [
    {
      id: 'fullName',
      label: 'Họ và tên',
      placeholder: 'Họ và tên',
      type: 'text',
      icon: <User size={18} />,
      validation: { required: 'Vui lòng nhập họ và tên' }
    },
    {
      id: 'email',
      label: 'Email',
      placeholder: 'Email',
      type: 'email',
      icon: <Mail size={18} />,
      validation: {
        required: 'Vui lòng nhập email',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Email không hợp lệ'
        }
      }
    },
    {
      id: 'address',
      label: 'Địa chỉ',
      placeholder: 'Địa chỉ',
      type: 'text',
      icon: <MapPin size={18} />,
      validation: { required: 'Vui lòng nhập địa chỉ' }
    }
  ]

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true)
    try {
      // Call API to register user for trial
      const res = await accountServices.registerTrial(data)
      console.log({ res })

      setIsPopupOpen(false)
      setIsThankYouPopupOpen(true)
    } catch (error: any) {
      console.log('Registration error:', error.message)
      toast.error(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='hero' className='container mx-auto flex min-h-dvh max-w-[1240px] flex-col-reverse items-center justify-center gap-8 px-4 pt-[100px] md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-5'>
      <div className='w-full text-center md:col-span-1 md:text-left lg:col-span-2'>
        <div className='flex flex-col items-center gap-4 md:items-start'>
          <Title title='Đang phát triển bản beta' />
          <h1 className='text-4xl font-bold sm:text-5xl lg:text-6xl'>Đom Đóm AI</h1>
          <p className='text-lg sm:text-xl lg:text-2xl'>Đom Đóm – trợ lý AI bằng tiếng Việt giúp bà con nông dân chăm sóc cây trồng, theo dõi giá sản vật và thời tiết địa phương dễ dàng hơn.</p>
        </div>

        <Button
          className='mt-8 w-full cursor-pointer rounded-full bg-[#F4A300] py-4 text-base text-white hover:bg-[#F4A300]/80 md:mt-12 md:w-fit'
          aria-label='Đăng ký dùng thử khi Đom Đóm AI ra mắt'
          onClick={() => setIsPopupOpen(true)}
        >
          <BellRing aria-hidden='true' size={24} />
          <span>Đăng ký dùng thử khi chúng tôi ra mắt</span>
        </Button>

        <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
          <DialogTitle className='sr-only'>Đăng ký dùng thử</DialogTitle>
          <DialogContent className='mx-auto max-w-md rounded-xl bg-white p-6'>
            <div className='mb-2 flex flex-col items-center'>
              <Image src='/dang-ky-dung-thu.png' alt='dang-ky-dung-thu' width={250} height={250} />
              <h2 className='text-center text-2xl font-bold text-[#2EAF5D]'>Đăng ký dùng thử</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              {formFields.map((field) => (
                <div key={field.id}>
                  <div className='relative'>
                    <div className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2EAF5D]'>{field.icon}</div>
                    <input
                      {...register(field.id as keyof RegistrationFormData, field.validation)}
                      className='w-full rounded-md bg-[#E8E8E8] py-2 pr-3 pl-10 focus:bg-[#DFF5E1] focus:outline-none focus:[&+div>*]:text-[#2EAF5D]'
                      placeholder={field.placeholder}
                      type={field.type}
                    />
                  </div>
                  {errors[field.id as keyof RegistrationFormData] && <p className='mt-1 text-sm text-red-500'>{errors[field.id as keyof RegistrationFormData]?.message}</p>}
                </div>
              ))}

              <Button type='submit' className='mt-4 w-full rounded-full bg-[#F4A300] py-4 text-white hover:bg-[#F4A300]/80' disabled={isSubmitting}>
                <BellRing size={20} className='mr-2' />
                {isSubmitting ? 'Đang xử lý...' : 'Nhận thông báo'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={isThankYouPopupOpen} onOpenChange={setIsThankYouPopupOpen}>
          <DialogTitle className='sr-only'>Cảm ơn bạn đã đăng ký</DialogTitle>
          <DialogContent className='mx-auto max-w-md rounded-xl bg-white p-6'>
            <div className='flex flex-col items-center'>
              <Image src='/cam-on-ban-dang-ky.png' alt='Cảm ơn bạn đã đăng ký' width={150} height={150} className='my-6' />
              <h2 className='text-center text-2xl font-bold text-[#2EAF5D]'>Cảm ơn bạn đã đăng ký!</h2>
              <p className='mt-2 text-center text-sm'>Đom Đóm AI sẽ gửi bạn thông tin khi sản phẩm chính thức ra mắt.</p>
              <Button className='mt-6 w-full rounded-full bg-[#F4A300] py-3 text-white hover:bg-[#F4A300]/80' onClick={() => setIsThankYouPopupOpen(false)}>
                Đóng
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className='w-full md:col-span-1 lg:col-span-3'>
        <Image src='/hero.png' alt='Đom Đóm AI - Trợ lý nông nghiệp thông minh dành cho nông dân Việt Nam' width={2000} height={2000} className='size-full object-cover' priority />
      </div>
    </section>
  )
}

export default HeroSection
