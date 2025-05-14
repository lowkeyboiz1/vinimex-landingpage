import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vinimex AI - Trợ lý nông nghiệp thông minh',
    short_name: 'Vinimex AI',
    description: 'Công nghệ AI tiên tiến cho nông nghiệp Việt Nam.',
    start_url: '/',
    display: 'standalone',
    background_color: '#2EAF5D',
    theme_color: '#F4A300',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/icon-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    related_applications: [
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=vn.vinimexai.app',
        id: 'vn.vinimexai.app'
      },
      {
        platform: 'itunes',
        url: 'https://apps.apple.com/app/vinimexai/id123456789'
      }
    ],
    screenshots: [
      {
        src: '/screenshots/desktop1.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: '/screenshots/mobile1.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow'
      }
    ]
  }
}
