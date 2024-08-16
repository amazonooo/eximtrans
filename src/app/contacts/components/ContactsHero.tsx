'use client'

import { FC } from 'react'

import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import Heading from '@/components/ui/heading/Heading'

const ContactsHero: FC = () => {
	return (
		<motion.section
			initial='hidden'
			animate='visible'
			className='flex flex-col items-center justify-center mt-16 lg:mt-36 w-full mb-14 md:mb-20'
		>
			<motion.h1 variants={slideInFromLeft(0.6)}>
				<Heading text='Контакты' />
			</motion.h1>
		</motion.section>
	)
}

export default ContactsHero
