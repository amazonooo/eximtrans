import Head from 'next/head'
import RentalContact from './components/RentalContact'
import RentalHero from './components/RentalHero'
import RentalLink from './components/RentalLink'
import RentalMain from './components/RentalMain'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Аренда вагонов',
	description: 'Услуга аренды вагонов.',
}

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