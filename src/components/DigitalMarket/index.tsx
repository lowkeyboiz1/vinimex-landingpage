'use client'
import { Search, Globe, Shield, FileCheck, CreditCard, QrCode, MapPin, Clock, FileText, Truck } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import TitleBadge from '../TitleBadge'

export default function DigitalMarket() {
  const features = [
    {
      icon: <Globe className='h-5 w-5 text-blue-600' />,
      title: 'Tiếp cận thị trường quốc tế',
      description: 'Nông sản Việt Nam xuất khẩu trực tiếp đến người tiêu dùng toàn cầu',
      delay: 0.1
    },
    {
      icon: <Shield className='h-5 w-5 text-blue-600' />,
      title: 'Bảo vệ thương hiệu nông sản',
      description: 'Công nghệ blockchain chống hàng giả, bảo vệ uy tín sản phẩm',
      delay: 0.2
    },
    {
      icon: <FileCheck className='h-5 w-5 text-blue-600' />,
      title: 'Chứng nhận số tự động',
      description: 'Tự động hóa quy trình chứng nhận chất lượng, xuất xứ và hữu cơ',
      delay: 0.3
    },
    {
      icon: <CreditCard className='h-5 w-5 text-blue-600' />,
      title: 'Thanh toán thông minh',
      description: 'Hệ thống thanh toán tự động, minh bạch với nhiều phương thức',
      delay: 0.4
    }
  ]

  const products = [
    {
      image: '/thanhlong.png',
      name: 'Thanh Long Ruột Đỏ',
      producer: 'HTX Bình Thuận',
      price: '45.000đ',
      unit: '/kg'
    },
    {
      image: '/caphe.png',
      name: 'Cà Phê Arabica',
      producer: 'Đắk Lắk Organic',
      price: '180.000đ',
      unit: '/kg'
    }
  ]

  const traceabilityFeatures = [
    { icon: <MapPin className='h-3 w-3 text-blue-600' />, text: 'Nguồn gốc xác thực' },
    { icon: <Clock className='h-3 w-3 text-blue-600' />, text: 'Lịch sử canh tác' },
    { icon: <FileText className='h-3 w-3 text-blue-600' />, text: 'Chứng nhận số' },
    { icon: <Truck className='h-3 w-3 text-blue-600' />, text: 'Hành trình vận chuyển' }
  ]

  return (
    <section className='bg-[#E2F0FB] py-12 md:py-20'>
      <div className='container mx-auto'>
        {/* Feature Label */}

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {/* Left Column - Features */}
          <div className='flex flex-col gap-2'>
            <div className='w-fit'>
              <TitleBadge title='Tính năng 6' className='w-fit bg-green-100 text-green-800' />
            </div>

            {/* Main Title */}
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='mb-3 text-4xl font-bold text-gray-800'>
              Chợ Nông Sản Số & Blockchain
            </motion.h1>

            {/* Subtitle */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className='mx-auto mb-12 text-base text-gray-600 md:text-lg'>
              Hệ sinh thái thương mại kết hợp công nghệ blockchain đảm bảo minh bạch, giúp nông dân tiếp cận thị trường toàn cầu và xây dựng thương hiệu nông sản Việt Nam chất lượng cao.
            </motion.p>
            {/* Feature Cards */}
            <div className='space-y-4'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: feature.delay }}
                  className='flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md'
                >
                  <div className='rounded-full bg-blue-50 p-2'>{feature.icon}</div>
                  <div>
                    <h3 className='font-semibold text-gray-800'>{feature.title}</h3>
                    <p className='text-sm text-gray-600'>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Marketplace UI */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='overflow-hidden rounded-xl bg-white shadow-lg'>
            {/* Header */}
            <div className='flex items-center justify-between bg-[#002b54] p-4 text-white'>
              <div className='flex items-center gap-2'>
                <div className='rounded bg-white p-1'>
                  <div className='h-5 w-5 bg-[#002b54]'></div>
                </div>
                <span className='font-semibold'>Chợ Nông Sản Số</span>
              </div>
              <span className='text-sm'>Beta 2.0</span>
            </div>

            {/* Search Bar */}
            <div className='p-4'>
              <div className='relative'>
                <Search className='absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400' />
                <input type='text' placeholder='Tìm kiếm sản phẩm...' className='w-full rounded-lg border border-gray-200 py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none' />
              </div>
            </div>

            {/* Tabs */}
            <div className='w-full px-4'>
              {' '}
              <Tabs defaultValue='featured' className='w-full'>
                <TabsList className='grid w-full grid-cols-3'>
                  <TabsTrigger value='featured'>Nổi bật</TabsTrigger>
                  <TabsTrigger value='organic'>Hữu cơ</TabsTrigger>
                  <TabsTrigger value='export'>Xuất khẩu</TabsTrigger>
                </TabsList>
                <div className='h-[300px] overflow-hidden'>
                  <TabsContent value='featured' className='h-full'>
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3 }} className='h-full'>
                      {/* Products */}
                      <div className='grid grid-cols-2 gap-4 p-4'>
                        {products.map((product, index) => (
                          <div key={index} className='overflow-hidden rounded-lg border border-gray-100 transition-all hover:shadow-md'>
                            <div className='relative'>
                              <img src={product.image} alt={product.name} width={200} height={150} className='h-40 w-full object-cover' />
                              <div className='absolute top-2 right-2 rounded bg-green-600 px-2 py-1 text-xs text-white'>Xác thực</div>
                            </div>
                            <div className='p-3'>
                              <h3 className='font-semibold'>{product.name}</h3>
                              <p className='text-xs text-gray-500'>{product.producer}</p>
                              <div className='mt-2 flex items-center justify-between'>
                                <span className='font-bold'>
                                  {product.price} <span className='text-xs font-normal text-gray-500'>{product.unit}</span>
                                </span>
                                <button className='flex items-center rounded bg-blue-600 p-1 text-white hover:bg-blue-700'>
                                  <span className='px-2 text-sm'>Mua</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </TabsContent>
                  <TabsContent value='organic' className='h-full'>
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className='flex h-full items-center justify-center'
                    >
                      <div className='p-6 text-center text-gray-500'>Danh sách sản phẩm hữu cơ sẽ được cập nhật sớm</div>
                    </motion.div>
                  </TabsContent>
                  <TabsContent value='export' className='h-full'>
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className='flex h-full items-center justify-center'
                    >
                      <div className='p-6 text-center text-gray-500'>Danh sách sản phẩm xuất khẩu sẽ được cập nhật sớm</div>
                    </motion.div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            {/* Blockchain Tracing */}
            <div className='m-4 rounded-lg bg-blue-50 p-4'>
              <div className='flex gap-4'>
                <div className='flex h-16 w-16 items-center justify-center rounded-lg bg-white p-1'>
                  <QrCode className='h-12 w-12 text-gray-800' />
                </div>
                <div className='flex-1'>
                  <div className='flex items-center gap-1 text-blue-700'>
                    <Shield className='h-4 w-4' />
                    <span className='font-medium'>Truy xuất nguồn gốc Blockchain</span>
                  </div>
                  <p className='mt-1 text-xs text-gray-600'>Quét mã QR để xác thực thông tin sản phẩm</p>

                  <div className='mt-3 grid grid-cols-2 gap-2'>
                    {traceabilityFeatures.map((feature, index) => (
                      <div key={index} className='flex items-center gap-1 text-xs text-gray-600'>
                        {feature.icon}
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
