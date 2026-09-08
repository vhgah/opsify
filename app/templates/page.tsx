import type { Metadata } from 'next'

import { TemplatesPage } from '@/components/ghostplugins/TemplatesPage'

export const metadata: Metadata = {
  title: 'Squarespace Templates',
  description:
    'Browse the Opsify Squarespace template library — ready-made designs to launch your Squarespace store faster.',
  alternates: { canonical: '/templates' },
}

export default function Templates() {
  return <TemplatesPage />
}
