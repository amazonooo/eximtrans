'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { FC, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Link from 'next/link'

const FooterLogo: FC = () => {
  return (
		<motion.div
			variants={fadeIn('right', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
		>
			<Link href={'/'}>
				<Image
					className='footer-logo'
					src={'/logo.png'}
					alt='logo'
					width={200}
					height={200}
				/>
			</Link>
		</motion.div>
	)

}

export default FooterLogo