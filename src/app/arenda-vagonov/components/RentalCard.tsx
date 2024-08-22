'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

interface IRentalCard {
  id: string
  name: string
}

const RentalCard: FC<IRentalCard> = ({ id, name }) => {
  return (
		<motion.article
			variants={fadeIn('right', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className='bg-white rounded-lg h-[250px] w-[250px] sm:w-[300px] md:w-[330px] lg:w-[350px] xl:w-[450px] group hover:-translate-y-2 hover:shadow-lg duration-300 transition-all  border border-primary-red/30'>
				<div className='pt-8 pb-4 px-8 flex flex-col justify-center items-center h-full'>
					<p className='text-xl md:text-3xl text-center'>{name}</p>
				</div>
			</div>
		</motion.article>
	)
}

export default RentalCard