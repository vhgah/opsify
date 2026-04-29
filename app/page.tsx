import { AnnouncementBar } from '@/components/ghostplugins/AnnouncementBar'
import { CookieBanner } from '@/components/ghostplugins/CookieBanner'
import { HomeHero } from '@/components/ghostplugins/HomeHero'
import { NewsroomSidebar } from '@/components/ghostplugins/NewsroomSidebar'
import { SiteFooter } from '@/components/ghostplugins/SiteFooter'
import { SiteHeader } from '@/components/ghostplugins/SiteHeader'

export default function Home() {
  return (
    <div className='flex flex-1 flex-col bg-white'>
      <div className='fixed left-0 top-0 z-40 w-full'>
        <AnnouncementBar />
        <SiteHeader />
      </div>

      <main className='flex pt-20'>
        <NewsroomSidebar />
        <div className='w-full pl-[300px]'>
          <HomeHero />
          <SiteFooter />
        </div>
      </main>

      {/* <CookieBanner /> */}
    </div>
  )
}
