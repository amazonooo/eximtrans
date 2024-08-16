import AboutHero from './components/AboutHero'
import AboutTop from './components/AboutTop'
import Mission from './components/Mission'

export default function Aboutpage() {
  return (
		<main className='h-full w-full flex flex-col overflow-clip'>
			<div
				className='flex flex-col items-center justify-center'
			>
        <AboutHero />
        <AboutTop />
				<Mission />
			</div>
		</main>
	)
}