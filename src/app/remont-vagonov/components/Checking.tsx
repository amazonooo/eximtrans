'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import SectionTitle from '@/components/ui/section-title/SectionTitle'

const Checking: FC = () => {
	return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[282.5px]'>
			<SectionTitle text='Комплексная проверка качества ремонта включающая' />
			<div className=''>
				<ul className='flex flex-col gap-y-7'>
					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>{' '}
						Обеспечение высокого качества ремонта на основе объективной оценки
						состояния вагона
					</motion.li>

					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>{' '}
						Качественный ремонт, выполненный с соблюдением всех технологических
						процессов
					</motion.li>

					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>Стоимость
						ремонта
					</motion.li>

					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span>Соблюдение
						стандартов при браковке комплектующих
					</motion.li>
				</ul>
			</div>
		</section>
	)
}

export default Checking
