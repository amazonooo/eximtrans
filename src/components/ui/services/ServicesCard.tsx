import { FC } from 'react'
import { IServicesData } from './servicesData'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/utils/cn'

interface IServicesCard {
  id: string
	title: string
	image: string
	href: string
  anim: string
}

const ServicesCard: FC<IServicesCard> = ({ id, title, image, href, anim }) => {
  return (
		<Link
			href={href}
			className={cn(`bg-white cursor-pointer rounded-lg h-[356px] w-[300px] sm:w-[450px] md:w-[350px] lg:w-[425px] xl:w-[650px] group shadow hover:-translate-y-2 duration-300`, anim)}
		>
			<div className='pt-8 pb-4 px-8 flex flex-col justify-between h-full'>
				<h2 className='text-xl md:text-2xl'>{title}</h2>
				<div className='flex items-center justify-center'>
					<Image
						className='max-h-[255px]'
						src={image}
						alt={title}
						width={500}
						height={500}
					/>
				</div>
			</div>
		</Link>
	)
}

export default ServicesCard