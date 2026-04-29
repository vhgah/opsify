import { GhostMark } from './GhostMark'

export function SiteFooter() {
  return (
    <footer className='mt-auto border-t border-[var(--gp-border-soft)] bg-white'>
      <div className='mx-auto flex max-w-[1440px] flex-col gap-8 px-10 py-5 lg:flex-row lg:items-start'>
        <div className='flex flex-col items-start gap-6'>
          <GhostMark size={40} />

          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4 text-[14.4px] font-semibold text-[var(--gp-text)] sm:flex-row sm:gap-8'>
              <a href='/support'>Support</a>
              <a href='/refunds'>Refunds</a>
              <a href='/license'>License</a>
              <a href='/feedback'>Feedback</a>
            </div>

            <div className='text-[#777]'>
              <span className='font-semibold text-[#777]'>Disclaimer: </span>{' '}
              Our website and products may contain links that will take you away
              from Ghost Plugins and could be affiliate based. This means that
              we may earn a commission if you make a purchase on these
              third-party websites – but we only recommend things that we have
              used or trust. Ghost Plugins is not affiliated, sponsored, or
              endorsed by Squarespace. The term &quot;Squarespace&quot; is the
              registered trademark and property of Squarespace, Inc.
            </div>

            <div className='text-[12px] text-[#888]'>
              © The Ghost Company, LLC &nbsp;|&nbsp;{' '}
              <a href='/terms-of-service'>Terms of Service</a> &nbsp;|&nbsp;{' '}
              <a href='/privacy-policy'>Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-1 items-start justify-start gap-10 lg:justify-end">
          <div className="flex items-center gap-3">
            <div className="h-[54px] w-[54px] rounded-full border border-[var(--gp-border-soft)] p-[10px]">
              <Image
                src={communityLeaderImg}
                alt=""
                width={54}
                height={54}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-[11px] leading-[14px] text-[var(--gp-text)]">
              <div className="font-semibold">Community</div>
              <div className="font-semibold">Leader</div>
              <div className="text-[#777]">SQUARECERTIFY</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-[54px] w-[54px] rounded-full border border-[var(--gp-border-soft)] p-[10px]">
              <Image
                src={circlePlatinumImg}
                alt=""
                width={54}
                height={54}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-[11px] leading-[14px] text-[var(--gp-text)]">
              <div className="font-semibold">Circle Platinum</div>
              <div className="font-semibold">Partner</div>
              <div className="text-[#777]">SQUARESPACE</div>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  )
}
