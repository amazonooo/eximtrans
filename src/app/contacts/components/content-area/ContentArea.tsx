import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

interface ContentAreaProps {
	content: React.ReactNode
}

const ContentArea: React.FC<ContentAreaProps> = ({ content }: any) => {
	return (
		<div
			className='w-2/3 p-8'
		>
			<h2 className='text-xl font-bold mb-4'>Контент:</h2>
			<p>{content}</p>
		</div>
	)
}

export default ContentArea
