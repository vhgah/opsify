export function NewsroomSidebar() {
  return (
    <div className='px-5 hidden md:block py-10 border-r border-[var(--gp-border-soft)] fixed left-0 top-17 h-full w-[var(--size-sidebar)]'>
      <h3
        className='ghost-news-title mt-8 mb-5.5 text-base leading-tight font-semibold text-[var(--gp-text)]'
      >
        Newsroom
      </h3>

      <div className='space-y-4'>
        <div className='rounded-lg border border-[var(--gp-border)] bg-white p-4'>
          <div className='text-sm font-semibold'>Meet Ghost Plugins</div>
          <div className='mt-2 text-xs leading-normal text-text-muted'>
            Since 2018, Ghost has been the most loved toolkit for Squarespace.
          </div>
        </div>

        <div className='rounded-lg border border-[var(--gp-border)] bg-white p-4'>
          <div className='text-sm font-semibold'>Go Pro</div>
          <div className='mt-2 text-xs leading-normal text-text-muted'>
            Get unlimited Super Plugins and Templates with Ghost+ Pro Access.
          </div>
        </div>

        <div className='rounded-lg border border-[var(--gp-border)] bg-white p-4'>
          <div className='text-sm font-semibold'>Library Updates</div>
          <div className='mt-2 text-xs leading-normal text-text-muted'>
            We&apos;re updating the plugin and template libraries with new
            drops.
          </div>
        </div>
      </div>
    </div>
  )
}
