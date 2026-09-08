import { CookieBanner } from './CookieBanner'
import { NewsroomSidebar } from './NewsroomSidebar'
import { SiteFooter } from './SiteFooter'
import { TemplatesGrid } from './TemplatesGrid'

export function TemplatesPage() {
  return (
    <div className='flex flex-1 flex-col bg-white'>
      <main
        className='flex flex-1 flex-col'
        style={{ paddingTop: 'var(--size-header-offset)' }}
      >
        <div className='flex w-full'>
          <NewsroomSidebar />

          <div className='flex-1 px-6 py-12 lg:px-8'>
            <div className='mx-auto w-full max-w-[var(--size-content)]'>
              <div className='rounded-sm border border-brand bg-white px-4 py-3 text-center text-sm text-brand'>
                <strong>We are updating the template library.</strong>{' '}
                <span>Check back often for new template releases.</span>
              </div>

              <div className='mt-8 flex items-center justify-between'>
                <div className='text-2xl font-semibold leading-7 text-[var(--gp-text)]'>
                  Template Library
                </div>
                <a
                  href='/pro-access'
                  className='hidden rounded-md border border-[var(--gp-border)] bg-white px-4.5 py-3.5 text-sm font-semibold text-[var(--gp-text)] md:block'
                >
                  Pro Member Access
                </a>
              </div>

              <p className='mt-4 max-w-[var(--size-copy)] text-sm leading-relaxed text-[var(--gp-text)]'>
                A growing library of premium templates for Squarespace – from
                non-branded layouts for a clean slate, to pre-branded layouts
                for a quick design head start.
              </p>

              <div className='mt-6 flex flex-wrap items-center gap-5 text-xs font-semibold text-[var(--gp-text)]'>
                <span className='inline-flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-black' />
                  Boo
                </span>
                <span className='inline-flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-brand' />
                  Cool
                </span>
                <span className='inline-flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-swatch-forest' />
                  Forest
                </span>
                <span className='inline-flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-swatch-night' />
                  Night
                </span>
                <span className='inline-flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-swatch-neutral' />
                  Neutral
                </span>
                <span className='inline-flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-swatch-warm' />
                  Warm
                </span>
              </div>

              <TemplatesGrid />
            </div>
          </div>
        </div>

        <SiteFooter />
      </main>

      <CookieBanner />
    </div>
  )
}
