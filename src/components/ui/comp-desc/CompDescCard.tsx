'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, useEffect, useLayoutEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import AnimatedNumber from '../animated-number/AnimatedNumber'

interface ICompDescCard {
  id?: string
  title: string
  count: number
  desc: string
}

const CompDescCard: FC<ICompDescCard> = ({ id, title, count, desc }) => {
	return (
		<article
			className='bg-white h-[316px] w-[316px] sm:h-[450px] sm:w-[450px] md:h-[260px] md:w-[260px] lg:h-[320px] lg:w-[320px] xl:h-[430px] xl:w-[430px] group shadow rounded-full'
		>
			<div className='flex flex-col items-center h-full px-8 lg:px-12 py-10 lg:py-14 xl:py-24 gap-y-16 md:gap-y-4 xl:gap-y-16'>
				<h2 className='text-3xl lg:text-4xl text-[#930D40] text-center whitespace-nowrap'>
					{title}
				</h2>
				<div className='flex flex-col items-center gap-y-4 text-center'>
					<AnimatedNumber end={count} />
					<p className='text-lg lg:text-xl'>{desc}</p>
				</div>
			</div>
		</article>
	)
}

export default CompDescCard