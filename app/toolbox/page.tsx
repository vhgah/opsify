import type { Metadata } from 'next'

import { ToolboxPage } from '@/components/ghostplugins/ToolboxPage'

export const metadata: Metadata = {
  title: 'Squarespace Toolbox',
  description:
    'The Opsify Squarespace toolbox — free tools to help you test, troubleshoot, and optimize your Squarespace store.',
  alternates: { canonical: '/toolbox' },
}

export default function Toolbox() {
  return <ToolboxPage />
}
