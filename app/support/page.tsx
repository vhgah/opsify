import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Opsify guides, plugins, and templates.',
  alternates: { canonical: '/support' },
}

export default function SupportPage() {
  return (
    <div className='mx-auto w-full max-w-3xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight text-zinc-900'>Support</h1>
        <p className='mt-3 text-base text-zinc-500'>
          Need help with a guide, a plugin, or a template? We&apos;re happy to help.
        </p>
      </header>

      <article className='prose prose-zinc max-w-none'>
        <h2>Email Us</h2>
        <p>
          The fastest way to reach us is by email at{' '}
          <a href='mailto:support@opsify.art' className='underline'>
            support@opsify.art
          </a>
          . We aim to respond within 1–2 business days. Please include your order number if your
          question is about a plugin or template purchase.
        </p>

        <h2>Before You Reach Out</h2>
        <p>
          Many setup questions are already answered in our{' '}
          <Link href='/blog' className='underline'>
            guides
          </Link>
          . If you&apos;re looking for a specific plugin or template, browse the{' '}
          <Link href='/plugins' className='underline'>
            Plugins
          </Link>
          ,{' '}
          <Link href='/templates' className='underline'>
            Templates
          </Link>
          , or{' '}
          <Link href='/toolbox' className='underline'>
            Toolbox
          </Link>{' '}
          pages.
        </p>

        <h2>Other Questions</h2>
        <p>
          Have general feedback instead of a support issue? Visit our{' '}
          <Link href='/feedback' className='underline'>
            Feedback
          </Link>{' '}
          page. For billing and refunds, see our{' '}
          <Link href='/refunds' className='underline'>
            Refund Policy
          </Link>
          .
        </p>
      </article>
    </div>
  )
}
