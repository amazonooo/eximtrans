'use client'

import { fadeIn } from '@/utils/motion'
import { FC } from 'react'
import { motion } from 'framer-motion'

const CareerText: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<motion.div
				variants={fadeIn('right', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
				className=''
			>
				<p className='text-center md:text-left text-lg md:text-xl'>
					Сотрудники <span className='text-primary-red'>«Эксимтранс»</span> —
					самый значимый ресурс компании. Мы ценим профессионализм, стремление к
					достижению результата, готовность работать в команде и брать на себя
					ответственность. Мы — это не только интересная работа и нестандартные
					задачи, но и сплоченный коллектив из людей, объединенных общими идеями
					и увлечениями. Присоединяйтесь к команде опытных профессионалов
					<span className='text-primary-red'>«Эксимтранс»</span>!
				</p>
			</motion.div>
		</section>
	)
}

export default CareerText