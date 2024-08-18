'use client'

import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const Logistic: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<motion.div
				variants={fadeIn('down', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
			>
				<Heading text='Промышленная логистика' />
			</motion.div>
			<motion.div
				variants={fadeIn('right', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
				className='pt-12 md:pt-16'
			>
				<p className='text-center md:text-left text-lg md:text-xl'>
					На сегодняшний день в эксплуатации ООО{' '}
					<span className='text-primary-red'>«Эксимтранс»</span> находится более
					5000 единиц вагонов, парк состоит преимущественно из
					хоппер-цементовозов, полувагонов, и универсальных платформ. Для
					обеспечения бесперебойного перевозочного процесса создана и успешно
					функционирует собственная диспетчерская служба, открыт Единый Лицевой
					Счет (ЕЛС) для расчетов по провозной плате с ОАО «РЖД», установлена
					система «ЭТРАН» для удаленного (дистанционного) оформления
					перевозочных документов, кроме того имеется возможность производить
					все виды ремонтов вагонам на всей сети железных дорог. Компания может
					в режиме реального времени информировать клиентов-грузовладельцев и
					контрагентов-собственников вагонов о местонахождении вагона с грузом,
					его порожнем рейсе или о производимых с вагонами ремонтных работах.
				</p>
			</motion.div>
		</section>
	)
}

export default Logistic