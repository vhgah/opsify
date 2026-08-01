import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Groups — Privacy Policy',
  description: 'Privacy Policy for the Product Groups Shopify app.',
}

const LAST_UPDATED = 'August 1, 2026'

export default function ProductGroupsPrivacyPage() {
  return (
    <div className='mx-auto w-full max-w-3xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight text-zinc-900'>Privacy Policy</h1>
        <p className='mt-3 text-base text-zinc-500'>
          Product Groups — a Shopify app built and operated by The Ghost Company, LLC (&quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;).
        </p>
        <p className='mt-1 text-sm text-zinc-400'>Last updated: {LAST_UPDATED}</p>
      </header>

      <article className='prose prose-zinc max-w-none'>
        <p>
          This Privacy Policy explains how we collect, use, and protect information when a merchant
          installs and uses the Product Groups app (the &quot;App&quot;) on their Shopify store. By
          installing or using the App, you agree to the collection and use of information as
          described in this policy.
        </p>

        <h2>Information We Collect</h2>
        <p>When you install the App, we access certain data from your Shopify store, including:</p>
        <ul>
          <li><strong>Store information</strong> — store name, domain, contact email, and plan details provided by Shopify.</li>
          <li><strong>Product data</strong> — products, variants, collections, tags, and inventory information needed to create and manage product groups.</li>
          <li><strong>Order data</strong> — order line items and quantities, where required to support product grouping or bundling features.</li>
          <li><strong>App configuration data</strong> — settings, groupings, and preferences you create within the App.</li>
        </ul>
        <p>
          We do not access customer payment details, and we do not request access to data that is not
          necessary for the App&apos;s functionality.
        </p>

        <h2>How We Use Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain the App&apos;s core features.</li>
          <li>Sync and display product, variant, and group data within your Shopify admin.</li>
          <li>Respond to support requests and communicate important updates about the App.</li>
          <li>Monitor, troubleshoot, and improve the App&apos;s performance and reliability.</li>
          <li>Comply with Shopify&apos;s API terms and applicable law.</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell merchant or customer data. We may share information with third-party service
          providers (such as hosting and infrastructure providers) solely to operate the App, and only
          to the extent necessary for them to perform services on our behalf. These providers are
          bound by confidentiality obligations and are not permitted to use your data for any other
          purpose.
        </p>
        <p>We may also disclose information if required to do so by law or in response to valid requests by public authorities.</p>

        <h2>Data Retention</h2>
        <p>
          We retain store and app configuration data for as long as the App remains installed on your
          store. If you uninstall the App, we delete or anonymize the associated data within a
          reasonable period, except where retention is required to comply with legal obligations,
          resolve disputes, or enforce our agreements.
        </p>

        <h2>Data Security</h2>
        <p>
          We use industry-standard technical and organizational measures to protect the data we
          process, including encryption in transit and restricted access to production systems.
          However, no method of transmission or storage is completely secure, and we cannot guarantee
          absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, or request deletion of
          your data. Merchants can request data deletion at any time by uninstalling the App or by
          contacting us directly using the details below. We comply with Shopify&apos;s mandatory
          GDPR webhooks (customer data request, customer redact, and shop redact) for merchants and
          their customers in applicable jurisdictions.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          The App is intended for use by Shopify merchants and is not directed at children. We do not
          knowingly collect personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page
          with an updated &quot;Last updated&quot; date. Continued use of the App after changes are
          posted constitutes acceptance of the revised policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how your data is handled, please contact
          us through our{' '}
          <a href='/support' className='underline'>
            support page
          </a>
          .
        </p>
      </article>
    </div>
  )
}
