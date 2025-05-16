import Title from '@/components/Title'
import { Heart, Lightbulb, TreeDeciduous } from 'lucide-react'
import Image from 'next/image'

export default function SmartDashboard() {
  const aboutUs = [
    {
      title: 'Sứ mệnh',
      description: ['Thúc đẩy chuyển đổi số ngành nông nghiệp Việt Nam, nâng cao năng suất và chất lượng sản xuất nông nghiệp thông qua công nghệ AI tiên tiến.'],
      icon: <TreeDeciduous className='text-[#16A34A]' size={24} />
    },
    {
      title: 'Tầm nhìn',
      description: ['Trở thành nền tảng AI nông nghiệp hàng đầu Đông Nam Á – nơi bà con Việt Nam được hỗ trợ từ lúc gieo hạt đến khi thu hoạch.'],
      icon: <Lightbulb className='text-[#16A34A]' size={24} />
    },
    {
      title: 'Giá trị cốt lõi',
      description: ['Sáng tạo – Tận tâm – Bền vững.', 'Vinimex tôn trọng bản sắc, phát triển cùng cộng đồng và luôn tạo ra giá trị thật cho người Việt.'],
      icon: <Heart className='text-[#16A34A]' size={24} />
    }
  ]

  return (
    <section id='digital-farmer-profile' className='container mx-auto flex min-h-dvh max-w-[1240px] flex-col gap-8 bg-white py-8 sm:gap-12 sm:py-16 md:py-24'>
      <div className='mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 sm:px-6'>
        <Title title='Trợ lý AI' />
        <p className='mt-2 text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>Nền tảng AI nông nghiệp của người Việt, vì người Việt</p>
        <p className='mt-4 text-center text-sm text-[#333333] sm:text-base'>
          Đom Đóm là trợ lý AI biết nói tiếng Việt, hiểu chuyện nhà nông và luôn sẵn sàng giúp đỡ bà con 24/7 – từ chẩn đoán bệnh cây, theo dõi mùa vụ đến dự báo thời tiết.
        </p>
      </div>
      <div className='grid grid-cols-1 items-center gap-6 px-4 sm:px-6 md:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          {aboutUs.map((item, index) => (
            <div key={index} className='flex gap-3'>
              <div className='flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] sm:size-10'>{item.icon}</div>
              <div className='flex flex-col gap-2'>
                <p className='text-lg font-bold sm:text-xl'>{item.title}</p>
                {item.description.map((desc, index) => (
                  <p key={index} className='text-sm text-[#333333] sm:text-base'>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='order-first md:order-last'>
          <Image src='/about-us.png' alt='AI' width={1000} height={1000} className='w-full' />
        </div>
      </div>
    </section>
  )
}
