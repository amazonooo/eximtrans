import AboutHero from './components/AboutHero'
import AboutTop from './components/AboutTop'
import Advantages from './components/Advantages'
import { InfiniteMovingCardsDemo } from './components/Clients'
import Logistic from './components/Logistic'
import Mission from './components/Mission'

export default function AboutPage() {
  return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div
				className='flex flex-col items-center justify-center'
			>
        <AboutHero />
        <AboutTop />
				<Mission />
				<Advantages />
				<Logistic />
				<InfiniteMovingCardsDemo />
			</div>
		</main>
	)
}