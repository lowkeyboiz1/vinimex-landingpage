import Title from '@/components/Title'
import { Camera, Lightbulb, User, Users } from 'lucide-react'
import Image from 'next/image'
import { memo } from 'react'
import { Button } from '../ui/button'

const JoinCommunity = () => {
  const communitys = [
    {
      title: 'Trở thành người dùng đầu tiên',
      description: 'Đăng ký làm Beta Farmer để trải nghiệm các tính năng mới sớm nhất',
      icon: <Users className='text-[#16A34A]' size={24} />,
      text: '👉 Nhận hỗ trợ trực tiếp từ đội ngũ phát triển'
    },
    {
      title: 'Góp ý để Vinimex tốt hơn',
      description: 'Chia sẻ những khó khăn, mong muốn và đề xuất tính năng',
      icon: <Lightbulb className='text-[#16A34A]' size={24} />,
      text: '👉 Cùng nhau làm ra sản phẩm phù hợp với bà con mình'
    },
    {
      title: 'Gửi ảnh sâu bệnh giúp AI học',
      description: 'Chụp và gửi hình ảnh cây trồng bị sâu bệnh',
      icon: <Camera className='text-[#16A34A]' size={24} />,
      text: '👉 Giúp AI học nhanh – chẩn đoán ngày càng chính xác'
    }
  ]
  return (
    <section id='digital-farmer-profile' className='relative mx-auto min-h-[150dvh] bg-white py-8 sm:py-12 md:py-24'>
      <div className='container mx-auto flex flex-col gap-8 px-4 sm:gap-12'>
        <div className='mx-auto flex max-w-3xl flex-col items-center gap-2'>
          <Title title='Tham gia cộng đồng' />
          <p className='mt-2 text-center text-3xl font-bold sm:text-4xl md:text-6xl'>Bạn có thể làm gì hôm nay?</p>
          <p className='text-center text-sm text-[#333333] sm:text-base'>Cùng Vinimex AI xây dựng một cộng đồng nông dân Việt thông minh và đoàn kết hơn 💚</p>
        </div>
        <div className='grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3'>
          {communitys.map((item, index) => (
            <div key={index} className='z-10 flex h-full flex-col gap-4 rounded-lg bg-[#D2E4D1]/50 p-4 pb-8 backdrop-blur-sm sm:gap-6 sm:p-6 sm:pb-12'>
              <div className='flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] sm:size-10'>{item.icon}</div>
              <div className='flex flex-1 flex-col gap-1'>
                <p className='text-lg font-bold sm:text-xl'>{item.title}</p>
                <p className='text-sm text-[#333333] sm:text-base'>{item.description}</p>
              </div>
              <p className='mt-auto text-sm text-[#333333] sm:text-base'>{item.text} 👉</p>
            </div>
          ))}
        </div>
      </div>
      <div className='absolute right-0 bottom-0 left-0'>
        <Image src='/joinComuniti.png' alt='Green Ecosystem' width={3000} height={3000} className='w-full' />
      </div>
    </section>
  )
}

export default memo(JoinCommunity)
