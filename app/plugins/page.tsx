import type { Metadata } from 'next'

import { PluginsPage } from "@/components/ghostplugins/PluginsPage";

export const metadata: Metadata = {
  title: 'Squarespace Plugins',
  description:
    'Browse the Opsify Squarespace plugin library — drop-in plugins to extend your Squarespace store without custom code.',
  alternates: { canonical: '/plugins' },
}

export default function Plugins() {
  return <PluginsPage />;
}
