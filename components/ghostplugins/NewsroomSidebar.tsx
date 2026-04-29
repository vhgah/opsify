export function NewsroomSidebar() {
  return (
    <div className='px-5 hidden md:block py-10 border-r border-[var(--gp-border-soft)] fixed left-0 top-17 h-full w-[300px]'>
      <h3
        className='ghost-news-title text-[15.2px] font-semibold text-[var(--gp-text)]'
        style={{ margin: '32px 0px 22px', lineHeight: '19.7995px' }}
      >
        Newsroom
      </h3>

      <div className='space-y-4'>
        <div className='rounded-[8px] border border-[var(--gp-border)] bg-white p-4'>
          <div className='text-[14.4px] font-semibold'>Meet Ghost Plugins</div>
          <div className='mt-2 text-[12.8px] leading-[18px] text-[#666]'>
            Since 2018, Ghost has been the most loved toolkit for Squarespace.
          </div>
        </div>

        <div className='rounded-[8px] border border-[var(--gp-border)] bg-white p-4'>
          <div className='text-[14.4px] font-semibold'>Go Pro</div>
          <div className='mt-2 text-[12.8px] leading-[18px] text-[#666]'>
            Get unlimited Super Plugins and Templates with Ghost+ Pro Access.
          </div>
        </div>

        <div className='rounded-[8px] border border-[var(--gp-border)] bg-white p-4'>
          <div className='text-[14.4px] font-semibold'>Library Updates</div>
          <div className='mt-2 text-[12.8px] leading-[18px] text-[#666]'>
            We&apos;re updating the plugin and template libraries with new
            drops.
          </div>
        </div>
      </div>
    </div>
  )
}
