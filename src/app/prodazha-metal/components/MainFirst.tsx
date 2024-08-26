'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import SectionTitle from '@/components/ui/section-title/SectionTitle'

const MainFirst: FC = () => {
	return (
		<section className='mb-10 md:mb-14 px-5 sm:px-10'>
			<div className='mt-8'>
				<ul className='flex flex-col gap-y-7'>
					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>Колесные
						пары
					</motion.li>

					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>{' '}
						Надрессорные балки
					</motion.li>

					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>Рамы
						боковые
					</motion.li>

					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>Поглощающие
						аппараты
					</motion.li>
					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>Автосцепки
					</motion.li>
					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>Тяговые
						хомуты
					</motion.li>
					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>Авторежимы
						для планового ремонта (ПР)
					</motion.li>
				</ul>
			</div>
		</section>
	)
}

export default MainFirst
