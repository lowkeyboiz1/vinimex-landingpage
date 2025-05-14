'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { BellRing, Focus } from 'lucide-react'
import Title from '@/components/Title'

const HeroSection = () => {
  return (
    <section className='container mx-auto flex min-h-dvh flex-col-reverse items-center justify-center gap-8 px-4 pt-[100px] md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-5'>
      <div className='w-full text-center md:col-span-1 md:text-left lg:col-span-2'>
        <div className='flex flex-col items-center gap-4 md:items-start'>
          <Title title='Đang phát triển bản beta' />
          <h1 className='text-4xl font-bold sm:text-5xl lg:text-6xl'>Vinimex AI</h1>
          <p className='text-lg sm:text-xl lg:text-2xl'>Trợ lý nông nghiệp thông minh dành cho người Việt</p>
        </div>

        <Button className='mt-8 w-full rounded-full bg-[#F4A300] py-4 text-white md:mt-12 md:w-fit'>
          <BellRing />
          Đăng ký dùng thử khi chúng tôi ra mắt
        </Button>
      </div>

      <div className='w-full md:col-span-1 lg:col-span-3'>
        <Image src='/hero.png' alt='hero-section' width={500} height={500} className='size-full object-cover' priority />
      </div>
    </section>
  )
}

export default HeroSection
