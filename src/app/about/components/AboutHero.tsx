'use client'

import { FC } from 'react'

import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const AboutHero: FC = () => {
  return (
		<motion.section
			initial='hidden'
			animate='visible'
			className='flex items-center justify-center mt-16 lg:mt-36 w-full mb-36'
		>
      <motion.div style={{
        backgroundImage: 'url(/about-hero.jpg)'
      }} className='bg-no-repeat bg-cover bg-center w-full h-[600px]' variants={slideInFromLeft(0.6)}>

      </motion.div>
    </motion.section>
	)
}

export default AboutHero