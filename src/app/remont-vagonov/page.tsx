import RentalLink from '../arenda-vagonov/components/RentalLink'
import Checking from './components/Checking'
import Complex from './components/Complex'
import Offer from './components/Offer'
import RemontContact from './components/RemontContact'
import RemontHero from './components/RemontHero'

export default function RemontPage() {
	return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div className='flex flex-col items-center justify-center'>
        <RemontHero />
				<Offer />
				<Complex />
				<Checking />
				<RemontContact />
				<RentalLink />
			</div>
		</main>
	)
}
