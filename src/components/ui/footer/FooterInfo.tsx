'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, useLayoutEffect } from 'react'

const FooterInfo: FC = () => {
  gsap.registerPlugin(ScrollTrigger)

	useLayoutEffect(() => {
		gsap.from('.footer-info', {
			opacity: 0,
			x: -200,
			duration: 1,
			scrollTrigger: {
				trigger: '.footer-info',
			},
		})
		gsap.to('.footer-info', {
			opacity: 1,
			x: 0,
			duration: 1,
			scrollTrigger: {
				trigger: '.footer-info',
			},
		})
	}, [])

  return (
		<p className='footer-info'>
			{' '}
			© 2007-2024 Акционерное общество «Первая Грузовая Компания» — официальный
			сайт
		</p>
	)
}

export default FooterInfo