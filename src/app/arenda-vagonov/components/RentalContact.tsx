'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import Heading from '@/components/ui/heading/Heading'
import Image from 'next/image'
import Link from 'next/link'
import { fadeIn } from '@/utils/motion'
import SectionTitle from '@/components/ui/section-title/SectionTitle'

const RentalContact: FC = () => {
  return (
		<section className='flex flex-col mb-16 md:mb-24 w-full'>
			<div className='w-full h-auto bg-white'>
				<div className='flex items-center justify-center px-4 py-8'>
					<div className='flex flex-col gap-y-16'>
						<SectionTitle
							text='Присылайте ваши предложения по предоставлению подвижного состава в
							аренду по указанным ниже контактам'
						/>
						<div className='flex flex-col items-center md:flex-row gap-y-6 md:justify-between'>
							<motion.div
								variants={fadeIn('right', 'tween', 0.3, 1)}
								initial='hidden'
								whileInView='show'
								viewport={{ once: true, amount: 0.2 }}
							>
								<Image
									className='rounded-full'
									src='/ava.jpg'
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
								<h1 className='text-lg md:text-2xl mb-3'>Шайко Наталья</h1>
								<p className='max-w-[530px] text-base md:text-lg mb-2'>
									Заместитель директора департамента – начальник отдела
									привлечения подвижного состава в аренду
								</p>
								<Link href={'/'} className='text-primary-red hover:underline'>
									ShaikoNaN@PGK.RU
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default RentalContact