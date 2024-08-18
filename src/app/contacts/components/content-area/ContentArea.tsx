'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

interface ContentAreaProps {
	content: React.ReactNode
}

const ContentArea: React.FC<ContentAreaProps> = ({ content }: any) => {
	return (
		<motion.div
			variants={fadeIn('left', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.3 }}
			className='w-2/3 p-8'
		>
			<h2 className='text-xl font-bold mb-4'>Контент:</h2>
			<p>{content}</p>
		</motion.div>
	)
}

export default ContentArea
