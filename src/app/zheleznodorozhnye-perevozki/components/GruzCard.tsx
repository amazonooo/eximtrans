'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import { fadeIn, zoomIn } from '@/utils/motion'

interface IGruzCard {
	id: string
	title: string
	image: string
}

const GruzCard: FC<IGruzCard> = ({ id, title, image }) => {
	return (
		<motion.div
			variants={fadeIn('right', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.3 }}
		>
			<div
				className={cn(
					`bg-white cursor-pointer rounded-lg h-[356px] w-fit group hover:-translate-y-2 hover:shadow-xl duration-300 transition-all`
				)}
			>
				<article>
					<div className='pt-8 pb-4 px-8 flex flex-col gap-y-4 h-full'>
						<h2 className='text-xl md:text-2xl'>{title}</h2>
						<div className=''>
							<Image
								className='max-h-[255px] rounded-lg'
								src={image}
								alt={title}
								width={500}
								height={500}
							/>
						</div>
					</div>
				</article>
			</div>
		</motion.div>
	)
}

export default GruzCard
