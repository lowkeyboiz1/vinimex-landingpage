import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
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

  return (
    <footer className='relative bg-green-900 px-4 py-12 text-white md:py-16'>
      <div className='absolute bottom-0 left-0 hidden size-[500px] opacity-30 lg:block' style={{ backgroundImage: 'url(/trong-dong.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className='container mx-auto md:px-6'>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:grid-cols-5'>
          <div className='lg:col-span-2'>
            <div className='w-[70px] transition-transform hover:scale-105'>
              <Image src={`/logo-white.png`} alt='logo' width={70} height={70} className='size-full object-contain' />
            </div>
            <p className='mt-6 text-sm text-gray-300 md:text-base'>Kết nối công nghệ AI với nông nghiệp Việt Nam, mang lại hiệu quả và phát triển bền vững.</p>
          </div>

          <div>
            <h3 className='mb-4 text-base font-bold md:mb-6 md:text-lg'>Liên Kết Nhanh</h3>
            <ul className='space-y-2 md:space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className='cursor-pointer text-sm text-gray-300 transition-colors hover:text-white hover:underline md:text-base'>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-base font-bold md:mb-6 md:text-lg'>Liên Hệ</h3>
            <ul className='space-y-2 md:space-y-3'>
              {contactInfo.map((item, index) => (
                <li key={index} className='flex items-start'>
                  {item.icon}
                  <span className='text-sm md:text-base'>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-base font-bold md:mb-6 md:text-lg'>Tải Ứng Dụng</h3>
            <div className='flex flex-col space-y-3 md:space-y-4'>
              {appDownloads.map((app, index) => (
                <Link
                  key={index}
                  href={app.href}
                  className='flex cursor-pointer items-center space-x-3 rounded-lg bg-black px-3 py-2 text-white transition-all hover:bg-gray-800 hover:shadow-lg md:px-4 md:py-2'
                >
                  <div className='w-[28px]'>
                    <Image src={app.icon} alt={app.alt} width={100} height={100} className='size-full object-contain' />
                  </div>
                  <div>
                    <div className='text-xs'>{app.subtext}</div>
                    <div className='text-sm font-semibold md:text-base'>{app.platform}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-8 flex flex-col items-center justify-between border-t border-green-800 pt-6 md:mt-12 md:flex-row md:pt-8'>
          <p className='mx-auto mb-4 text-center text-xs text-gray-400'>© {new Date().getFullYear()} Vinimex AI. Bản quyền thuộc về Công ty Cổ phần Công nghệ Nông nghiệp Vinimex.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
