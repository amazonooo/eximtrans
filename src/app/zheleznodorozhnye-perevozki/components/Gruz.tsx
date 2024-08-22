import { FC } from 'react'
import SectionTitle from '@/components/ui/section-title/SectionTitle'
import GruzCard from './GruzCard'
import { gruzData } from './gruzData'

const Gruz: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[282.5px]'>
			<SectionTitle text='Виды перевозимых грузов' />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5'>
				{gruzData.map(card => (
					<GruzCard
						key={card.id}
						id={card.image}
						title={card.title}
						image={card.image}
					/>
				))}
			</div>
			<div className='mt-16 md:mt-20'>
				<SectionTitle
					className='text-left md:text-center'
					text='Наша компания предлагает широкий спектр услуг по железнодорожным перевозкам. Мы гарантируем надежную и своевременную доставку грузов'
				/>
			</div>
		</section>
	)
}

export default Gruz