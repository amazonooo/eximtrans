'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { complexData } from './complexData'
import SectionTitle from '@/components/ui/section-title/SectionTitle'

const Complex: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[282.5px]'>
			<SectionTitle
				text='Комплекс услуг по ремонту и обслуживанию вагонов, предоставляемых по
				всей территории РФ и странах СНГ'
			/>
			<div className=''>
				<ul className='flex flex-col gap-y-7'>
					{complexData.map(card => (
						<motion.li
							variants={fadeIn('right', 'tween', 0.3, 1)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true, amount: 0.2 }}
							className='flex gap-x-4 text-lg md:text-xl'
							key={card.id}
						>
							<span className='text-primary-red font-semibold'>
								{card.prefix}
							</span>
							{card.text}
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Complex