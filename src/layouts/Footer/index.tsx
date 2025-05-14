'use client'
import { Button } from '@/components/ui/button'
import { Bell, Facebook, Mail, MapPin, Phone, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { useForm, type FieldValues } from 'react-hook-form'
import { navItems } from '@/lib/contants'
const Footer = () => {
  const { register, handleSubmit } = useForm<FieldValues>()

  const quickLinks = [
    { title: 'Trang chủ', href: '/' },
    { title: 'Tính năng', href: '#features' },
    { title: 'Lộ trình phát triển', href: '#road-map' },
    { title: 'Đối tác', href: '#' },
    { title: 'Đăng ký', href: '#' }
  ]

  const contactInfo = [
    { icon: <MapPin className='mt-1 mr-3 !size-4 shrink-0 text-green-400 md:!size-5' />, text: '123 Đường Nông Nghiệp, Quận 1, TP. Hồ Chí Minh' },
    { icon: <Phone className='mt-1 mr-3 size-4 text-green-400 md:size-5' />, text: '1800 xxxx (Miễn phí)' },
    { icon: <Mail className='mt-1 mr-3 size-4 text-green-400 md:size-5' />, text: 'info@vinimexai.vn' }
  ]

  const appDownloads = [
    {
      platform: 'Google Play',
      subtext: 'TẢI VỀ TỪ',
      icon: '/chplay.png',
      alt: 'google play',
      href: '#'
    },
    {
      platform: 'App Store',
      subtext: 'TẢI VỀ TỪ',
      icon: '/appstore.png',
      alt: 'app store',
      href: '#'
    }
  ]

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <footer className='relative bg-green-900 px-4 py-12 text-white md:py-16'>
      <div className='absolute top-0 left-1/2 container mx-auto grid w-full -translate-x-1/2 -translate-y-1/2 grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2'>
        <Button className='w-full cursor-pointer rounded-full bg-[#2EAF5D] py-4 text-sm text-white hover:bg-[#2EAF5D]/80 md:py-6 md:text-base'>
          <span>
            <Image src='/zalo.png' alt='zalo' width={20} height={20} className='size-4 md:size-5' />
          </span>
          Tham gia cộng động Zalo của Vinimex AI
        </Button>
        <Button className='w-full cursor-pointer rounded-full bg-[#F4A300] py-4 text-sm text-white hover:bg-[#F4A300]/80 md:py-6 md:text-base'>
          <span>
            <Bell className='size-4 flex-shrink-0 md:size-5' />
          </span>
          Đăng ký dùng thử khi chúng tôi ra mắt
        </Button>
      </div>

      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div
          className='absolute bottom-0 left-0 hidden size-[300px] -translate-x-[30%] translate-y-[30%] opacity-30 md:size-[400px] lg:block lg:size-[500px]'
          style={{ backgroundImage: 'url(/trong-dong.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      </div>

      <div className='relative z-10 container mx-auto mt-16 sm:mt-10 md:px-6'>
        <div className='grid gap-8 md:gap-12 lg:grid-cols-5'>
          <div className='lg:col-span-2'>
            <div className='w-[50px] transition-transform hover:scale-105 md:w-[70px]'>
              <Image src={`/logo-white.png`} alt='logo' width={70} height={70} className='size-full object-contain' />
            </div>
            <p className='mt-4 text-xs text-gray-300 md:mt-6 md:text-sm lg:text-base'>Kết nối công nghệ AI với nông nghiệp Việt Nam, mang lại hiệu quả và phát triển bền vững.</p>
            <div className='mt-4 flex flex-col gap-3 md:mt-6 md:gap-4'>
              <p className='text-lg font-bold text-white md:text-xl'>Theo dõi chúng tôi</p>
              <div className='flex items-center gap-3 md:gap-4'>
                <div className='size-8 md:size-10'>
                  <Image src='/zalo.png' alt='zalo' width={100} height={100} className='size-full object-contain' />
                </div>
                <div className='size-8 md:size-10'>
                  <Image src='/fb.png' alt='zalo' width={100} height={100} className='size-full object-contain' />
                </div>
              </div>
              <p className='mt-1 text-xs text-[#8CE3A1] md:mt-2 md:text-sm'>© 2025 Vinimex AI</p>
            </div>
          </div>
          <div className='flex flex-col gap-6 md:gap-10 lg:col-span-3'>
            <div className='w-full'>
              <p className='text-lg font-bold text-white md:text-xl'>Nhận thông báo email</p>
              <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-col items-center gap-3 bg-white sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-full md:mt-6'>
                <Input
                  type='email'
                  placeholder='Nhập email của bạn'
                  className='w-full rounded-full border-0 bg-white p-3 text-sm text-black outline-0 placeholder:text-black/50 sm:rounded-none md:p-4 md:text-base'
                  {...register('email', { required: true })}
                />
                <Button type='submit' variant='secondary' className='w-full cursor-pointer rounded-full border-0 bg-[#F4A300] p-3 text-sm text-white outline-0 sm:w-auto md:p-4 md:text-base'>
                  Đăng ký nhận thông tin
                  <Send className='ml-2 size-3 md:size-4' />
                </Button>
              </form>
            </div>
            <div className='flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-4'>
              <div className='flex flex-col gap-2'>
                <p className='text-lg font-bold text-white md:text-xl'>Email của chúng tôi</p>
                <p className='text-sm md:text-base'>mkt@vinimex.tech</p>
              </div>
              {/* <div>
                <h3 className='mb-3 text-sm font-bold md:mb-4 md:text-base lg:text-lg'>Tải Ứng Dụng</h3>
                <div className='flex flex-col gap-3 sm:flex-row md:gap-4'>
                  {appDownloads.map((app, index) => (
                    <Link
                      key={index}
                      href={app.href}
                      className='flex h-[60px] w-full cursor-pointer items-center space-x-2 rounded-lg bg-black px-2 py-2 text-white transition-all hover:bg-gray-800 hover:shadow-lg sm:w-[160px] md:h-[80px] md:w-[200px] md:space-x-3 md:px-3'
                    >
                      <div className='w-[20px] md:w-[28px]'>
                        <Image src={app.icon} alt={app.alt} width={100} height={100} className='size-full object-contain' />
                      </div>
                      <div>
                        <div className='text-[10px] md:text-xs'>{app.subtext}</div>
                        <div className='text-xs font-semibold md:text-sm lg:text-base'>{app.platform}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div> */}
            </div>
            <div className='grid grid-cols-2 gap-4 sm:flex sm:justify-between sm:gap-0'>
              {navItems.map((item, index) => (
                <Link key={index} href={item.href} className='text-base font-bold text-white transition-colors hover:text-green-300 md:text-lg lg:text-xl'>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-6 flex flex-col items-center justify-between border-t border-green-800 pt-4 md:mt-8 md:pt-6'>
          <p className='mx-auto mb-2 text-center text-[10px] text-gray-400 md:mb-4 md:text-xs'>
            © {new Date().getFullYear()} Vinimex AI. Bản quyền thuộc về Công ty Cổ phần Công nghệ Nông nghiệp Vinimex.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
