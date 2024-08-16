import { FC } from 'react'
import { advantagesData } from './advantagesData'
import AdvantagesCard from './AdvantagesCard'
import { icons } from 'lucide-react'
import Heading from '@/components/ui/heading/Heading'

const Advantages: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<Heading text='Ценности и принципы работы' />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-12 md:pt-16'>
				{advantagesData.map(card => (
					<AdvantagesCard
						key={card.id}
						id={card.id}
						icon={card.IconComponent}
						text={card.text}
					/>
				))}
			</div>
		</section>
	)
}

export default Advantages