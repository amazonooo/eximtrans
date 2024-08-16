import ServicesCards from './components/ServicesCards'
import ServicesDesc from './components/ServicesDesc'
import ServicesHero from './components/ServicesHero'

export default function SercicesPage() {
  return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div className='flex flex-col items-center justify-center'>
        <ServicesHero />
				<ServicesCards />
				<ServicesDesc />
			</div>
		</main>
	) 
}