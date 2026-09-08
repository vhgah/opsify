import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Opsify, operated by The Ghost Company, LLC.',
  alternates: { canonical: '/terms-of-service' },
}

const LAST_UPDATED = 'September 8, 2026'

export default function TermsOfServicePage() {
  return (
    <div className='mx-auto w-full max-w-3xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight text-zinc-900'>Terms of Service</h1>
        <p className='mt-1 text-sm text-zinc-400'>Last updated: {LAST_UPDATED}</p>
      </header>

      <article className='prose prose-zinc max-w-none'>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of Opsify (opsify.art), operated
          by The Ghost Company, LLC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), including our
          guides and blog content and our Squarespace plugin, template, and toolbox products
          (together, the &quot;Services&quot;). By using the Services, you agree to these Terms.
        </p>

        <h2>The Services</h2>
        <p>
          Opsify publishes step-by-step guides for sellers setting up stores on Shopify,
          WooCommerce, and Squarespace, and sells a library of Squarespace plugins and templates
          (the &quot;Squarespace Toolkit&quot;). The Squarespace Toolkit is provided for use on
          your own Squarespace site(s) and is not affiliated with, sponsored by, or endorsed by
          Squarespace, Inc. &quot;Squarespace&quot; is a registered trademark of Squarespace, Inc.
        </p>

        <h2>Use of Plugins and Templates</h2>
        <p>
          When you purchase or access a plugin or template, we grant you a limited,
          non-exclusive, non-transferable license to use it as described on our{' '}
          <a href='/license' className='underline'>
            License
          </a>{' '}
          page. You may not resell, redistribute, or sublicense our plugins or templates as
          standalone products.
        </p>

        <h2>Guides and Content</h2>
        <p>
          Blog content is provided for general informational purposes to help new sellers set up
          their stores. We do our best to keep guides accurate and current, but platforms like
          Shopify, WooCommerce, and Squarespace change frequently, and we cannot guarantee that
          every guide reflects the latest interface or feature set at the time you read it.
        </p>

        <h2>Affiliate Links</h2>
        <p>
          Some links on this site are affiliate links. We may earn a commission if you make a
          purchase through these links, at no additional cost to you. We only recommend tools or
          services we have used or believe are useful to new sellers.
        </p>

        <h2>No Warranty</h2>
        <p>
          The Services are provided &quot;as is&quot; and &quot;as available&quot; without
          warranties of any kind, express or implied, including compatibility with any specific
          Squarespace, Shopify, or WooCommerce plan, theme, or configuration. We do not guarantee
          that our plugins or templates will be error-free or uninterrupted.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, The Ghost Company, LLC will not be liable for
          any indirect, incidental, or consequential damages arising from your use of the
          Services, including lost sales or store downtime.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the Services after a
          change is posted constitutes acceptance of the revised Terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about these Terms? Reach us via our{' '}
          <a href='/support' className='underline'>
            support page
          </a>
          .
        </p>
      </article>
    </div>
  )
}
