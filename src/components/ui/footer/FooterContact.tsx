'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Link from 'next/link'

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
		<motion.div
			variants={fadeIn('left', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			className='footer-con text-center flex flex-col justify-between h-full'
		>
			<div className='flex flex-col gap-y-8'>
				<a href='tel:+74952698554'>+7 (495) 269-85-54</a>
				<a
					href='mailto:info@abrail.ru'
					className='text-primary-red hover:underline-offset-4 hover:underline'
				>
					info@abrail.ru
				</a>
			</div>
			<div className='text-primary-red'>Эксимтранс</div>
		</motion.div>
	)
}

export default FooterContact
