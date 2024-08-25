'use client'

import { fadeIn } from '@/utils/motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'

const FooterInfo: FC = () => {
  return (
		<motion.p
			variants={fadeIn('right', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.1 }}
			className='footer-info'
		>
			{' '}
			© 2007-2024 Акционерное общество «Первая Грузовая Компания» — официальный
			сайт
		</motion.p>
	)
}

export default FooterInfo