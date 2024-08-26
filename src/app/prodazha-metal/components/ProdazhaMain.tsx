'use client'

import SectionTitle from '@/components/ui/section-title/SectionTitle'
import { FC } from 'react'
import MainFirst from './MainFirst'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Contact from '@/components/ui/contact/Contact'
import ProdazhaContact from './ProdazhaContact'

const ProdazhaMain: FC = () => {
	return (
		<section className='flex flex-col justify-start mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<SectionTitle text='Продажа ремонтопригодных запасных частей и металлолома' />
			<div className='flex items-center mt-10 gap-x-4'>
				<div className='w-10 h-10 md:w-14 md:h-14 text-2xl md:text-3xl bg-primary-red text-white flex items-center justify-center p-1 border border-white rounded-full'>
					1
				</div>
				<h2 className='text-lg md:text-2xl text-center'>
					Обеспечение новыми и б/у запасными частями:
				</h2>
			</div>
			<MainFirst />
			<motion.div
				variants={fadeIn('right', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				className='flex items-center mt-10 gap-x-4'
			>
				<div className='w-10 h-10 md:w-14 md:h-14 text-2xl md:text-3xl bg-primary-red text-white flex items-center justify-center p-1 border border-white rounded-full'>
					2
				</div>
				<h2 className='text-lg md:text-2xl text-center'>
					Выкуп снятых деталей после ремонта
				</h2>
			</motion.div>
			<motion.div
				variants={fadeIn('right', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				className='flex items-center mt-14 gap-x-4'
			>
				<div className='w-10 h-10 md:w-14 md:h-14 text-2xl md:text-3xl bg-primary-red text-white flex items-center justify-center p-1 border border-white rounded-full'>
					3
				</div>
				<h2 className='text-lg md:text-2xl text-center'>
					Организацию перевозки запасных частей к месту ремонта
				</h2>
			</motion.div>
		</section>
	)
}

export default ProdazhaMain
