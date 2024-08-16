'use client'

import { useState } from 'react'
import Heading from '../ui/heading/Heading'

const cities = [
	{
		name: 'Москва',
		phone: '8 800 775-16-16',
		address: 'Москва, ул. Новоярзанская, д. 24',
		position: { top: '50%', left: '55%' },
	},
	{
		name: 'Санкт-Петербург',
		phone: '8 800 123-45-67',
		address: 'Санкт-Петербург, ул. Ленина, д. 10',
		position: { top: '40%', left: '60%' },
	},
	{
		name: 'Воронеж',
		phone: '8 800 123-45-67',
		address: 'Санкт-Петербург, ул. Ленина, д. 10',
		position: { top: '70%', left: '30%' },
	},
	{
		name: 'Новосибирск',
		phone: '8 800 123-45-67',
		address: 'Санкт-Петербург, ул. Ленина, д. 10',
		position: { top: '20%', left: '80%' },
	},
]

export default function GlobeComponent() {
	const [selectedCity, setSelectedCity] = useState(cities[0])

	return (
		<section className='relative flex items-center flex-col justify-center mb-36'>
			<Heading text='Наши офисы' />
			<div className='flex mb-4 space-y-2 pt-12 md:pt-16'>
				{cities.map((city, index) => (
					<button
						key={index}
						onClick={() => setSelectedCity(city)}
						className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 
              ${
								selectedCity.name === city.name
									? 'bg-[#930d4bd5] text-white'
									: 'bg-gray-200 text-gray-800'
							}`}
					>
						{city.name}
					</button>
				))}
			</div>

			<div className='relative w-96 h-96'>
				<img
					src='/path-to-your-planet-image.png'
					alt='Planet'
					className='w-full h-full'
				/>

				{/* Rotating Circle */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<div className='w-[130%] h-[130%] border-t-4 border-gray-300 rounded-full animate-spin'></div>
				</div>

				{/* City Points */}
				{cities.map((city, index) => (
					<div
						key={index}
						className={`absolute w-2 h-2 rounded-full transition-colors duration-300
              ${
								selectedCity.name === city.name
									? 'bg-[#930d4bd5]'
									: 'bg-gray-400'
							}`}
						style={{ top: city.position.top, left: city.position.left }}
					/>
				))}
			</div>

			{/* City Information */}
			<div className='mt-4 text-center'>
				<h2 className='text-xl font-semibold'>{selectedCity.name}</h2>
				<p className='text-lg'>{selectedCity.phone}</p>
				<p className='text-sm'>{selectedCity.address}</p>
			</div>
		</section>
	)
}
