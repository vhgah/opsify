import type { Metadata } from 'next'
import './globals.css'
import { NewsroomSidebar } from '@/components/ghostplugins/NewsroomSidebar'
import { AnnouncementBar } from '@/components/ghostplugins/AnnouncementBar'
import { SiteHeader } from '@/components/ghostplugins/SiteHeader'
import { SiteFooter } from '@/components/ghostplugins/SiteFooter'
import { CookieBanner } from '@/components/ghostplugins/CookieBanner'

export const metadata: Metadata = {
  title: 'Ghost Plugins - The Most Loved Toolkit For Squarespace',
  description:
    'From complimentary plugins, to premium plugins and installed-for-you templates, Ghost is a growing toolkit for Squarespace websites.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
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
