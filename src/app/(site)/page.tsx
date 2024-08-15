'use client'

import Hero from '@/components/ui/hero/Hero'
import { useEffect } from 'react'

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col overflow-clip px-5 sm:px-10">
      <Hero />
    </main>
  );
}