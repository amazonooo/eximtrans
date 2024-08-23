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

	title2?: string
	image2: string
	name2?: string
	desc2?: string
	link2: string
  email2?: string
  phone2?: string
}

const Contact: FC<IContact> = ({ title, image, name, desc, link, email, phone, desc2, email2, image2, link2, name2, phone2, title2 }) => {
	const pathname = usePathname()

	return (
		<section className='flex flex-col mb-16 md:mb-24 w-full'>
			<div className='w-full h-auto bg-white'>
				<div className='flex items-center justify-center px-4 py-8'>
					<div className='flex flex-col gap-y-16'>
						<SectionTitle text={title} className='max-w-[1000px]' />
						<div className='flex flex-col items-center md:flex-row gap-y-6 justify-center gap-x-8'>
							<motion.div
								variants={fadeIn('right', 'tween', 0.3, 1)}
								initial='hidden'
								whileInView='show'
								viewport={{ once: true, amount: 0.2 }}
							>
								<Image
									className='rounded-full'
									src={image}
									alt='ava'
									width={250}
									height={250}
								/>
							</motion.div>
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
								<Link href={link} className='text-primary-red hover:underline'>
									{link || phone}
								</Link>
							</motion.div>
						</div>
						{pathname === '/remont-vagonov' && (
							<div className='flex flex-col items-center md:flex-row gap-y-6 justify-center gap-x-8'>
								<motion.div
									variants={fadeIn('right', 'tween', 0.3, 1)}
									initial='hidden'
									whileInView='show'
									viewport={{ once: true, amount: 0.2 }}
								>
									<Image
										className='rounded-full'
										src={image2}
										alt=''
										width={250}
										height={250}
									/>
								</motion.div>
								<motion.div
									variants={fadeIn('left', 'tween', 0.3, 1)}
									initial='hidden'
									whileInView='show'
									viewport={{ once: true, amount: 0.2 }}
									className='text-center'
								>
									<h1 className='text-lg md:text-2xl mb-3'>{name2}</h1>
									<p className='max-w-[530px] text-base md:text-lg mb-2'>
										{desc2}
									</p>
									<Link
										href={link2}
										className='text-primary-red hover:underline'
									>
										{link2 || phone2}
									</Link>
								</motion.div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
