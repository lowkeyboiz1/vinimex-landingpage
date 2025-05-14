import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import Script from 'next/script'
import { breadcrumbSchema, organizationSchema } from '@/lib/schema'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Vinimex AI | Giải pháp nông nghiệp thông minh',
  description:
    'Vinimex AI cung cấp các công cụ hiện đại giúp người nông dân tối ưu hóa quy trình sản xuất, giảm thiểu rủi ro và tăng giá trị sản phẩm. Khám phá trợ lý AI của chúng tôi cho người nông dân Việt Nam.',
  keywords: 'nông nghiệp thông minh, trợ lý AI, Đom Đóm, nông nghiệp Việt Nam, học máy nông nghiệp, vinimex, canh tác thông minh, nông nghiệp số, quản lý nông trại, công nghệ nông nghiệp',
  authors: [{ name: 'Vinimex', url: 'https://vinimexai.vn' }],
  creator: 'Vinimex',
  publisher: 'Vinimex',
  alternates: {
    canonical: 'https://vinimexai.vn'
  },
  applicationName: 'Vinimex AI',
  category: 'Technology',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Vinimex AI | Giải pháp nông nghiệp thông minh',
    description: 'Công nghệ AI tiên tiến cho nông nghiệp Việt Nam. Tối ưu hóa quy trình canh tác và tăng năng suất với trợ lý thông minh.',
    locale: 'vi_VN',
    type: 'website',
    url: 'https://vinimexai.vn',
    siteName: 'Vinimex AI',
    images: [
      {
        url: 'https://vinimexai.vn/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vinimex AI - Trợ lý nông nghiệp thông minh'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinimex AI | Giải pháp nông nghiệp thông minh',
    description: 'Công nghệ AI tiên tiến cho nông nghiệp Việt Nam. Tối ưu hóa quy trình canh tác với trợ lý AI.',
    site: '@vinimexai',
    creator: '@vinimexai',
    images: ['https://vinimexai.vn/twitter-image.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'verify-code',
    yandex: 'verify-code',
    yahoo: 'verify-code',
    other: {
      me: ['info@vinimexai.vn']
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='vi'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          id='schema-org-data'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <Script
          id='breadcrumb-schema'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      </body>
    </html>
  )
}
