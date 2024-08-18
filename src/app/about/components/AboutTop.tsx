'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { FC, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const AboutTop: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-y-6'>
				<motion.div
					variants={fadeIn('right', 'tween', 0.3, 1)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.3 }}
				>
					<Image src={'/logo.png'} alt='logo' width={200} height={200} />
				</motion.div>
				<motion.div
					variants={fadeIn('left', 'tween', 0.3, 1)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.3 }}
				>
					<p className='text-xl md:text-2xl'>
						ООО <span className='text-[#930d4bd5]'>"Эксимтранс"</span> –
						российская транспортная компания,основной род деятельности которой -
						организация перевозок грузов железнодорожным и автомобильным
						транспортом,а также и другие указанные нами услуги.
					</p>
				</motion.div>
			</div>
		</section>
	)
}

export default AboutTop