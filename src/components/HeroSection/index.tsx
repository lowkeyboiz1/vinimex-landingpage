'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
const HeroSection = () => {
  return (
    <section className='relative flex h-dvh items-center overflow-hidden'>
      <div
        className='absolute inset-0 z-0 bg-cover bg-center'
        style={{
          backgroundImage: `url('/bg-main.png')`
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent'></div>
      </div>

      <div className='relative z-10 container mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-xl text-white md:max-w-2xl lg:max-w-3xl'>
          <h1 className='text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
            <span className='text-[#3C93CF]'>Vinimex AI</span> – Tương Lai của Nông Nghiệp Thông Minh
          </h1>
          <p className='mt-4 text-base opacity-90 sm:text-lg md:text-xl'>
            Cách mạng hóa nông nghiệp với công nghệ AI tiên tiến và tích hợp blockchain cho các phương pháp canh tác bền vững, hiệu quả và minh bạch.
          </p>
          <Button className='mt-8 cursor-pointer !rounded-full bg-[#6A994E] px-6 py-4 text-base whitespace-nowrap text-white'>Liên hệ ngay</Button>
          <div className='mt-8 flex flex-wrap items-center gap-4'>
            <div className='flex -space-x-4 rtl:space-x-reverse'>
              <div className='relative z-30 h-10 w-10 overflow-hidden rounded-full border-2 border-white sm:h-12 sm:w-12'>
                <img src='https://randomuser.me/api/portraits/men/42.jpg' alt='Nhà nông 1' className='h-full w-full object-cover' />
              </div>
              <div className='relative z-20 h-10 w-10 overflow-hidden rounded-full border-2 border-white sm:h-12 sm:w-12'>
                <img src='https://randomuser.me/api/portraits/women/65.jpg' alt='Nhà nông 2' className='h-full w-full object-cover' />
              </div>
              <div className='relative z-10 h-10 w-10 overflow-hidden rounded-full border-2 border-white sm:h-12 sm:w-12'>
                <img src='https://randomuser.me/api/portraits/men/91.jpg' alt='Nhà nông 3' className='h-full w-full object-cover' />
              </div>
            </div>

            <p className='text-base font-medium text-white sm:text-lg'>1,200+ nhà nông Việt Nam tin dùng</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
