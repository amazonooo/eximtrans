'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Image from 'next/image'
import SectionTitle from '@/components/ui/section-title/SectionTitle'

const Offer: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[282.5px]'>
			<SectionTitle text='Мы предлагаем:' />
			<div className='flex flex-col 2xl:flex-row items-center gap-x-6 gap-y-10'>
				<ul className='flex flex-col gap-y-7'>
					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span> Регулярные
						и внеплановые работы по восстановлению работоспособности грузовых
						-вагонов и их составных частей, выполняемые на любых железнодорожных
						депо
					</motion.li>

					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span> Ремонт
						грузовых вагонов на всей территории РФ и других странах СНГ
					</motion.li>

					<motion.li
						variants={fadeIn('right', 'tween', 0.3, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='flex gap-x-4 text-lg md:text-xl'
					>
						<span className='text-primary-red font-semibold'>—</span> Система
						мониторинга процесса отцепки вагонов на ремонт и контроля качества
						выполненных работ
					</motion.li>
				</ul>
				<Image
					src={'/remont-1.jpg'}
					alt='remont-1'
					width={600}
					height={200}
					className='rounded-lg'
				/>
			</div>
		</section>
	)
}

export default Offer