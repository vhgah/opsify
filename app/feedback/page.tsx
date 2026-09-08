import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Feedback',
  description: 'Share feedback or a feature request with the Opsify team.',
  alternates: { canonical: '/feedback' },
}

export default function FeedbackPage() {
  return (
    <div className='mx-auto w-full max-w-3xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight text-zinc-900'>Feedback</h1>
        <p className='mt-3 text-base text-zinc-500'>
          Have an idea for a new guide, plugin, or template — or found something we got wrong?
          We&apos;d love to hear it.
        </p>
      </header>

      <article className='prose prose-zinc max-w-none'>
        <p>
          Send your feedback to{' '}
          <a href='mailto:support@opsify.art?subject=Opsify%20Feedback' className='underline'>
            support@opsify.art
          </a>
          . Tell us what platform you&apos;re selling on (Shopify, WooCommerce, or Squarespace)
          and what you&apos;d like to see — a new guide topic, a plugin idea, or a fix to an
          existing one.
        </p>
        <p>
          Looking for help with a specific issue instead? Head to our{' '}
          <Link href='/support' className='underline'>
            Support
          </Link>{' '}
          page.
        </p>
      </article>
    </div>
  )
}
