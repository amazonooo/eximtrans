'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, useEffect, useLayoutEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

interface ICompDescCard {
  id?: string
  title: string
  count: number
  desc: string
}

gsap.registerPlugin(ScrollTrigger)

const CompDescCard: FC<ICompDescCard> = ({ id, title, count, desc }) => {
  const cardRef = useRef<HTMLDivElement>(null)
	const { number } = useSpring({
		from: { number: 0 },
		number: count,
		config: { tension: 200, friction: 20 },
	})

  useEffect(() => {
		const cardElement = cardRef.current

		if (cardElement) {
			gsap.fromTo(
				cardElement,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					scrollTrigger: {
						trigger: cardElement,
						start: 'top 80%',
						toggleActions: 'play none none none',
					},
					duration: 1,
				}
			)
		}

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [])

	return (
		<article
			ref={cardRef}
			className='bg-white h-[316px] w-[316px] sm:h-[450px] sm:w-[450px] md:h-[260px] md:w-[260px] lg:h-[320px] lg:w-[320px] xl:h-[430px] xl:w-[430px] group shadow rounded-full'
		>
			<div className='flex flex-col items-center h-full px-8 lg:px-12 py-10 lg:py-14 xl:py-24 gap-y-16 md:gap-y-4 xl:gap-y-16'>
				<h2 className='text-3xl lg:text-4xl text-[#930D40] text-center whitespace-nowrap'>
					{title}
				</h2>
				<div className='flex flex-col items-center gap-y-4 text-center'>
					<div className='text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-semibold'>
						<animated.div>{number.to(n => n.toFixed(0))}</animated.div>
					</div>

					<p className='text-lg lg:text-xl'>{desc}</p>
				</div>
			</div>
		</article>
	)
}

export default CompDescCard