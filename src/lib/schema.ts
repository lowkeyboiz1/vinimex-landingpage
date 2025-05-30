export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Đom Đóm AI',
  url: 'https://domdomai.vn',
  logo: 'https://domdomai.vn/logo-black.png',
  sameAs: ['https://facebook.com/domdomai', 'https://zalo.me/domdomai'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+84-1800-xxxx',
    contactType: 'customer service',
    availableLanguage: ['Vietnamese', 'English']
  },
  description: 'Đom Đóm AI cung cấp các công cụ hiện đại giúp người nông dân tối ưu hóa quy trình sản xuất, giảm thiểu rủi ro và tăng giá trị sản phẩm.'
}

export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Đom Đóm AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android, iOS, Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'VND'
  },
  description: 'Trợ lý AI nông nghiệp thông minh dành cho nông dân Việt Nam.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '250'
  }
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Trang chủ',
      item: 'https://domdomai.vn'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tính năng',
      item: 'https://domdomai.vn/#features'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Về chúng tôi',
      item: 'https://domdomai.vn/#about-us'
    }
  ]
}

export const articleSchema = (title: string, description: string, image: string, datePublished: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description: description,
  image: [image],
  datePublished: datePublished,
  dateModified: new Date().toISOString(),
  author: {
    '@type': 'Organization',
    name: 'Đom Đóm AI',
    url: 'https://domdomai.vn'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Đom Đóm AI',
    logo: {
      '@type': 'ImageObject',
      url: 'https://domdomai.vn/logo-black.png'
    }
  }
})

export const faqSchema = (questions: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
})
