'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideInFromLeft } from '@/utils/motion'
import Heading from '@/components/ui/heading/Heading'

const ProdazhaHero: FC = () => {
	return (
		<motion.section
			initial='hidden'
			animate='visible'
			className='flex flex-col items-center justify-center mt-16 lg:mt-36 w-full mb-16 md:mb-24'
		>
			<motion.div
				style={{
					backgroundImage: 'url(/hero-8.jpg)',
				}}
				className='bg-no-repeat bg-cover bg-center w-full h-[600px]'
				variants={slideInFromLeft(0.6)}
			></motion.div>
			<motion.h1
				variants={fadeIn('right', 'tween', 0.3, 0.8)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				className='mt-14'
			>
				<Heading text='Запчасти и металлолом' />
			</motion.h1>
		</motion.section>
	)
}

export default ProdazhaHero