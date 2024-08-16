'use client'

import Services from '@/components/layout/Services'
import CompDesc from '@/components/layout/CompDesc'
import Hero from '@/components/ui/hero/Hero'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default

      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <main className='w-full h-full flex flex-col overflow-clip px-5 sm:px-10'>
      <Hero />
      <Services />
      <CompDesc />
    </main>
  );
}