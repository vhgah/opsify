import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy for the Opsify Squarespace Toolkit.',
  alternates: { canonical: '/refunds' },
}

const LAST_UPDATED = 'September 8, 2026'

export default function RefundsPage() {
  return (
    <div className='mx-auto w-full max-w-3xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight text-zinc-900'>Refund Policy</h1>
        <p className='mt-1 text-sm text-zinc-400'>Last updated: {LAST_UPDATED}</p>
      </header>

      <article className='prose prose-zinc max-w-none'>
        <p>
          Our Squarespace plugins and templates are digital products delivered instantly upon
          purchase. Because of this, we generally do not offer refunds once a plugin or template
          has been delivered or a Pro Access subscription has started.
        </p>

        <h2>When We Do Offer a Refund</h2>
        <p>We will provide a fix or a refund if:</p>
        <ul>
          <li>
            A plugin or template does not work as described due to a defect on our end, and we are
            unable to fix it within a reasonable time after you report it.
          </li>
          <li>You were charged in error (for example, a duplicate charge).</li>
        </ul>
        <p>
          To request a refund under these circumstances, contact us within 14 days of your
          purchase via our{' '}
          <a href='/support' className='underline'>
            support page
          </a>{' '}
          with your order details and a description of the issue.
        </p>

        <h2>What Isn&apos;t Covered</h2>
        <p>
          We can&apos;t offer refunds for issues caused by incompatibility with a custom theme
          modification, a change Squarespace makes to its platform after purchase, or general
          &quot;change of mind&quot; after a plugin or template has been installed and used.
        </p>

        <h2>Subscriptions (Pro Access)</h2>
        <p>
          You can cancel a Pro Access subscription at any time; cancellation stops future billing
          but does not retroactively refund the current billing period unless required by law.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Refund Policy from time to time. Changes will be posted on this page
          with an updated &quot;Last updated&quot; date.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about a refund? Reach us via our{' '}
          <a href='/support' className='underline'>
            support page
          </a>
          .
        </p>
      </article>
    </div>
  )
}
