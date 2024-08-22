'use client'

import { cn } from '@/utils/cn'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

interface IHeading {
	text: string
	className?: string
}

const SectionTitle: FC<IHeading> = ({ text, className }) => {
	return (
		<motion.h1
			variants={fadeIn('right', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			className={cn('text-xl md:text-3xl text-center mb-10', className)}
		>
			{text}
		</motion.h1>
	)
}

export default SectionTitle
