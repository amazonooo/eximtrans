import Head from 'next/head'
import AboutHero from './components/AboutHero'
import AboutTop from './components/AboutTop'
import Advantages from './components/Advantages'
import { InfiniteMovingCardsDemo } from './components/Clients'
import Logistic from './components/Logistic'
import Mission from './components/Mission'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'О нас',
	description: 'Узнайте больше о нашей компании, миссии и преимуществах, которые мы предлагаем.',
}

export default function AboutPage() {
  return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div className='flex flex-col items-center justify-center'>
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