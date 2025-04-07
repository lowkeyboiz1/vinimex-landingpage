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

  const navItems = [
    { href: '#about-us', label: 'Về chúng tôi' },
    { href: '#features', label: 'Tính năng' },
    { href: '#road-map', label: 'Lộ trình phát triển' },
    { href: '#digital-market', label: 'Thị trường số' },
    { href: '#risk-map', label: 'Bản đồ rủi ro' }
  ]

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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='container mx-auto flex items-center justify-between px-4 py-2 lg:py-4'>
        <div className='w-[80px] transition-all duration-200 hover:scale-105'>
          <Image src={`/logo-${scrolled || mobileMenuOpen ? 'black' : 'white'}.png`} alt='logo' width={100} height={100} className='size-full object-contain' />
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden items-center space-x-2 md:flex lg:space-x-4 ${scrolled ? 'text-black' : 'text-white'}`}>
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className='rounded-md px-3 py-2 font-medium transition-all duration-200 hover:text-blue-600'>
              {item.label}
            </a>
          ))}
          <Button className='cursor-pointer !rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 text-base whitespace-nowrap text-white shadow-md transition-all duration-200 hover:scale-105 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg'>
            Liên hệ ngay
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`p-2 md:hidden ${scrolled ? 'text-black' : 'text-white'} z-[60] rounded-full transition-all duration-200 hover:bg-white/10`}
          onClick={toggleMobileMenu}
          aria-label='Toggle menu'
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={toggleMobileMenu}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-[55] h-dvh w-[85%] bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex h-full flex-col p-6'>
          <div className='mb-8 flex justify-between'>
            <div className='w-[80px]'>
              <Image src='/logo-black.png' alt='logo' width={100} height={100} className='size-full object-contain' />
            </div>
          </div>
          <nav className='flex flex-col space-y-4'>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className='rounded-md px-4 py-3 text-lg font-medium text-gray-800 transition-all duration-200 hover:bg-green-50 hover:pl-6 hover:text-green-600'
                onClick={toggleMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <Button
              className='mt-6 w-full cursor-pointer !rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-base font-medium whitespace-nowrap text-white shadow-md hover:from-green-600 hover:to-emerald-700 hover:shadow-lg'
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
