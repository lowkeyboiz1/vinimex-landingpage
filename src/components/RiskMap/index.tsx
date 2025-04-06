'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion, AnimatePresence } from 'framer-motion'
import { Bug, CloudLightning, CloudRain, Droplets, Thermometer, TrendingUp, Wind, AlertTriangle, BarChart } from 'lucide-react'
import { useState, useMemo } from 'react'
import TitleBadge from '../TitleBadge'
import Image from 'next/image'

type TabKey = 'weather' | 'pests' | 'market' | 'disaster'

interface Metric {
  icon: React.ReactNode
  label: string
  value: string
  color?: string
}

interface TabData {
  title: string
  description: string
  metrics: Metric[]
  bgColor: string
}

const tabLabels: Record<TabKey, string> = {
  weather: 'Thời tiết',
  pests: 'Sâu bệnh',
  market: 'Thị trường',
  disaster: 'Thiên tai'
}

export default function RiskMap() {
  const [activeTab, setActiveTab] = useState<TabKey>('weather')

  const tabData: Record<TabKey, TabData> = useMemo(
    () => ({
      weather: {
        title: 'Dự báo thời tiết chính xác đến từng cánh đồng',
        description: 'Kết hợp dữ liệu từ các trạm khí tượng và mô hình dự báo AI để cung cấp thông tin thời tiết chính xác đến từng khu vực canh tác.',
        bgColor: 'from-blue-50 to-blue-100/50',
        metrics: [
          { icon: <Thermometer className='mb-2 h-6 w-6 text-red-500' />, label: 'Nhiệt độ', value: '32°C', color: 'text-red-500' },
          { icon: <Droplets className='mb-2 h-6 w-6 text-blue-500' />, label: 'Độ ẩm', value: '75%', color: 'text-blue-500' },
          { icon: <Wind className='mb-2 h-6 w-6 text-indigo-500' />, label: 'Gió', value: '15 km/h', color: 'text-indigo-500' },
          { icon: <CloudRain className='mb-2 h-6 w-6 text-cyan-500' />, label: 'Lượng mưa', value: '5 mm', color: 'text-cyan-500' }
        ]
      },
      pests: {
        title: 'Cảnh báo sâu bệnh hại',
        description: 'Dự báo và cảnh báo sớm các loại sâu bệnh hại dựa trên điều kiện môi trường và lịch sử phát sinh dịch hại.',
        bgColor: 'from-orange-50 to-orange-100/50',
        metrics: [
          { icon: <Bug className='mb-2 h-6 w-6 text-red-500' />, label: 'Rầy nâu', value: 'Rủi ro cao', color: 'text-red-500' },
          { icon: <Bug className='mb-2 h-6 w-6 text-yellow-500' />, label: 'Sâu đục thân', value: 'Rủi ro trung bình', color: 'text-yellow-500' },
          { icon: <Bug className='mb-2 h-6 w-6 text-green-500' />, label: 'Bệnh đạo ôn', value: 'Rủi ro thấp', color: 'text-green-500' },
          { icon: <Bug className='mb-2 h-6 w-6 text-red-500' />, label: 'Bệnh vàng lá', value: 'Rủi ro cao', color: 'text-red-500' }
        ]
      },
      market: {
        title: 'Dự báo biến động thị trường',
        description: 'Phân tích xu hướng giá cả và nhu cầu thị trường để giúp nông dân đưa ra quyết định kinh doanh tối ưu.',
        bgColor: 'from-emerald-50 to-emerald-100/50',
        metrics: [
          { icon: <BarChart className='mb-2 h-6 w-6 text-green-500' />, label: 'Giá lúa', value: '+5.2%', color: 'text-green-500' },
          { icon: <BarChart className='mb-2 h-6 w-6 text-red-500' />, label: 'Giá ngô', value: '-2.1%', color: 'text-red-500' },
          { icon: <TrendingUp className='mb-2 h-6 w-6 text-green-500' />, label: 'Nhu cầu', value: 'Tăng cao', color: 'text-green-500' },
          { icon: <TrendingUp className='mb-2 h-6 w-6 text-yellow-500' />, label: 'Xuất khẩu', value: 'Ổn định', color: 'text-yellow-500' }
        ]
      },
      disaster: {
        title: 'Cảnh báo thiên tai',
        description: 'Dự báo và cảnh báo sớm các hiện tượng thời tiết cực đoan và thiên tai có thể ảnh hưởng đến sản xuất nông nghiệp.',
        bgColor: 'from-purple-50 to-purple-100/50',
        metrics: [
          { icon: <AlertTriangle className='mb-2 h-6 w-6 text-green-500' />, label: 'Bão', value: 'Không có', color: 'text-green-500' },
          { icon: <CloudLightning className='mb-2 h-6 w-6 text-yellow-500' />, label: 'Lũ lụt', value: 'Rủi ro thấp', color: 'text-yellow-500' },
          { icon: <CloudLightning className='mb-2 h-6 w-6 text-red-500' />, label: 'Hạn hán', value: 'Rủi ro cao', color: 'text-red-500' },
          { icon: <AlertTriangle className='mb-2 h-6 w-6 text-yellow-500' />, label: 'Sạt lở', value: 'Rủi ro trung bình', color: 'text-yellow-500' }
        ]
      }
    }),
    []
  )

  const tabOrder = useMemo(() => ['weather', 'pests', 'market', 'disaster'], [])

  return (
    <section className='bg-gradient-to-b from-white to-gray-50 py-12 md:py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        {/* Feature Label */}
        <div className='mb-6 text-center'>
          <TitleBadge title='Tính năng 5' className='bg-green-100 text-green-800' />
        </div>

        {/* Main Title */}
        <h1 className='mb-3 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl'>Bản đồ rủi ro trực quan</h1>

        {/* Subtitle */}
        <p className='mx-auto mb-12 max-w-3xl text-center text-base text-gray-600 md:text-lg'>
          Công nghệ AI kết hợp dữ liệu vệ tinh và cảm biến IoT giúp cảnh báo sớm các rủi ro tiềm ẩn cho cây trồng
        </p>

        {/* Main Content */}
        <div className='grid grid-cols-1 gap-4 md:p-8 lg:grid-cols-3'>
          {/* Left Column - Map Image */}
          <div className='h-full min-h-[480px] w-full'>
            <img src='/riskmap.png' alt='Risk Map Visualization' className='size-full object-cover' height={700} width={700} />
          </div>

          {/* Right Column - Information */}
          <div className='col-span-2 flex flex-col gap-6'>
            {/* Heading */}
            <h2 className='text-2xl font-bold text-gray-800 md:text-3xl'>Dự báo và phòng ngừa rủi ro với độ chính xác cao</h2>

            {/* Description */}
            <p className='text-gray-600 md:text-lg'>
              Bản đồ rủi ro trực quan của Vinimex AI tích hợp dữ liệu từ nhiều nguồn khác nhau, từ vệ tinh, trạm thời tiết đến cảm biến IoT tại ruộng, giúp dự báo và cảnh báo sớm các rủi ro tiềm ẩn.
            </p>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabKey)} className='w-full'>
              <TabsList className='relative grid h-12 w-full grid-cols-4 rounded-xl bg-gray-100/80'>
                {(Object.keys(tabData) as TabKey[]).map((tab) => (
                  <TabsTrigger key={tab} value={tab} className='relative z-10 font-medium data-[state=active]:text-gray-800 data-[state=active]:shadow-none'>
                    {tabLabels[tab]}
                  </TabsTrigger>
                ))}
                <motion.div
                  className='absolute top-1 bottom-1 left-1 z-0 rounded-lg bg-white'
                  initial={false}
                  animate={{
                    left: `calc(${tabOrder.indexOf(activeTab) * 25}% + 0.25rem)`,
                    width: 'calc(25% - 0.5rem)'
                  }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              </TabsList>

              {/* Tab Content */}
              <div className={`mt-4 overflow-hidden rounded-xl bg-gradient-to-br ${tabData[activeTab].bgColor} p-5 transition-all duration-500`}>
                <AnimatePresence mode='wait'>
                  <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className='h-full'>
                    <h3 className='mb-3 text-xl font-bold text-gray-800 md:text-2xl'>{tabData[activeTab].title}</h3>
                    {/* <p className='mb-6 text-gray-600 md:text-lg'>{tabData[activeTab].description}</p> */}

                    {/* Metrics Grid */}
                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
                      {tabData[activeTab].metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          className='flex flex-col items-center rounded-lg bg-white p-4 transition-all'
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          {metric.icon}
                          <span className='text-sm text-gray-500'>{metric.label}</span>
                          <span className={`text-lg font-bold ${metric.color || ''}`}>{metric.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
