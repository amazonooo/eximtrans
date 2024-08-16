'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { FC, useLayoutEffect } from 'react'

const AboutTop: FC = () => {
  // gsap.registerPlugin(ScrollTrigger)

	// useLayoutEffect(() => {
	// 	gsap.from('.about-top', {
	// 		opacity: 0,
	// 		x: -500,
	// 		duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.about-top',
	// 		},
	// 	})
	// 	gsap.to('.about-top', {
	// 		opacity: 1,
	// 		x: 0,
	// 		duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.about-top',
	// 		},
	// 	})
	// 	gsap.from('.about-top-box', {
	// 		opacity: 0,
	// 		x: 300,
	// 		duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.about-top-box',
	// 		},
	// 	})
	// 	gsap.to('.about-top-box', {
	// 		opacity: 1,
	// 		x: 0,
	// 		duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.about-top-box',
	// 		},
	// 	})
	// }, [])
  
  return (
		<section className='flex flex-col items-center justify-center mb-36 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 mx-auto px-5 sm:px-10'>
				<div className='about-top'>
					<Image src={'/logo.png'} alt='logo' width={200} height={200} />
				</div>
				<div>
					<p className='about-top-box text-xl md:text-2xl'>
						ООО <span className='text-[#930d4bd5]'>"Эксимтранс"</span> –
						российская транспортная компания,основной род деятельности которой -
						организация перевозок грузов железнодорожным и автомобильным
						транспортом,а также и другие указанные нами услуги.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutTop