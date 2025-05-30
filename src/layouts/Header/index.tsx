'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { navItems } from '@/lib/contants'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll handling when mobile menu is open
      if (mobileMenuOpen) return

      const currentScrollY = window.scrollY

      // Determine if scrolled past threshold
      const isScrolled = currentScrollY > 60
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && visible && currentScrollY > 60) {
        setVisible(false)
      } else if (currentScrollY < lastScrollY && !visible) {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, visible, lastScrollY, mobileMenuOpen])

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      // Ensure header is visible when mobile menu is open
      setVisible(true)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (isHovering && videoRef.current) {
      videoRef.current.play().catch((err) => console.error('Video play failed:', err))
    } else if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isHovering])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      } ${visible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      role='banner'
    >
      <div className='container mx-auto flex max-w-[1240px] items-center justify-between px-4 py-2 lg:py-4'>
        <div className='relative w-[80px] transition-all duration-200 hover:scale-105' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <Link href='/' aria-label='Trang chủ Đom Đóm AI'>
            {!isHovering && <Image src={`/logo-black.png`} alt='Đom Đóm AI logo' width={100} height={100} className='size-full object-contain' priority />}
            {isHovering && (
              <video ref={videoRef} className='size-full object-contain' muted playsInline loop>
                <source src='/logo-animation.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden items-center space-x-2 text-black md:flex lg:space-x-4`} aria-label='Menu chính'>
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className='cursor-pointer rounded-md px-3 py-2 font-medium transition-all duration-200 hover:text-[#2EAF5D]' aria-label={item.label}>
              {item.label}
            </Link>
          ))}
          <Button className='flex cursor-pointer items-center gap-2 rounded-full bg-[#F4A300] py-4 text-base text-white hover:bg-[#F4A300]/80 has-[>svg]:px-6' aria-label='Liên hệ ngay với Đom Đóm AI'>
            Liên hệ ngay
            <Phone aria-hidden='true' />
          </Button>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className='md:hidden'>
          <Hamburger isActive={mobileMenuOpen} setIsActive={setMobileMenuOpen} />
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden='true'
      />
      <motion.div
        id='mobile-menu'
        className='fixed top-16.5 right-0 bottom-0 z-[55] h-dvh w-full bg-white md:hidden'
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        role='dialog'
        aria-modal='true'
        aria-label='Menu điện thoại'
      >
        <div className='flex h-full flex-col p-6'>
          <nav className='flex flex-col space-y-4' aria-label='Menu di động'>
            {navItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : 50 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                key={index}
              >
                <Link
                  href={item.href}
                  className='block rounded-md px-4 py-3 text-lg font-medium text-gray-800 transition-all duration-200 hover:bg-green-50 hover:pl-6 hover:text-green-600'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }} transition={{ duration: 0.3, delay: 0.5 }}>
              <Button
                className='mt-6 w-full cursor-pointer !rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-base font-medium whitespace-nowrap text-white shadow-md hover:from-green-600 hover:to-emerald-700 hover:shadow-lg'
                onClick={() => setMobileMenuOpen(false)}
                aria-label='Liên hệ ngay với Đom Đóm AI'
              >
                Liên hệ ngay
              </Button>
            </motion.div>
          </nav>
          <div className='mt-auto'>
            <p className='text-sm text-gray-500'>© 2024 Đom Đóm AI. All rights reserved.</p>
          </div>
        </div>
      </motion.div>
    </header>
  )
}

const Hamburger = ({ isActive, setIsActive }: { isActive: boolean; setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <motion.div className='relative z-[60] flex h-5 w-8 cursor-pointer flex-col justify-between hover:opacity-85' onClick={() => setIsActive((prev) => !prev)}>
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={index}
          className={cn('h-1 rounded-2xl bg-[#F4A300]')}
          initial={false}
          animate={
            index === 1
              ? {
                  x: isActive ? '100%' : 0,
                  opacity: isActive ? 0 : 1
                }
              : index === 0
                ? {
                    y: isActive ? '150%' : 0,
                    rotate: isActive ? 45 : 0
                  }
                : {
                    y: isActive ? '-250%' : '0%',
                    rotate: isActive ? -45 : 0
                  }
          }
          transition={{ duration: 0.3 }}
          style={{ width: '100%' }}
        />
      ))}
    </motion.div>
  )
}

export default Header
