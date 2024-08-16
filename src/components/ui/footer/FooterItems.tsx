'use client'

import { useLayoutEffect } from 'react'
import FooterLink from './FooterLink'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

interface FooterItemProps {
	title: string
	links: { href: string; text: string; isGray?: boolean }[]
}

const FooterItems = ({ title, links }: FooterItemProps) => {
	// gsap.registerPlugin(ScrollTrigger)

	// useLayoutEffect(() => {
	// 	gsap.from('.footer', {
	// 		opacity: 0,
	// 		x: -500,
	// 		duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.footer',
	// 		},
	// 	})
	// 	gsap.to('.footer', {
	// 		opacity: 1,
	// 		x: 0,
	// 		duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.footer',
	// 		},
	// 	})
	// 	gsap.from('.footer-in', {
	// 		opacity: 0,
	// 		x: -200,
	// 		duration: 1,
	// 		scrollTrigger: {
	// 			trigger: '.footer-in',
	// 		},
	// 	})
	// 	gsap.to('.footer-in', {
	// 		opacity: 1,
	// 		x: 0,
	// 		duration: 1,
	// 		scrollTrigger: {
	// 			trigger: '.footer-in',
	// 		},
	// 	})
	// }, [])

	return (
		<div className='footer-in'>
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
		</div>
	)
}

export default FooterItems
