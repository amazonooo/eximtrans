'use client'

import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const RentalLink: FC = () => {
  return (
		<motion.section
			variants={fadeIn('right', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
      className='mb-14'
		>
			<Link
				href={'/services'}
				className='bg-white cursor-pointer text-center px-8 py-5 rounded-xl hover:bg-fuchsia-950 hover:text-white transition-colors duration-500 border border-fuchsia-950 hover:border-transparent'
			>
				Все услуги
			</Link>
		</motion.section>
	)
}

export default RentalLink