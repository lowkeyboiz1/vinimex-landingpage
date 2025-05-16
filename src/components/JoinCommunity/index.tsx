import Title from '@/components/Title'
import { Bell, Camera, Lightbulb, User, Users } from 'lucide-react'
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
    <section id='digital-farmer-profile' className='container mx-auto mb-20 bg-white py-8 sm:py-12 md:py-24'>
      <div className='flex flex-col gap-8 px-4 sm:gap-12'>
        <div className='mx-auto flex max-w-3xl flex-col items-center gap-2'>
          <Title title='Tham gia cộng đồng' />
          <p className='mt-2 text-center text-3xl font-bold sm:text-4xl md:text-6xl'>Bạn có thể làm gì hôm nay?</p>
          <p className='mt-4 text-center text-sm text-[#333333] sm:text-base'>Cùng Vinimex AI xây dựng một cộng đồng nông dân Việt thông minh và đoàn kết hơn 💚</p>
        </div>
        <div className='grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3'>
          {communitys.map((item, index) => (
            <div key={index} className='z-10 flex h-full flex-col gap-4 rounded-lg bg-[#D2E4D1]/50 p-4 pb-8 backdrop-blur-sm sm:gap-6 sm:p-6 sm:pb-12'>
              <div className='mx-auto flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] sm:size-10'>{item.icon}</div>
              <div className='flex flex-1 flex-col gap-1'>
                <p className='text-lg font-bold sm:text-xl'>{item.title}</p>
                <p className='text-sm text-[#333333] sm:text-base'>{item.description}</p>
              </div>
              <p className='mt-auto text-sm text-[#333333] sm:text-base'>{item.text} 👉</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-12 grid gap-2 px-4 md:grid-cols-2 md:gap-5 lg:px-0'>
        <Button className='w-full cursor-pointer rounded-full bg-[#2EAF5D] py-4 text-sm text-white hover:bg-[#2EAF5D]/80 md:text-base' aria-label='Tham gia cộng đồng Zalo của Vinimex AI'>
          <span>
            <Image src='/zalo.png' alt='Zalo logo' width={50} height={50} className='size-4 md:size-6' />
          </span>
          Tham gia cộng động Zalo của Vinimex AI
        </Button>
        <Button className='w-full cursor-pointer rounded-full bg-[#F4A300] py-4 text-sm text-white hover:bg-[#F4A300]/80 md:text-base' aria-label='Đăng ký dùng thử Vinimex AI'>
          <span>
            <Bell className='size-4 flex-shrink-0 md:size-5' aria-hidden='true' />
          </span>
          Đăng ký dùng thử khi chúng tôi ra mắt
        </Button>
      </div>
    </section>
  )
}

export default memo(JoinCommunity)
