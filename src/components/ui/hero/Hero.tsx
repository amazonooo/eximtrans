'use client'

import { FC, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const Hero: FC = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
		<motion.section
			initial='hidden'
			animate='visible'
			className='md:px-36 lg:px-44 mt-16 lg:mt-40 w-full mb-20'
		>
			<motion.div
				variants={slideInFromLeft(0.5)}
				className='bg-primary border border-white min-w-full h-[800px] bg-no-repeat bg-cover bg-center rounded-lg relative pt-32 px-10 pb-5'
				style={{
					backgroundImage: 'url(/hero.avif)',
				}}
			>
				<div className='absolute bottom-6 md:top-6 md:right-6'>
					<p className='text-[#464545]'>
						Железнодорожные и грузовые перевозки грузов
					</p>
				</div>
				<div className='text-center'>
					<h1 className='text-center text-4xl md:text-6xl'>Эксимтранс</h1>
					<h2 className='text-3xl md:text-4xl mt-12'>
						контроль управления и надёжность в перовозке ваших грузов
					</h2>
				</div>
			</motion.div>
		</motion.section>
	)
}

export default Hero