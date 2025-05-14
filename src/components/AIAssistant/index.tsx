import Title from '@/components/Title'
import { Bot, CircleCheck, Clock, Settings, Timer } from 'lucide-react'
import Image from 'next/image'
import Script from 'next/script'

const FeaturesItem = ({
  feature
}: {
  feature: { icon: React.ReactNode; title: string; image: string; descriptions: string[]; iconDescription: React.ReactNode; className: string; altText: string }
}) => {
  return (
    <div className='z-30 flex flex-col gap-2 rounded-3xl bg-white p-4 shadow-[0px_12px_24px_0px_#0000001F] sm:p-6 lg:translate-y-[80%]'>
      <Title title={feature.title} icon={feature.icon} className={feature.className} />
      <Image src={feature.image} alt={feature.altText} width={500} height={500} className='w-full' />
      <ul className='flex flex-col gap-3 text-xs sm:gap-4 sm:text-sm'>
        {feature.descriptions.map((description, index) => (
          <li key={index} className='flex items-center gap-2'>
            <span aria-hidden='true'>{feature.iconDescription}</span>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function AIAssistant() {
  const features = [
    {
      icon: <Bot size={24} color='#1B793A' />,
      className: 'bg-[#DFF5E1] text-[#1B793A]',
      title: 'Hiện đã phát triển',
      image: '/feature1.png',
      altText: 'Giao diện trợ lý AI Vinimex với các tính năng đã phát triển như chatbot tiếng Việt và nhận diện bệnh cây',
      descriptions: ['Giao diện đơn giản, dễ dùng cho người lớn tuổi', 'Chatbot nói & hiểu tiếng Việt', 'Nhận diện bệnh cây qua hình ảnh'],
      iconDescription: <CircleCheck size={24} color='#1B793A' />
    },
    {
      icon: <Settings size={24} color='#0C5CA3' />,
      className: 'bg-[#E2F0FB] text-[#0C5CA3]',
      title: 'Hiện đang phát triển',
      image: '/feature2.png',
      altText: 'Giao diện cập nhật thời tiết và giá nông sản theo vùng miền đang được phát triển cho Vinimex AI',
      descriptions: ['Gợi ý cách chăm sóc theo mùa vụ', 'Cập nhật thời tiết và giá theo vùng', 'Cá nhân hóa theo từng hộ trồng'],
      iconDescription: <Settings size={24} color='#0C5CA3' />
    },
    {
      icon: <Clock size={24} color='#F4A300' />,
      className: 'bg-[#FFF4E1] text-[#F4A300]',
      title: 'Sắp tới',
      image: '/feature3.png',
      altText: 'Tính năng thông báo mùa vụ và hồ sơ số theo dõi toàn bộ mùa vụ sắp được phát triển cho Vinimex AI',
      descriptions: ['Thông báo mùa vụ bằng AI', 'Thử nghiệm toàn diện tại 10 tỉnh', 'Hồ sơ số theo dõi toàn bộ mùa vụ'],
      iconDescription: <Clock size={24} color='#F4A300' />
    }
  ]
  return (
    <section id='features' className='relative min-h-[150dvh] bg-[#FFF7EB]'>
      <div className='absolute top-[12%] left-0 z-[1] h-dvw w-full'>
        <Image src='/feature.png' alt='Hình ảnh minh họa tính năng Vinimex AI' width={3000} height={1000} className='w-full' priority />
      </div>
      <div className='z-10 container mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16'>
        <header className='mb-6 flex flex-col items-center gap-2 text-center sm:mb-8 sm:gap-3 md:mb-12 md:gap-4 lg:mb-16'>
          <Title title='Tính năng nổi bật' />
          <h2 className='z-30 mb-2 text-xl font-bold text-[#333333] sm:text-2xl md:text-3xl lg:text-6xl'>Vinimex AI đang xây dưng gì?</h2>

          <p className='z-30 max-w-3xl text-sm text-[#333333] sm:text-base md:text-lg'>
            Chúng tôi đang từng bước phát triển một trợ lý AI toàn diện, nói tiếng Việt, hiểu nông dân và đồng hành cùng bà con từ đầu mùa đến khi thu hoạch.
          </p>
        </header>
        <div className='z-30 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-10 lg:grid-cols-3 lg:gap-12'>
          {features.map((feature, index) => {
            return <FeaturesItem key={index} feature={feature} />
          })}
        </div>
      </div>

      <Script
        id='features-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: features.map((feature, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'SoftwareApplication',
                name: feature.title,
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Android, iOS, Web',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'VND'
                },
                description: feature.descriptions.join('. ')
              }
            }))
          })
        }}
      />
    </section>
  )
}
