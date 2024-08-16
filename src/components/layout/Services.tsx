'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { FC, useEffect, useLayoutEffect } from 'react'
import { servicesData } from '../ui/services/servicesData'
import ServicesCard from '../ui/services/ServicesCard'
import Heading from '../ui/heading/Heading'
import Link from 'next/link'

const Services: FC = () => {
	// gsap.registerPlugin(ScrollTrigger)

  // useLayoutEffect(() => {
  //   gsap.from('.anim', { opacity: 0, x: -500, duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.anim',
	// 		}
	// 	 })
	// 	 gsap.to('.anim', {
	// 			opacity: 1,
	// 			x: 0,
	// 			duration: 1.5,
	// 			scrollTrigger: {
	// 				trigger: '.anim',
	// 			},
	// 		})
	// 		gsap.from('.box', {
	// 			opacity: 0,
	// 			x: -500,
	// 			duration: 1.5,
	// 			scrollTrigger: {
	// 				trigger: '.box',
	// 			},
	// 		})
	// 		gsap.to('.box', {
	// 			opacity: 1,
	// 			x: 0,
	// 			duration: 1.5,
	// 			scrollTrigger: {
	// 				trigger: '.box',
	// 			},
	// 		})
  // }, [])

  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36'>
			<Heading text='Наши услуги' className='anim' />
			<div className='anim pt-12 md:pt-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4'>
					{servicesData.map(card => (
						<ServicesCard
							key={card.id}
							id={card.href}
							title={card.title}
							image={card.image}
							href={card.href}
							anim={card.anim}
						/>
					))}
					<div className='mt-10 flex items-center justify-center font-medium'>
						<Link href={'/services'} className='bg-white cursor-pointer text-center px-8 py-5 rounded-xl hover:bg-fuchsia-950 hover:text-white transition-colors duration-500 border border-fuchsia-950 hover:border-transparent'>
							Все услуги
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services