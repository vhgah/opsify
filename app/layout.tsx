import type { Metadata } from 'next'
import './globals.css'
import { NewsroomSidebar } from '@/components/ghostplugins/NewsroomSidebar'
import { AnnouncementBar } from '@/components/ghostplugins/AnnouncementBar'
import { SiteHeader } from '@/components/ghostplugins/SiteHeader'
import { SiteFooter } from '@/components/ghostplugins/SiteFooter'
import { CookieBanner } from '@/components/ghostplugins/CookieBanner'

export const metadata: Metadata = {
  title: 'Opsify - Guides & Tools for New Shopify, WooCommerce & Squarespace Sellers',
  description:
    'Opsify helps new e-commerce sellers set up and launch their store on Shopify, WooCommerce, or Squarespace, with step-by-step guides and a Squarespace plugin/template toolkit.',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', url: '/icon.png', type: 'image/png', sizes: '192x192' },
    { rel: 'apple-touch-icon', url: '/apple-icon.png', sizes: '180x180' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='h-full antialiased'>
      <body className='min-h-full flex flex-col'>
        <div className='flex flex-1 flex-col bg-white'>
          <div className='fixed left-0 top-0 z-40 w-full'>
            <AnnouncementBar />
            <SiteHeader />
          </div>

          <main className='flex pt-20'>
            <NewsroomSidebar />
            <div className='w-full md:pl-[var(--size-sidebar)]'>
              {children}
              <SiteFooter />
            </div>
          </main>

          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
