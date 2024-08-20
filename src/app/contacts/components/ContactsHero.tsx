'use client'

import { FC } from 'react'

import { motion } from 'framer-motion'
import { fadeIn, slideInFromLeft } from '@/utils/motion'
import Heading from '@/components/ui/heading/Heading'

const ContactsHero: FC = () => {
	return (
		<motion.section
			initial='hidden'
			animate='visible'
			className='flex flex-col items-center justify-center mt-16 lg:mt-44 w-full'
		>
			<motion.h1
				variants={fadeIn('right', 'tween', 0.3, .8)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
			>
				<Heading text='Контакты' />
			</motion.h1>
		</motion.section>
	)
}

export default ContactsHero
