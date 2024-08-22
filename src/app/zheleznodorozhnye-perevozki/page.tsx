import RentalLink from '../arenda-vagonov/components/RentalLink'
import Gruz from './components/Gruz'
import PerevozAdvantages from './components/PerevozAdvantages'
import PerevozHero from './components/PerevozHero'
import PerevozTop from './components/PerevozTop'

export default function ZhelPerevozPage() {
	return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div className='flex flex-col items-center justify-center'>
				<PerevozHero />
        <PerevozTop />
        <PerevozAdvantages />
        <Gruz />
				<RentalLink />
			</div>
		</main>
	)
}
