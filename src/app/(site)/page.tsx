import Services from '@/components/layout/Services'
import CompDesc from '@/components/layout/CompDesc'
import Hero from '@/components/ui/hero/Hero'
import GlobeComponent from '@/components/layout/Geography'

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col overflow-y-clip overflow-x-hidden px-5 sm:px-10'>
      <Hero />
      <Services />
      <CompDesc />
      <GlobeComponent />
    </main>
  );
}