import AboutUs from '@/components/AboutUs'
import AIAssistant from '@/components/AIAssistant'
import JoinCommunity from '@/components/JoinCommunity'
import HeroSection from '@/components/HeroSection'
import SmartDashboard from '@/components/SmartDashboard'
import TroLyAI from '@/components/TroLyAI'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Đom Đóm AI | Trợ lý nông nghiệp thông minh hàng đầu Việt Nam',
  description: 'Khám phá Đom Đóm AI - nền tảng trợ lý nông nghiệp thông minh sử dụng công nghệ AI tiên tiến giúp tối ưu hóa năng suất, giảm chi phí và tăng lợi nhuận cho người nông dân Việt Nam.',
  alternates: {
    canonical: 'https://domdomai.vn'
  },
  openGraph: {
    title: 'Đom Đóm AI | Trợ lý nông nghiệp thông minh hàng đầu',
    description: 'Công nghệ AI tiên tiến cho nông nghiệp Việt Nam. Tối ưu hóa năng suất, giảm chi phí và tăng lợi nhuận cho người nông dân.',
    images: [
      {
        url: 'https://domdomai.vn/home-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Đom Đóm AI - Trợ lý nông nghiệp thông minh'
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <AIAssistant />
      <TroLyAI />
      <SmartDashboard />
      <JoinCommunity />

      <Script
        id='homepage-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Đom Đóm AI - Trợ lý nông nghiệp thông minh',
            description: 'Khám phá Đom Đóm AI - nền tảng trợ lý nông nghiệp thông minh sử dụng công nghệ AI tiên tiến giúp tối ưu hóa năng suất cho nông dân Việt Nam.',
            url: 'https://domdomai.vn',
            mainEntity: {
              '@type': 'SoftwareApplication',
              name: 'Đom Đóm AI',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Android, iOS, Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'VND'
              }
            },
            potentialAction: {
              '@type': 'RegisterAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://domdomai.vn/#register'
              },
              description: 'Đăng ký dùng thử khi chúng tôi ra mắt'
            }
          })
        }}
      />
    </>
  )
}
