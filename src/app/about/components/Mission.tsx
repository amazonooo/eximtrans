'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { FC, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const Mission: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<div className=''>
				<div className='flex flex-col md:flex-row items-center gap-x-6 gap-y-8'>
					<div className='mission-top'>
						<motion.h1
							variants={fadeIn('down', 'tween', 0.3, .8)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true, amount: 0.7 }}
							className=' text-2xl md:text-4xl text-black font-semibold mb-6'
						>
							Наша миссия
						</motion.h1>
						<motion.p
							variants={fadeIn('right', 'tween', 0.3, .8)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true, amount: 0.3 }}
							className='max-w-[700px] text-lg md:text-xl'
						>
							Свою миссию мы видим в максимальном{' '}
							<span className='text-primary-red'>упрощении</span> для клиента
							процесса перемещения его груза из точки А в точку В, при этом в
							любой момент времени заказчик должен получить ответ на любой
							вопрос о перевозке, как осуществляющейся, так и потенциально для
							него возможной. Наша слаженная команда профессионалов ставит перед
							собой одну цель - доставить груз качественно и в срок.
						</motion.p>
					</div>
					<motion.div
						variants={fadeIn('left', 'tween', 0.3, .8)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.3 }}
						className='mission-top-box'
					>
						<Image
							src={'/train-1.jpg'}
							alt='img'
							width={400}
							height={400}
							className='rounded-lg'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Mission