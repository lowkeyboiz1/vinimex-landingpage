import TitleBadge from '@/components/TitleBadge'

export default function RoadMap() {
  const roadmapPhases = [
    {
      phase: 'Giai đoạn 1',
      title: 'Demo',
      borderColor: 'border-[#6A994E]',
      timeline: 'Q1/2025',
      description: 'Xây dựng MVP chatbot "Dom Dõm"',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-white' viewBox='0 0 20 20' fill='currentColor'>
          <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
          <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
        </svg>
      ),
      bgColor: 'bg-green-600'
    },
    {
      phase: 'Giai đoạn 2',
      borderColor: 'border-[#F4A300]',
      title: 'MVP',
      timeline: 'Q2/2025',
      description: 'Phát triển nền tảng web + mobile',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-white' viewBox='0 0 20 20' fill='currentColor'>
          <path fillRule='evenodd' d='M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
        </svg>
      ),
      bgColor: 'bg-orange-400'
    },
    {
      phase: 'Giai đoạn 3',
      title: 'Thử nghiệm',
      borderColor: 'border-[#FFCE03]',
      timeline: 'Q2/2025',
      description: 'Thử nghiệm trên 15 tỉnh trọng điểm',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-white' viewBox='0 0 20 20' fill='currentColor'>
          <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
          <path fillRule='evenodd' d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z' clipRule='evenodd' />
        </svg>
      ),
      bgColor: 'bg-yellow-400'
    },
    {
      phase: 'Giai đoạn 4',
      title: 'Thương mại hóa',
      borderColor: 'border-[#3C93CF]',
      timeline: 'Q3/2025',
      description: 'Thương mại hóa + tích hợp Blockchain',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-white' viewBox='0 0 20 20' fill='currentColor'>
          <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z' />
          <path fillRule='evenodd' d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z' clipRule='evenodd' />
        </svg>
      ),
      bgColor: 'bg-blue-500'
    },
    {
      phase: 'Giai đoạn 5',
      borderColor: 'border-[#3C93CF]',
      title: 'Quy mô quốc gia',
      timeline: 'Q4/2025',
      description: 'Mở rộng toàn quốc và quốc tế hóa',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-white' viewBox='0 0 20 20' fill='currentColor'>
          <path fillRule='evenodd' d='M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z' clipRule='evenodd' />
        </svg>
      ),
      bgColor: 'bg-blue-500'
    }
  ]

  return (
    <div id='road-map' className='container mx-auto px-4 py-16 lg:py-24'>
      <div className='mb-6 text-center'>
        <TitleBadge title='Lộ trình phát triển' />
      </div>

      <h1 className='mb-2 text-center text-3xl font-bold text-gray-800 md:text-4xl'>Từ Ý Tưởng Đến Nền Tảng Nông Nghiệp Quốc Dân</h1>

      <p className='mb-10 text-center text-gray-600'>Lộ trình phát triển Vinimex AI - Kết nối công nghệ với nông nghiệp Việt Nam</p>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {roadmapPhases.map((phase, index) => (
          <div key={index} className={`relative rounded-lg border-t-4 ${phase.borderColor} bg-white p-6 shadow-[0px_12px_24px_0px_#0000001F]`}>
            <div className='mb-4 flex items-start justify-between'>
              <h3 className='font-medium text-gray-700'>{phase.phase}</h3>
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${phase.bgColor}`}>{phase.icon}</div>
            </div>
            <h2 className='mb-1 text-xl font-bold text-gray-800'>{phase.title}</h2>
            <p className='mb-3 text-sm text-gray-500'>{phase.timeline}</p>
            <p className='text-sm text-gray-700'>{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
