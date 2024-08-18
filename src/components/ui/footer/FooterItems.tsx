'use client'

import { useLayoutEffect } from 'react'
import FooterLink from './FooterLink'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

interface FooterItemProps {
	title?: string
	links: { href: string; text: string; isGray?: boolean }[]
}

const FooterItems = ({ title, links }: FooterItemProps) => {
	return (
		<motion.div
			variants={fadeIn('down', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			className='footer-in'
		>
			<h3 className='mb-4 font-semibold'>{title}</h3>
			<ul>
				{links.map((link, index) => (
					<li key={index} className='mb-2'>
						<FooterLink
							href={link.href}
							text={link.text}
							isGray={link.isGray}
						/>
					</li>
				))}
			</ul>
		</motion.div>
	)
}

export default FooterItems
