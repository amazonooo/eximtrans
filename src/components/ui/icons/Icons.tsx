import { advantagesData } from '@/app/about/components/advantagesData'
import React from 'react'

const IconsList: React.FC = () => {
	return (
		<div className='flex space-x-4'>
			{advantagesData.map(card => {
				const Icon = card.IconComponent
				return (
					<div key={card.id} className='flex flex-col items-center'>
						{/* Передаем className для изменения размера */}
						<Icon className='w-8 h-8 text-gray-800 sm:w-10 sm:h-10 lg:w-12 lg:h-12' />
						<span className='mt-2 text-sm'>{card.text}</span>
					</div>
				)
			})}
		</div>
	)
}

export default IconsList
