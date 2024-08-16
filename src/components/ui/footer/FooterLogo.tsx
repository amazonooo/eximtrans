'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { FC, useLayoutEffect } from 'react'

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

  return <Image className='footer-logo' src={'/logo.png'} alt='logo' width={200} height={200} />

}

export default FooterLogo