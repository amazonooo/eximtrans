'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { FC, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const FooterLogo: FC = () => {
  // gsap.registerPlugin(ScrollTrigger)

	// useLayoutEffect(() => {
	// 	gsap.from('.footer-logo', {
	// 		opacity: 0,
	// 		x: -300,
	// 		duration: 1,
	// 		scrollTrigger: {
	// 			trigger: '.footer-logo',
	// 		},
	// 	})
	// 	gsap.to('.footer-logo', {
	// 		opacity: 1,
	// 		x: 0,
	// 		duration: 1,
	// 		scrollTrigger: {
	// 			trigger: '.footer-logo',
	// 		},
	// 	})
	// }, [])

  return (
		<motion.div
			variants={fadeIn('right', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
		>
			<Image
				className='footer-logo'
				src={'/logo.png'}
				alt='logo'
				width={200}
				height={200}
			/>
		</motion.div>
	)

}

export default FooterLogo