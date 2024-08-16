import React from 'react'

interface ContentAreaProps {
	content: string
}

const ContentArea: React.FC<ContentAreaProps> = ({ content }) => {
	return (
		<div className='w-2/3 p-8'>
			<h2 className='text-xl font-bold mb-4'>Контент:</h2>
			<p>{content}</p>
		</div>
	)
}

export default ContentArea
