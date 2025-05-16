import Title from '@/components/Title'
import { cn } from '@/lib/utils'
import { Bot, CircleCheck, Clock, Settings } from 'lucide-react'
import Image from 'next/image'

const TitleButton = ({ title = '', icon, className }: { title: string; icon: React.ReactNode; className: string }) => {
  return (
    <button className={`flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-bold shadow-[0px_12px_24px_0px_#0000001F] sm:px-4 sm:py-2 sm:text-base ${className}`}>
      <span className='flex-shrink-0'>{icon}</span>
      <span className='line-clamp-1'>{title}</span>
    </button>
  )
}

const DescriptionItem = ({ description, color }: { description: string; color: string }) => {
  return <div className={`flex items-center gap-2 rounded-2xl p-3 text-sm sm:p-4 sm:text-base ${color} !text-[#333333]`}>{description}</div>
}

export default function AIAssistant() {
  const features = [
    {
      icon: <Bot size={20} className='sm:size-6' color='#1B793A' />,
      className: 'bg-[#DFF5E1] text-[#1B793A]',
      title: 'Đã phát triển',
      descriptions: ['Giao diện đơn giản, dễ dùng cho người lớn tuổi', 'Chatbot nói & hiểu tiếng Việt', 'Nhận diện bệnh cây qua hình ảnh'],
      iconDescription: <CircleCheck size={20} className='sm:size-6' color='#1B793A' />
    },
    {
      image: '/feature.png',
      altText: 'Giao diện trợ lý AI Vinimex với các tính năng đã phát triển như chatbot tiếng Việt và nhận diện bệnh cây'
    },
    {
      icon: <Settings size={20} className='sm:size-6' color='#0C5CA3' />,
      className: 'bg-[#E2F0FB] text-[#0C5CA3]',
      title: 'Đang phát triển',
      descriptions: ['Gợi ý cách chăm sóc theo mùa vụ', 'Cập nhật thời tiết và giá theo vùng', 'Cá nhân hóa theo từng hộ trồng'],
      iconDescription: <Settings size={20} className='sm:size-6' color='#0C5CA3' />
    },
    {
      icon: <Clock size={20} className='sm:size-6' color='#F4A300' />,
      className: 'bg-[#FFF4E1] text-[#F4A300]',
      title: 'Sắp tới',
      descriptions: ['Thông báo mùa vụ bằng AI', 'Thử nghiệm toàn diện tại 10 tỉnh', 'Hồ sơ số theo dõi toàn bộ mùa vụ'],
      iconDescription: <Clock size={20} className='sm:size-6' color='#F4A300' />
    }
  ]
  return (
    <section id='ai-assistant' className='z-10 container mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16'>
      <header className='mb-6 flex flex-col items-center gap-2 text-center sm:mb-8 sm:gap-3 md:mb-12 md:gap-4 lg:mb-16'>
        <Title title='Tính năng nổi bật' />
        <h2 className='z-30 mb-2 text-2xl font-bold text-[#333333] sm:text-3xl md:text-4xl lg:text-6xl'>
          Vinimex AI <br className='md:hidden' /> đang xây dựng những gì?
        </h2>

        <p className='z-30 max-w-3xl text-sm text-[#333333] sm:text-base md:text-lg'>
          Chúng tôi đang từng bước phát triển một trợ lý AI toàn diện, nói tiếng Việt, hiểu nông dân và đồng hành cùng bà con từ đầu mùa đến khi thu hoạch.
        </p>
      </header>
      <div className='z-30 grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-8 md:gap-10 lg:grid-cols-3 lg:gap-12'>
        {features.map((feature, index) => {
          if (!feature.image) {
            return (
              <div key={index} className={cn('flex flex-col gap-3 sm:gap-4', index === features.length - 1 ? 'col-span-1 lg:col-start-2' : '', 'sm:order-2 lg:order-none')}>
                <TitleButton title={feature?.title || ''} icon={feature?.icon} className={feature?.className || ''} />
                <div className='flex flex-col gap-3 sm:gap-4'>
                  {feature?.descriptions?.map((description, idx) => <DescriptionItem key={idx} description={description} color={feature?.className} />)}
                </div>
              </div>
            )
          }
          return (
            <div key={index} className='order-first mx-auto w-full max-w-[350px] sm:max-w-none lg:order-none'>
              <Image src={feature.image} alt={feature.altText} width={500} height={500} className='size-full rounded-lg object-cover' priority />
            </div>
          )
        })}
      </div>
    </section>
  )
}
