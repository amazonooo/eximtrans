'use client'

import { FC } from 'react'

import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import Heading from '@/components/ui/heading/Heading'

const ServicesHero: FC = () => {
	return (
		<motion.section
			initial='hidden'
			animate='visible'
			className='flex flex-col items-center justify-center mt-16 lg:mt-36 w-full mb-14 md:mb-20'
		>
			<motion.div
				style={{
					backgroundImage: 'url(/services-hero.jpg)',
				}}
				className='bg-no-repeat bg-cover bg-center w-full h-[600px]'
				variants={slideInFromLeft(0.6)}
			></motion.div>
			<motion.h1 className='mt-14' variants={slideInFromLeft(0.6)}>
				<Heading text='Услуги' />
			</motion.h1>
		</motion.section>
	)
}

export default ServicesHero