'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

const FooterContact = () => {
	// gsap.registerPlugin(ScrollTrigger)

	// useLayoutEffect(() => {
	// 	gsap.from('.footer-con', {
	// 		opacity: 0,
	// 		x: 500,
	// 		duration: 1,
	// 		scrollTrigger: {
	// 			trigger: '.footer-con',
	// 		},
	// 	})
	// 	gsap.to('.footer-con', {
	// 		opacity: 1,
	// 		x: 0,
	// 		duration: 1,
	// 		scrollTrigger: {
	// 			trigger: '.footer-con',
	// 		},
	// 	})
	// }, [])

	return (
		<div className='footer-con text-center flex flex-col justify-between h-full'>
			<div>
				<p className='text-xl font-semibold'>8 800 775-16-16</p>
				<p className='text-gray-500'>help@pgk.ru</p>
			</div>
			<div>Личный кабинет клиента</div>
			<div>ПГК</div>
		</div>
	)
}

export default FooterContact
