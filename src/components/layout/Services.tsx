'use client'

import Aos from 'aos'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, useEffect, useLayoutEffect } from 'react'

const Services: FC = () => {
	gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.from('.anim', { opacity: 0, x: -500, duration: 2 })
  }, [])

  return (
		<section className='relative md:px-36 lg:px-44'>
			<h1 className='h-full text-center text-2xl md:text-4xl text-black'>
				Наши услуги
			</h1>
		</section>
	)
}

export default Services