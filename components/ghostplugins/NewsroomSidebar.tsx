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
          <div className='text-sm font-semibold'>Meet Opsify</div>
          <div className='mt-2 text-xs leading-normal text-text-muted'>
            Guides and tools to help new sellers launch on Shopify, WooCommerce, and Squarespace.
          </div>
        </div>

        <div className='rounded-lg border border-[var(--gp-border)] bg-white p-4'>
          <div className='text-sm font-semibold'>Squarespace Toolkit: Go Pro</div>
          <div className='mt-2 text-xs leading-normal text-text-muted'>
            Get unlimited Super Plugins and Templates with Ghost+ Pro Access.
          </div>
        </div>

        <div className='rounded-lg border border-[var(--gp-border)] bg-white p-4'>
          <div className='text-sm font-semibold'>New on the Blog</div>
          <div className='mt-2 text-xs leading-normal text-text-muted'>
            Fresh store-setup guides land regularly across all three platforms.
          </div>
        </div>
      </div>
    </div>
  )
}
