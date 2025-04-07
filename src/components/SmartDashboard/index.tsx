import { RefreshCw, Sun, Cloud, CloudRain, ShieldCheck } from 'lucide-react'
import TitleBadge from '../TitleBadge'

export default function SmartDashboard() {
  const dashboardCards = [
    {
      title: 'Thời tiết',
      value: '28°C',
      description: 'Nắng nhẹ, độ ẩm 75%',
      icon: <Sun className='h-5 w-5 text-yellow-500 md:h-6 md:w-6' />,
      iconBg: 'bg-yellow-100',
      valueColor: 'text-green-500',
      content: (
        <>
          <div className='mb-2 text-xs text-gray-500 md:text-sm'>Dự báo 5 ngày tới</div>
          <div className='grid grid-cols-5 gap-1 text-center'>
            {[
              { day: 'T2', icon: <Sun />, temp: '29°' },
              { day: 'T3', icon: <Cloud />, temp: '28°' },
              { day: 'T4', icon: <CloudRain />, temp: '26°' },
              { day: 'T5', icon: <Sun />, temp: '30°' },
              { day: 'T6', icon: <Cloud />, temp: '29°' }
            ].map((forecast, index) => (
              <div key={index} className='flex flex-col items-center rounded-lg p-1 transition-colors hover:bg-gray-100'>
                <div className='mb-1 h-4 w-4 text-yellow-500 md:h-5 md:w-5'>{forecast.icon}</div>
                <div className='text-xs text-gray-500'>{forecast.day}</div>
                <div className='text-xs font-medium md:text-sm'>{forecast.temp}</div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      title: 'Độ ẩm đất',
      value: '68%',
      description: 'Tình trạng tốt',
      icon: <CloudRain className='h-5 w-5 text-blue-500 md:h-6 md:w-6' />,
      iconBg: 'bg-blue-100',
      valueColor: 'text-blue-500',
      content: (
        <>
          <div className='mb-2 text-xs text-gray-500 md:text-sm'>Mức độ</div>
          <div className='relative mb-2 h-2.5 overflow-hidden rounded-full bg-gray-200 md:h-3'>
            <div className='absolute top-0 left-0 h-full rounded-full bg-blue-500' style={{ width: '68%' }}></div>
          </div>
          <div className='flex justify-between text-xs text-gray-500 md:text-sm'>
            <span>Khô</span>
            <span>Ẩm</span>
          </div>
        </>
      )
    },
    {
      title: 'Tình trạng cây trồng',
      value: 'Tốt',
      description: 'Lúa: Giai đoạn trổ bông',
      icon: <Cloud className='h-5 w-5 text-green-500 md:h-6 md:w-6' />,
      iconBg: 'bg-green-100',
      valueColor: 'text-green-500',
      content: (
        <>
          <div className='mb-2 text-xs text-gray-500 md:text-sm'>Tiến độ phát triển</div>
          <div className='relative mb-2 h-2.5 overflow-hidden rounded-full bg-gray-200 md:h-3'>
            <div className='absolute top-0 left-0 h-full rounded-full bg-green-500' style={{ width: '75%' }}></div>
          </div>
          <div className='flex justify-between text-xs text-gray-500 md:text-sm'>
            <span>Gieo trồng</span>
            <span>Thu hoạch</span>
          </div>
        </>
      )
    },
    {
      title: 'Cảnh báo dịch hại',
      value: 'Không có',
      description: 'Khu vực an toàn',
      icon: <ShieldCheck className='h-5 w-5 text-green-500 md:h-6 md:w-6' />,
      iconBg: 'bg-green-100',
      valueColor: 'text-green-500',
      content: (
        <>
          <div className='mb-2 text-xs text-gray-500 md:text-sm'>Nguy cơ trong 7 ngày tới</div>
          <div className='space-y-2'>
            <div className='flex items-center gap-2 rounded-md bg-blue-50 px-3 py-2 transition-colors hover:bg-blue-100'>
              <div className='h-2 w-2 rounded-full bg-green-500 md:h-2.5 md:w-2.5'></div>
              <span className='text-xs text-gray-700 md:text-sm'>Rầy nâu: Thấp</span>
            </div>
            <div className='flex items-center gap-2 rounded-md bg-blue-50 px-3 py-2 transition-colors hover:bg-blue-100'>
              <div className='h-2 w-2 rounded-full bg-green-500 md:h-2.5 md:w-2.5'></div>
              <span className='text-xs text-gray-700 md:text-sm'>Sâu cuốn lá: Thấp</span>
            </div>
          </div>
        </>
      )
    }
  ]

  return (
    <section id='smart-dashboard' className='bg-gradient-to-b from-white to-gray-50 py-12 md:py-20'>
      <div className='container mx-auto px-4'>
        {/* Feature Label */}
        <div className='mb-6 text-center'>
          <TitleBadge title='Tính năng 3' className='bg-green-100 text-green-800' />
        </div>

        {/* Main Title */}
        <h1 className='mb-3 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl'>Bảng điều khiển thông minh</h1>

        {/* Subtitle */}
        <p className='mx-auto mb-12 text-center text-base text-gray-600 md:text-lg'>Theo dõi mọi thông số quan trọng cho hoạt động canh tác của bạn trong một giao diện trực quan và dễ sử dụng.</p>

        {/* Dashboard Panel */}
        <div className='overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl'>
          {/* Dashboard Header */}
          <div className='flex flex-col items-start justify-between border-b p-4 sm:flex-row sm:items-center sm:p-6 md:p-8'>
            <h2 className='mb-2 text-xl font-bold text-gray-800 sm:mb-0 md:text-2xl'>Tổng quan trang trại</h2>
            <div className='flex items-center gap-2 text-sm text-gray-500 md:text-base'>
              <span>Cập nhật: 02/04/2025, 10:30</span>
              <button className='rounded-full p-1.5 transition-colors hover:bg-gray-100'>
                <RefreshCw className='h-4 w-4 md:h-5 md:w-5' />
              </button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6 md:p-8 lg:grid-cols-4'>
            {dashboardCards.map((card, index) => (
              <div key={index} className='rounded-xl bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md md:p-5'>
                <div className='mb-4 flex items-start justify-between'>
                  <div>
                    <div className='text-sm text-gray-500 md:text-base'>{card.title}</div>
                    <div className={`text-2xl font-bold ${card.valueColor} md:text-3xl`}>{card.value}</div>
                    <div className='text-xs text-gray-500 md:text-sm'>{card.description}</div>
                  </div>
                  <div className={`rounded-full ${card.iconBg} p-2 md:p-3`}>{card.icon}</div>
                </div>
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
