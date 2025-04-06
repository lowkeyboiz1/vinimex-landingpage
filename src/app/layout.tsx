import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

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
  description: 'Vinimex AI cung cấp các công cụ hiện đại giúp người nông dân tối ưu hóa quy trình sản xuất, giảm thiểu rủi ro và tăng giá trị sản phẩm.',
  keywords: 'nông nghiệp thông minh, trợ lý AI, Đom Đóm, nông nghiệp Việt Nam, học máy nông nghiệp',
  authors: [{ name: 'Vinimex' }],
  creator: 'Vinimex',
  publisher: 'Vinimex',
  openGraph: {
    title: 'Vinimex AI | Giải pháp nông nghiệp thông minh',
    description: 'Công nghệ AI tiên tiến cho nông nghiệp Việt Nam',
    locale: 'vi_VN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinimex AI | Giải pháp nông nghiệp thông minh',
    description: 'Công nghệ AI tiên tiến cho nông nghiệp Việt Nam'
  },
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='vi'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
