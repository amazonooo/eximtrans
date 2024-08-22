'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { rental } from './rental'
import RentalCard from './RentalCard'

const RentalMain: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<motion.div
				variants={fadeIn('right', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
			>
				<h2 className='text-3xl text-center'>
					<span className='text-primary-red font-semibold'>Эксимтранс</span>{' '}
					готов выслушать ваши предложения по аренде вагонов, такие как:{' '}
				</h2>
				<div className='mt-12 md:mt-14 mb-24 md:mb-28 flex items-center justify-center'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4'>
						{rental.map(card => (
							<RentalCard key={card.id} name={card.name} id={card.id} />
						))}
					</div>
				</div>
				<motion.div
					variants={fadeIn('right', 'tween', 0.3, 1)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.2 }}
				>
					<h2 className='text-3xl text-center'>
						<span className='text-primary-red font-semibold'>Эксимтранс</span>{' '}
						готов сдать в аренду:
					</h2>
					<div className='mt-8 flex items-center justify-center'>
						<article>
							<div className='bg-white rounded-lg h-[250px] w-[250px] sm:w-[300px] md:w-[330px] lg:w-[350px] xl:w-[450px] group hover:-translate-y-2 hover:shadow-lg duration-300 transition-all  border border-primary-red/30'>
								<div className='pt-8 pb-4 px-8 flex flex-col justify-center items-center h-full'>
									<p className='text-xl md:text-3xl text-center'>Полувагоны</p>
								</div>
							</div>
						</article>
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default RentalMain