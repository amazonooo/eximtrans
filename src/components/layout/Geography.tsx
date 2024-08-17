'use client'

import { useState } from 'react'
import Heading from '../ui/heading/Heading'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const cities = [
	{
		name: 'Москва',
		phone: '8 800 775-16-16',
		address: 'Москва, ул. Новоярзанская, д. 24',
		position: { top: '30%', left: '27%' },
	},
	{
		name: 'Санкт-Петербург',
		phone: '8 800 123-45-67',
		address: 'Санкт-Петербург, ул. Ленина, д. 10',
		position: { top: '24%', left: '29%' },
	},
	{
		name: 'Воронеж',
		phone: '8 800 123-45-67',
		address: 'Санкт-Петербург, ул. Ленина, д. 10',
		position: { top: '32.5%', left: '23%' },
	},
	{
		name: 'Новосибирск',
		phone: '8 800 123-45-67',
		address: 'Санкт-Петербург, ул. Ленина, д. 10',
		position: { top: '36%', left: '47%' },
	},
]

export default function GlobeComponent() {
	const pathname = usePathname()

	const [selectedCity, setSelectedCity] = useState(cities[0])

	return (
		<section className='flex items-center flex-col justify-center w-full mb-12 md:mb-24'>
			<Heading text='Наши офисы' className='text-center' />
			<div className='flex flex-col lg:flex-row items-center justify-center'>
				<div>
					<div className='grid grid-cols-2 gap-3 pt-12 md:pt-16 h-fit w-fit'>
						{cities.map((city, index) => (
							<button
								key={index}
								onClick={() => setSelectedCity(city)}
								className={`px-2 py-1 rounded-lg cursor-pointer transition-all duration-300 
								${
									selectedCity.name === city.name
										? 'bg-[#930d4bd5] text-white'
										: 'bg-white text-gray-800'
								}`}
							>
								{city.name}
							</button>
						))}
					</div>
					{pathname === '/contacts' ? (
						''
					) : (
						<div className='mt-10 lg:mt-32 flex items-center justify-center font-medium'>
							<Link
								href={'/contacts'}
								className='bg-white cursor-pointer text-center px-8 py-5 rounded-xl hover:bg-primary-red hover:text-white transition-colors duration-500'
							>
								Контакты
							</Link>
						</div>
					)}
				</div>
				<div className='relative h-[300px] w-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px]'>
					<img src='/planet.png' alt='Planet' className='w-full h-full' />

					{/* Rotating Circle */}

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
					{/* City Information */}
					<div className='text-black absolute bottom-8 right-0 sm:bottom-1/4 sm:-translate-y-1/4 sm:left-[35%] sm:text-white'>
						<h2 className='text-lg sm:text-2xl md:text-4xl font-semibold'>
							{selectedCity.name}
						</h2>
						<p className='text-xl sm:text-3xl md:text-5xl font-bold'>
							{selectedCity.phone}
						</p>
						<p className='text-sm md:text-base'>{selectedCity.address}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
