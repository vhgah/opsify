import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'License',
  description: 'License terms for Opsify Squarespace plugins and templates.',
  alternates: { canonical: '/license' },
}

const LAST_UPDATED = 'September 8, 2026'

export default function LicensePage() {
  return (
    <div className='mx-auto w-full max-w-3xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight text-zinc-900'>License</h1>
        <p className='mt-1 text-sm text-zinc-400'>Last updated: {LAST_UPDATED}</p>
      </header>

      <article className='prose prose-zinc max-w-none'>
        <p>
          This License applies to plugins and templates purchased or downloaded from the Opsify
          Squarespace Toolkit (&quot;the products&quot;), operated by The Ghost Company, LLC.
        </p>

        <h2>What You Can Do</h2>
        <ul>
          <li>Install and use a purchased plugin or template on your own Squarespace site(s).</li>
          <li>
            With an active Pro Access subscription, install and use any plugin or template in the
            library on your own Squarespace site(s) for as long as your subscription is active.
          </li>
          <li>Modify the code you receive to fit your own site&apos;s design.</li>
        </ul>

        <h2>What You Can&apos;t Do</h2>
        <ul>
          <li>Resell, redistribute, or sublicense a plugin or template as a standalone product.</li>
          <li>
            Include a plugin or template, in whole or in part, in a competing product or
            toolkit.
          </li>
          <li>
            Continue using plugins or templates obtained under Pro Access after your subscription
            ends, on new installs.
          </li>
        </ul>

        <h2>Ownership</h2>
        <p>
          We retain all intellectual property rights in our plugins and templates. Purchasing a
          product grants you a license to use it as described above — it does not transfer
          ownership of the underlying code or design.
        </p>

        <h2>Third-Party Platform Disclaimer</h2>
        <p>
          Opsify and the Squarespace Toolkit are not affiliated with, sponsored by, or endorsed by
          Squarespace, Inc. &quot;Squarespace&quot; is a registered trademark of Squarespace, Inc.
        </p>

        <h2>No Warranty</h2>
        <p>
          Products are provided &quot;as is&quot; without warranty of compatibility with every
          Squarespace plan, theme, or configuration. See our{' '}
          <a href='/terms-of-service' className='underline'>
            Terms of Service
          </a>{' '}
          for more detail.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about this License? Reach us via our{' '}
          <a href='/support' className='underline'>
            support page
          </a>
          .
        </p>
      </article>
    </div>
  )
}
