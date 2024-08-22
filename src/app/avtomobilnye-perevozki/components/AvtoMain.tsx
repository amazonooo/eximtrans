'use client'

import { FC } from 'react'
import { avtoData } from './avtoData'
import AvtoCard from './AvtoCard'
import { icons } from 'lucide-react'
import Heading from '@/components/ui/heading/Heading'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import SectionTitle from '@/components/ui/section-title/SectionTitle'

const AvtoMain: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<SectionTitle text='Преимущества' />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				{avtoData.map(card => (
					<AvtoCard
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

export default AvtoMain