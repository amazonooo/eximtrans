import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

interface ContentAreaProps {
	content: React.ReactNode
}

const ContentArea: React.FC<ContentAreaProps> = ({ content }: any) => {
	return (
		<div
			className='p-8 flex flex-col items-center w-full'
		>
			<h2 className='text-xl md:text-3xl font-bold mb-4 text-center'>Контакты</h2>
			<p>{content}</p>
		</div>
	)
}

export default ContentArea
