import Title from '@/components/Title'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const AboutUs = () => {
  const challenges = [
    {
      image: '/why1.png',
      alt: 'Nông dân đang vất vả tìm kiếm thông tin canh tác trên nhiều nguồn khác nhau',
      title: 'Thông tin khó tiếp cận',
      description: 'Kiến thức canh tác thường bị phân tán, khó hiểu hoặc không cập nhật thường xuyên. Bà con gặp khó khi tìm thông tin chính xác, dễ hiểu để áp dụng vào thực tế.'
    },
    {
      image: '/why2.png',
      alt: 'Nông dân đang phân tích dữ liệu thời tiết và giá cả thị trường không chính xác',
      title: 'Thiếu dữ liệu chính xác',
      description: 'Thông tin thời tiết và giá nông sản không cập nhật theo từng vùng, gây khó khăn cho việc lên kế hoạch gieo trồng hay bán ra thị trường.'
    },
    {
      image: '/why3.png',
      alt: 'Nông dân lớn tuổi đang vật lộn với giao diện công nghệ phức tạp khó sử dụng',
      title: 'Công nghệ quá phức tạp',
      description: 'Nhiều app nông nghiệp hiện tại quá khó dùng với người lớn tuổi, lại không hỗ trợ giọng nói tiếng Việt, làm bà con thấy nản.'
    }
  ]

  return (
    <section id='about-us' className='min-h-dvh bg-white py-16'>
      <div className='container mx-auto max-w-[1240px] px-4 py-8 sm:py-12 md:py-16'>
        <header className='mb-8 flex flex-col items-center gap-2 text-center sm:mb-12 sm:gap-3 md:mb-16 md:gap-4'>
          <Title title='Thách thức của nhà nông' />
          <h2 className='mb-2 text-2xl font-bold text-[#333333] sm:text-3xl md:text-4xl lg:text-6xl'>Vì sao Vinimex AI ra đời?</h2>

          <p className='max-w-3xl text-base text-[#333333] sm:text-lg'>
            Trong thời đại số, bà con nông dân Việt Nam đang gặp nhiều khó khăn khi tiếp cận công nghệ vào sản xuất. Vinimex AI ra đời để giải quyết những vấn đề đó.
          </p>
        </header>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6'>
          {challenges.map((challenge, index) => (
            <article key={index} className='overflow-hidden rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg'>
              <div className='relative aspect-[4/3] w-full'>
                <Image
                  src={challenge.image}
                  alt={challenge.alt}
                  fill
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  className='overflow-hidden rounded-2xl object-cover'
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className='p-4 sm:p-6 md:p-8'>
                <h3 className='mb-2 text-xl font-bold text-[#333333] sm:mb-3 sm:text-2xl md:mb-4'>{challenge.title}</h3>
                <p className='mb-4 line-clamp-4 min-h-[80px] text-sm text-[#333333] sm:mb-5 sm:min-h-[90px] sm:text-base md:mb-6 md:min-h-[100px]'>{challenge.description}</p>
                <Link
                  href='#'
                  className='inline-flex items-center text-sm font-medium text-[#56c97c] transition-colors hover:text-[#45a164] sm:text-base'
                  aria-label={`Tìm hiểu thêm về ${challenge.title}`}
                >
                  Tìm hiểu thêm <ArrowRight className='ml-2 h-3 w-3 sm:h-4 sm:w-4' aria-hidden='true' />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Script
        id='about-us-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: challenges.map((challenge) => ({
              '@type': 'Question',
              name: challenge.title,
              acceptedAnswer: {
                '@type': 'Answer',
                text: challenge.description
              }
            }))
          })
        }}
      />
    </section>
  )
}

export default AboutUs
