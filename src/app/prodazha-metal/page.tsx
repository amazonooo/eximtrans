import RentalLink from '../arenda-vagonov/components/RentalLink'
import ProdazhaContact from './components/ProdazhaContact'
import ProdazhaHero from './components/ProdazhaHero'
import ProdazhaMain from './components/ProdazhaMain'

export default function CareerPage() {
	return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div className='flex flex-col items-center justify-center'>
				<ProdazhaHero />
				<ProdazhaMain />
				<ProdazhaContact />
				<RentalLink />
			</div>
		</main>
	)
}