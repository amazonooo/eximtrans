import GlobeComponent from '@/components/layout/Geography'
import ContactsHero from './components/ContactsHero'
import ContactsMain from './components/ContactsMain'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Контакты',
	description: 'Наши офисы, контакты под услуги.',
}

export default function ContactsPage() {
  return (
		<main className='h-full w-full flex flex-col overflow-clip px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<div className='flex flex-col items-center justify-center'>
				<ContactsHero />
				<GlobeComponent />
				<ContactsMain />
			</div>
		</main>
	)
}