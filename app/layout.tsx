import type { Metadata } from 'next'
import './globals.css'
import { NewsroomSidebar } from '@/components/ghostplugins/NewsroomSidebar'
import { AnnouncementBar } from '@/components/ghostplugins/AnnouncementBar'
import { SiteHeader } from '@/components/ghostplugins/SiteHeader'
import { SiteFooter } from '@/components/ghostplugins/SiteFooter'
import { CookieBanner } from '@/components/ghostplugins/CookieBanner'

const SITE_URL = 'https://opsify.art'
const SITE_NAME = 'Opsify'
const SITE_DESCRIPTION =
  'Opsify helps new e-commerce sellers set up and launch their store on Shopify, WooCommerce, or Squarespace, with step-by-step guides and a Squarespace plugin/template toolkit.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Opsify - Guides & Tools for New Shopify, WooCommerce & Squarespace Sellers',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', url: '/icon.png', type: 'image/png', sizes: '192x192' },
    { rel: 'apple-touch-icon', url: '/apple-icon.png', sizes: '180x180' },
  ],
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': `${SITE_URL}/rss.xml` },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: 'Opsify - Guides & Tools for New Shopify, WooCommerce & Squarespace Sellers',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opsify - Guides & Tools for New Shopify, WooCommerce & Squarespace Sellers',
    description: SITE_DESCRIPTION,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
    },
    {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
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
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
