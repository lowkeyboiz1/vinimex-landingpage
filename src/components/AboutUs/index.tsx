import Image from 'next/image'
import { Leaf, Lightbulb, Shield } from 'lucide-react'
import TitleBadge from '@/components/TitleBadge'

const AboutUs = () => {
  return (
    <section className='flex min-h-dvh items-center justify-center bg-gray-50 py-12 md:py-16'>
      <div className='container mx-auto'>
        <div className='mx-auto mb-10 px-4 text-center md:mb-16 md:px-20'>
          <TitleBadge title='Về chúng tôi' />
          <h2 className='mb-4 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl'>Nền tảng AI nông nghiệp tiên phong tại Việt Nam</h2>
          <p className='text-base text-gray-700 md:text-lg'>
            Vinimex AI Platform là nền tảng thông minh ứng dụng trí tuệ nhân tạo (AI) tiên phong trong lĩnh vực nông nghiệp Việt Nam. Chúng tôi kết hợp công nghệ tiên tiến với hiểu biết sâu sắc về
            nông nghiệp Việt Nam để mang đến giải pháp toàn diện, thúc đẩy chuyển đổi số và phát triển bền vững.
          </p>
        </div>
        <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12'>
          <div className='relative'>
            <Image src='/about-us.jpg' alt='Vinimex AI trong thực tế' className='relative z-10 h-auto w-full rounded-xl object-cover shadow-xl' width={600} height={600} />
          </div>
          <div className='space-y-4 md:space-y-6'>
            <div className='flex items-start gap-3 rounded-2xl p-3 shadow-md md:gap-4 md:p-4'>
              <div className='rounded-lg bg-[#D2E4D1] p-2 text-[#6A994E] md:p-3'>
                <Leaf className='size-5 md:size-6' />
              </div>
              <div>
                <h3 className='mb-1 text-lg font-semibold md:mb-2 md:text-xl'>Sứ mệnh của chúng tôi</h3>
                <p className='text-sm text-gray-700 md:text-base'>
                  Thúc đẩy chuyển đổi số ngành nông nghiệp Việt Nam, nâng cao năng suất và chất lượng sản xuất nông nghiệp thông qua công nghệ AI tiên tiến.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3 rounded-2xl p-3 shadow-md md:gap-4 md:p-4'>
              <div className='rounded-lg bg-[#D2E4D1] p-2 text-[#6A994E] md:p-3'>
                <Lightbulb className='size-5 md:size-6' />
              </div>
              <div>
                <h3 className='mb-1 text-lg font-semibold md:mb-2 md:text-xl'>Tầm nhìn</h3>
                <p className='text-sm text-gray-700 md:text-base'>Trở thành nền tảng AI nông nghiệp hàng đầu Đông Nam Á, góp phần đưa nông nghiệp Việt Nam lên tầm cao mới, bền vững và thịnh vượng.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 rounded-2xl p-3 shadow-md md:gap-4 md:p-4'>
              <div className='rounded-lg bg-[#D2E4D1] p-2 text-[#6A994E] md:p-3'>
                <Shield className='size-5 md:size-6' />
              </div>
              <div>
                <h3 className='mb-1 text-lg font-semibold md:mb-2 md:text-xl'>Giá trị cốt lõi</h3>
                <p className='text-sm text-gray-700 md:text-base'>Đổi mới sáng tạo, tôn trọng bản sắc văn hóa, phát triển bền vững và tạo giá trị thực cho cộng đồng nông nghiệp Việt Nam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
