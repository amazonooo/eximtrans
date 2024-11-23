'use client'

import { motion } from 'framer-motion';
import Image from 'next/image'
import { Fragment } from 'react'

import client3 from '../../../../public/client-3.jpg'
import client15 from '../../../../public/client-15.png'
import client16 from '../../../../public/client-16.png'
import client17 from '../../../../public/client-17.png'
import client18 from '../../../../public/client-18.png'
import client19 from '../../../../public/client-19.jpg'
import client20 from '../../../../public/client-20.png'
import client21 from '../../../../public/client-21.jpg'
import client22 from '../../../../public/client-22.png'
import client23 from '../../../../public/client-23.png'
import client24 from '../../../../public/client-24.png'
import client25 from '../../../../public/client-25.png'
import client26 from '../../../../public/client-26.jpg'
import client27 from '../../../../public/client-27.jpg'


const testimonials = [
	{
		image: client3,
	},
	{
		image: client15,
	},
	{
		image: client16,
	},
	{
		image: client17,
	},
	{
		image: client18,
	},
	{
		image: client19,
	},
	{
		image: client20,
	},
	{
		image: client21,
	},
	{
		image: client22,
	},
	{
		image: client23,
	},
	{
		image: client24,
	},
	{
		image: client25,
	},
	{
		image: client26,
	},
	{
		image: client27,
	},
]

export default function MovingCards(props: {className?: string; }) {
  return (
		<div className='flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
			<motion.div
				animate={{
					x: '-50%',
				}}
				transition={{
					duration: 50,
					ease: 'linear',
					repeat: Infinity,
				}}
				className='flex flex-none gap-24 pr-24'
			>
				{Array.from({ length: 2 }).map((_, idx) => (
					<Fragment key={idx}>
						{testimonials.map((testimonial, idx) => (
							<div
								key={idx}
								className='relative rounded-2xl border border-b-1 flex-shrink-0 px-6 py-4 md:px-8 md:py-6 flex items-center justify-center w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]'
							>
								<Image
									src={testimonial.image}
									alt={`${testimonial.image} img`}
									className='w-[170px] h-[150px] md:w-[200px] md:h-[200px]'
								/>
							</div>
						))}
					</Fragment>
				))}
			</motion.div>
		</div>
	)
}