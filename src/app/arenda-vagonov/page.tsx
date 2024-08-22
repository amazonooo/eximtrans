import RentalContact from './components/RentalContact'
import RentalHero from './components/RentalHero'
import RentalLink from './components/RentalLink'
import RentalMain from './components/RentalMain'

export default function ArendaPage() {
	return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div className='flex flex-col items-center justify-center'>
        <RentalHero />
        <RentalMain />
				<RentalContact />
				<RentalLink />
			</div>
		</main>
	)
}
