import { Metadata } from 'next'
import RentalLink from '../arenda-vagonov/components/RentalLink'
import ProdazhaContact from '../prodazha-metal/components/ProdazhaContact'
import Gruz from './components/Gruz'
import PerevozAdvantages from './components/PerevozAdvantages'
import PerevozHero from './components/PerevozHero'
import PerevozTop from './components/PerevozTop'

export const metadata: Metadata = {
	title: 'Железнодорожные перевозки',
	description: 'Услуга железнодорожных перевозок.',
}


export default function ZhelPerevozPage() {
	return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div className='flex flex-col items-center justify-center'>
				<PerevozHero />
        <PerevozTop />
        <PerevozAdvantages />
        <Gruz />
				<ProdazhaContact />
				<RentalLink />
			</div>
		</main>
	)
}
