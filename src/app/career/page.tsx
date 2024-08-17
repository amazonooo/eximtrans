import CareerAnket from './components/CareerAnket'
import CareerHero from './components/CareerHero'
import CareerText from './components/CareerText'

export default function CareerPage() {
  return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div className='flex flex-col items-center justify-center'>
				<CareerHero />
				<CareerText />
				<CareerAnket />
			</div>
		</main>
	)
}