'use client'

import { FC, useEffect, useLayoutEffect } from 'react'
import { servicesData } from '../ui/services/servicesData'
import ServicesCard from '../ui/services/ServicesCard'
import Heading from '../ui/heading/Heading'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn, zoomIn } from '@/utils/motion'

const Services: FC = () => {
  return (
		<motion.section
			variants={fadeIn('right', 'tween', 0.3, 1.2)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			className='flex flex-col items-center justify-center mb-24 md:mb-36'
		>
			<Heading text='Наши услуги' className='anim' />
			<div className='anim pt-12 md:pt-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4'>
					{servicesData.map(card => (
						<ServicesCard
							key={card.id}
							id={card.href}
							title={card.title}
							image={card.image}
							href={card.href}
							anim={card.anim}
						/>
					))}
					<div className='mt-10 flex items-center justify-center font-medium'>
						<Link
							href={'/services'}
							className='bg-white cursor-pointer text-center px-8 py-5 rounded-xl hover:bg-fuchsia-950 hover:text-white transition-colors duration-500 border border-fuchsia-950 hover:border-transparent'
						>
							Все услуги
						</Link>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Services