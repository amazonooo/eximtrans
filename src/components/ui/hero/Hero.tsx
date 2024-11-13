'use client'

import { FC, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Hero: FC = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
		<motion.section
			initial='hidden'
			animate='visible'
			className='md:px-36 lg:px-44 mt-16 lg:mt-40 w-full mb-24 md:mb-36'
		>
			<motion.div
				variants={slideInFromLeft(0.8)}
				className='bg-primary min-w-full h-[750px] bg-no-repeat bg-cover bg-center rounded-lg relative pt-32 px-10 pb-5 '
				style={{
					backgroundImage: 'url(/hero.jpg)',
				}}
			>
				<div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)]' />
				<div className='absolute bottom-6 md:top-6 md:right-6'>
					<p className='text-neutral-300'>
						Железнодорожные и автомобильные перевозки hello
					</p>
				</div>
				<div className='w-full h-full flex justify-center'>
					<div className='absolute'>
						<h1 className='text-white text-center text-5xl lg:text-8xl font-bold w-full'>
							Эксимтранс
						</h1>
						<h2 className='text-white text-3xl lg:text-5xl mt-16 text-center max-w-[1000px]'>
							контроль управления и надёжность в перовозке ваших грузов
						</h2>
					</div>
				</div>
			</motion.div>
		</motion.section>
	)
}

export default Hero