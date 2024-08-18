'use client'

import { LucideIcon } from 'lucide-react'
import { FC } from 'react'
import { advantagesData } from './advantagesData'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

interface IAdvantagesCard {
	id: string
	text: string
	icon: LucideIcon
}

const AdvantagesCard: FC<IAdvantagesCard> = ({ id, icon: Icon, text }) => {
  return (
		<motion.article
			variants={fadeIn('right', 'tween', 0.3, 1.2)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.3 }}
			className='bg-white h-[250px] w-[286px] sm:h-[300px] sm:w-[380px] md:h-[220px] md:w-[320px] lg:h-[280px] lg:w-[380px] xl:h-[320px] xl:w-[400px] group shadow rounded-lg'
		>
			<div className='h-full flex justify-between flex-col pt-8 sm:pt-14 md:pt-6 lg:pt-12 xl:pt-16 pb-6 md:pb-4 xl:pb-7 px-5'>
				<div className='flex items-center justify-center'>
					<Icon className='w-14 h-14 sm:w-20 sm:h-20 md:w-12 md:h-12 lg:w-20 lg:h-20 text-primary-red' />
				</div>
				<div>
					<p className='text-lg lg:text-xl xl:text-2xl'>{text}</p>
				</div>
			</div>
		</motion.article>
	)
}

export default AdvantagesCard