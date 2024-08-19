'use client'

import React from 'react'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '@/utils/motion'

interface InputProps {
  placeholder: string
  type: string
}

const Input: FC<InputProps> = ({ placeholder, type }) => {
  return (
		<motion.input
			value={type}
			variants={fadeIn('left', 'tween', 0.3, 0.8)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.3 }}
			autoComplete='off'
			id={type}
			required
			minLength={5}
			maxLength={150}
			className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
			placeholder={placeholder}
			type={type}
		/>
	)
}

export default Input