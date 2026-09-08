import { ToolboxGrid } from './ToolboxGrid'

export function ToolboxPage() {
  return (
    <main className='flex flex-1 flex-col' style={{ paddingTop: 'var(--size-header-offset)' }}>
      <div className='flex-1 px-6 py-12 lg:px-8'>
        <div className='mx-auto w-full max-w-[var(--size-content)]'>
          <div className='text-2xl font-semibold leading-7 text-[var(--gp-text)]'>
            Tools and Resources
          </div>

          <p className='mt-4 max-w-[var(--size-copy)] text-sm leading-relaxed text-[var(--gp-text)]'>
            We’ve gathered some of our favorites tools and resources that can
            help with your Squarespace website, design business, or goals for
            client projects.
          </p>

          <p className='mt-4 max-w-[var(--size-copy)] text-sm leading-relaxed text-[var(--gp-text)]'>
            <em>
              Some links may be affiliate based – but we only share what we
              love. 💙
            </em>
          </p>
{/* 
          <div className='mt-6'>
            <a
              href='#'
              className='inline-flex items-center justify-center rounded-[6.4px] border border-[var(--gp-border)] bg-white px-[17.28px] py-[14.4px] text-[14.4px] font-semibold text-[var(--gp-text)]'
            >
              Submit a Tool or Resource
            </a>
          </div> */}

          <ToolboxGrid />
        </div>
      </div>
    </main>
  )
}
