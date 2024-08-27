'use client'

import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const ServicesDesc: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<motion.div
				variants={fadeIn('down', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
			>
				<Heading text='Почему выбирают нас?' />
			</motion.div>
			<motion.div
				variants={fadeIn('right', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
				className='pt-12 md:pt-16'
			>
				<p className='text-center md:text-left text-lg md:text-xl'>
					<span className='text-primary-red'>Эксимтранс</span> обеспечивает
					своим клиентам широкий спектр транспортных решений по перевозке грузов
					железнодорожным и автомобильным транспортом Большой опыт работы дает{' '}
					<span className='text-primary-red'>Эксимтрансу</span> широкие
					возможности эффективно решать долгосрочные задачи клиентов по
					решению логистических цепей
				</p>
			</motion.div>
		</section>
	)
}

export default ServicesDesc