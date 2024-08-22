'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const PerevozTop: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[282.5px]'>
			<motion.h1
				variants={fadeIn('right', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				className='text-xl md:text-3xl md:text-center mb-6 md:mb-8'
			>
				<span className='text-primary-red'>ООО «Эксимтранс»</span> предоставляет
				услуги в сфере организации железнодорожных перевозок предлагает
				комплексные решения в сфере железнодорожных перевозок,от разработки
				маршрута до доставки груза
			</motion.h1>
			<motion.h2
				variants={fadeIn('right', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				className='text-base md:text-lg md:text-center'
			>
				Мы подберем оптимальный вариант железнодорожной перевозки именно для
				вашего груза. Индивидуальный подход к каждому клиенту и гибкие решения
				для любых задач железнодорожных перевозок. ООО«Эксимтранс»
			</motion.h2>
		</section>
	)
}

export default PerevozTop