'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import Heading from '@/components/ui/heading/Heading'
import Image from 'next/image'
import Link from 'next/link'
import { fadeIn } from '@/utils/motion'
import SectionTitle from '@/components/ui/section-title/SectionTitle'
import { usePathname } from 'next/navigation'

interface IContact {
	title: string
	image: string
	name: string
	desc?: string
	link: string
  email?: string
  phone?: string
}

const Contact: FC<IContact> = ({ title, image, name, desc, link, email, phone }) => {
	const pathname = usePathname()

	return (
		<section className='flex flex-col mb-16 md:mb-24 w-full'>
			<div className='w-full h-auto bg-white'>
				<div className='flex items-center justify-center px-4 py-8'>
					<div className='flex flex-col'>
						<SectionTitle text={title} className='max-w-[1000px]' />
						<div className='flex flex-col items-center md:flex-row gap-y-6 justify-center gap-x-8'>
							<motion.div
								variants={fadeIn('left', 'tween', 0.3, 1)}
								initial='hidden'
								whileInView='show'
								viewport={{ once: true, amount: 0.2 }}
								className='text-center'
							>
								<h1 className='text-lg md:text-2xl mb-3'>{name}</h1>
								<p className='max-w-[530px] text-base md:text-lg mb-2'>
									{desc}
								</p>
								<div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
									<a
										href={`mailto:${link}`}
										className='text-primary-red hover:underline'
									>
										{link}
									</a>
									<a
										href={`tel:${phone}`}
										className='text-primary-red hover:underline'
									>
										{phone}
									</a>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
