import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Opsify, operated by The Ghost Company, LLC.',
  alternates: { canonical: '/privacy-policy' },
}

const LAST_UPDATED = 'September 8, 2026'

export default function PrivacyPolicyPage() {
  return (
    <div className='mx-auto w-full max-w-3xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight text-zinc-900'>Privacy Policy</h1>
        <p className='mt-1 text-sm text-zinc-400'>Last updated: {LAST_UPDATED}</p>
      </header>

      <article className='prose prose-zinc max-w-none'>
        <p>
          This Privacy Policy explains how The Ghost Company, LLC (&quot;we&quot;, &quot;us&quot;,
          &quot;our&quot;) handles information collected through Opsify (opsify.art).
        </p>

        <h2>Information We Collect</h2>
        <p>We collect limited information to operate the site:</p>
        <ul>
          <li>
            <strong>Information you provide</strong> — such as your email address, if you contact
            us through our{' '}
            <a href='/support' className='underline'>
              support
            </a>{' '}
            or{' '}
            <a href='/feedback' className='underline'>
              feedback
            </a>{' '}
            pages, or if you purchase a plugin or template.
          </li>
          <li>
            <strong>Standard server logs</strong> — such as IP address, browser type, and pages
            visited, collected automatically by our hosting infrastructure.
          </li>
          <li>
            <strong>Essential cookies</strong> — used to remember basic preferences (for example,
            cookie consent choices). We do not currently run third-party analytics or advertising
            trackers on this site; if that changes, we will update this policy and our cookie
            notice accordingly.
          </li>
        </ul>

        <h2>How We Use Information</h2>
        <p>We use the information above to:</p>
        <ul>
          <li>Operate, maintain, and secure the site.</li>
          <li>Respond to support and feedback requests.</li>
          <li>Fulfill purchases of plugins and templates.</li>
          <li>Understand aggregate site usage so we can improve our guides and products.</li>
        </ul>

        <h2>Affiliate Links</h2>
        <p>
          Some pages contain affiliate links to third-party tools and services. If you click one
          and make a purchase, the third party may collect information under its own privacy
          policy; we do not control or receive personal data from those transactions beyond
          standard affiliate reporting.
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share information with service
          providers (such as hosting and payment processors) solely to operate the site, or if
          required to do so by law.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain information only as long as needed for the purposes described above, or as
          required by law.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, or request deletion
          of your personal information. Contact us via our{' '}
          <a href='/support' className='underline'>
            support page
          </a>{' '}
          to make a request.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Opsify is intended for store owners and is not directed at children. We do not knowingly
          collect personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated &quot;Last updated&quot; date.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about this Privacy Policy? Reach us via our{' '}
          <a href='/support' className='underline'>
            support page
          </a>
          .
        </p>
      </article>
    </div>
  )
}
