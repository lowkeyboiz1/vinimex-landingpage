'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
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
  }, [scrolled, visible, lastScrollY])

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'} ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='container mx-auto flex items-center justify-between py-4'>
        <div className='w-[70px]'>
          <Image src={`/logo-${scrolled || mobileMenuOpen ? 'black' : 'white'}.png`} alt='logo' width={100} height={100} className='size-full object-contain' />
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden items-center space-x-4 md:flex lg:space-x-8 ${scrolled ? 'text-black' : 'text-white'}`}>
          <a href='#about' className='rounded-md px-3 py-2 font-medium transition-colors hover:bg-white/10 hover:text-green-600'>
            Về chúng tôi
          </a>
          <a href='#features' className='rounded-md px-3 py-2 font-medium transition-colors hover:bg-white/10 hover:text-green-600'>
            Tính năng
          </a>
          <a href='#roadmap' className='rounded-md px-3 py-2 font-medium transition-colors hover:bg-white/10 hover:text-green-600'>
            Lộ trình phát triển
          </a>
          <Button className='cursor-pointer !rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 text-base whitespace-nowrap text-white hover:from-green-600 hover:to-emerald-700'>
            Liên hệ ngay
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className={`p-2 md:hidden ${scrolled ? 'text-black' : 'text-white'} z-[60]`} onClick={toggleMobileMenu} aria-label='Toggle menu'>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={toggleMobileMenu} />
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 z-[55] h-dvh w-full bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex h-full flex-col p-6'>
          <div className='mb-6 flex justify-between'>
            <div className='w-[70px]'>
              <Image src='/logo-black.png' alt='logo' width={100} height={100} className='size-full object-contain' />
            </div>
            <X size={24} className='cursor-pointer text-black' onClick={toggleMobileMenu} />
          </div>
          <nav className='flex flex-col space-y-6'>
            <a href='#about' className='rounded-md px-3 py-2 text-lg font-medium text-black transition-colors hover:bg-green-50 hover:text-green-600' onClick={toggleMobileMenu}>
              Về chúng tôi
            </a>
            <a href='#features' className='rounded-md px-3 py-2 text-lg font-medium text-black transition-colors hover:bg-green-50 hover:text-green-600' onClick={toggleMobileMenu}>
              Tính năng
            </a>
            <a href='#roadmap' className='rounded-md px-3 py-2 text-lg font-medium text-black transition-colors hover:bg-green-50 hover:text-green-600' onClick={toggleMobileMenu}>
              Lộ trình phát triển
            </a>
            <Button
              className='mt-4 w-full cursor-pointer !rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-base whitespace-nowrap text-white hover:from-green-600 hover:to-emerald-700'
              onClick={toggleMobileMenu}
            >
              Liên hệ ngay
            </Button>
          </nav>
          <div className='mt-auto'>
            <p className='text-sm text-gray-500'>© 2024 Vinimex AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
