'use client'

import { fadeIn } from '@/utils/motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'

const FooterInfo: FC = () => {
  // gsap.registerPlugin(ScrollTrigger)

	// useLayoutEffect(() => {
	// 	gsap.from('.footer-info', {
	// 		opacity: 0,
	// 		x: -200,
	// 		duration: 1,
	// 		scrollTrigger: {
	// 			trigger: '.footer-info',
	// 		},
	// 	})
	// 	gsap.to('.footer-info', {
	// 		opacity: 1,
	// 		x: 0,
	// 		duration: 1,
	// 		scrollTrigger: {
	// 			trigger: '.footer-info',
	// 		},
	// 	})
	// }, [])

  return (
		<motion.p
			variants={fadeIn('right', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			className='footer-info'
		>
			{' '}
			© 2007-2024 Акционерное общество «Первая Грузовая Компания» — официальный
			сайт
		</motion.p>
	)
}

export default FooterInfo