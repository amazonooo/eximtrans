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
			© 2012-2024 Oбщество с ограниченной ответственностью "Эксимтранс" - официальный сайт
		</motion.p>
	)
}

export default FooterInfo