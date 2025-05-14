import { memo } from 'react'
import Title from '@/components/Title'
import Image from 'next/image'
import { CircleCheck } from 'lucide-react'

const TroLyAI = () => {
  const AIs = [
    {
      title: 'Tư vấn chính xác bằng trí tuệ nhân tạo',
      description: 'Giúp bà con chẩn đoán sâu bệnh, lên kế hoạch gieo trồng, chọn thời điểm thu hoạch.'
    },
    {
      title: 'Nói tiếng Việt, hiểu giọng người quê',
      description: 'Đom Đóm hiểu cả những cách nói quen thuộc của người dân – không cần gõ máy rắc rối.'
    },
    {
      title: 'Dữ liệu chuẩn, cập nhật theo thời gian thực',
      description: 'Dữ liệu thời tiết, thị trường và khí tượng được cập nhật liên tục để đưa ra lời khuyên kịp thời và chính xác.'
    }
  ]
  return (
    <section id='digital-farmer-profile' className='container mx-auto flex min-h-dvh flex-col gap-8 bg-white py-8 sm:gap-12 sm:py-16 md:py-24'>
      <div className='mx-auto flex max-w-3xl flex-col items-center gap-2 px-4 sm:px-6'>
        <Title title='Trợ lý AI' />
        <p className='mt-2 text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>Đom Đóm AI hiểu bà con, giỏi việc đồng áng</p>
        <p className='text-center text-sm text-[#333333] sm:text-base'>
          Đom Đóm là trợ lý AI biết nói tiếng Việt, hiểu chuyện nhà nông và luôn sẵn sàng giúp đỡ bà con 24/7 – từ chẩn đoán bệnh cây, theo dõi mùa vụ đến dự báo thời tiết.
        </p>
      </div>
      <div className='flex flex-col-reverse gap-6 px-4 sm:px-6 md:grid md:grid-cols-2 md:items-center md:gap-4'>
        <div className='flex flex-col gap-4'>
          {AIs.map((AI, index) => (
            <div key={index} className='flex gap-2 rounded-2xl bg-[#DFF5E1] p-4 sm:p-6'>
              <div>
                <CircleCheck size={24} color='#56C97C' />
              </div>

              <div className='flex flex-col'>
                <h3 className='text-lg font-bold sm:text-xl'>{AI.title}</h3>
                <p className='text-sm text-[#333333] sm:text-base'>{AI.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image src='/TroLyAI.png' alt='AI' width={1000} height={1000} className='w-full' />
        </div>
      </div>
    </section>
  )
}

export default memo(TroLyAI)
