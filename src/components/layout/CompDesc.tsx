'use client'

import { FC, useLayoutEffect } from 'react'
import Heading from '../ui/heading/Heading'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { compData } from '../ui/comp-desc/compData'
import CompDescCard from '../ui/comp-desc/CompDescCard'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const CompDesc: FC = () => {
	return (
		<motion.section
			variants={fadeIn('left', 'tween', 0.3, 1.2)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			className='flex flex-col items-center justify-center mb-24 md:mb-36 md:px-15 lg:px-28 xl:px-[182.5px]'
		>
			<Heading
				text='Крупнейший частный оператор грузовых железнодорожных перевозок России'
				className='sect max-w-[1000px]'
			/>
			<div className='sect-box pt-12 md:pt-16'>
				<div className='flex flex-col md:flex-row gap-x-5 gap-y-4'>
					{compData.map(card => (
						<CompDescCard
							key={card.id}
							id={card.id}
							title={card.title}
							count={card.count}
							desc={card.desc}
						/>
					))}
				</div>
			</div>
		</motion.section>
	)
}

export default CompDesc