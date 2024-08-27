'use client'

import { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

interface IAnimatedNumber {
  end: number
  duration?: number
}

const AnimatedNumber: FC<IAnimatedNumber> = ({ end, duration = 2.5 }) => {
	return (
		<div
			className='text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-semibold'
		>
			<CountUp end={end} duration={duration} prefix='> ' enableScrollSpy />
		</div>
	)
}

export default AnimatedNumber