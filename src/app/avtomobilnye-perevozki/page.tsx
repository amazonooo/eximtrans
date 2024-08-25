import RentalLink from '../arenda-vagonov/components/RentalLink'
import AvtoContact from './components/AvtoContact'
import AutoHero from './components/AvtoHero'
import AvtoMain from './components/AvtoMain'
import AvtoTop from './components/AvtoTop'

export default function AvtoPerevozPage() {
	return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div className='flex flex-col items-center justify-center'>
				<AutoHero />
				<AvtoTop />
				<AvtoMain />
				<AvtoContact />
				<RentalLink />
			</div>
		</main>
	)
}
