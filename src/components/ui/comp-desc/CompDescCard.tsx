'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, useEffect, useLayoutEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

interface ICompDescCard {
  id?: string
  title: string
  count: string
  desc: string
}

gsap.registerPlugin(ScrollTrigger)

const CompDescCard: FC<ICompDescCard> = ({ id, title, count, desc }) => {
	const cardRef = useRef<HTMLDivElement>(null)

  function Number({ n }: any) {
		const { number } = useSpring({
			from: { number: 0 },
			number: n,
			delay: 200,
			config: { mass: 1, tension: 20, friction: 10 },
		})
		return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
	}

	 useEffect(() => {
			const card = cardRef.current

			if (card) {
				ScrollTrigger.create({
					trigger: card,
					start: 'top 80%',
					onEnter: () => gsap.to(card, { opacity: 1, duration: 0.5 }),
					onEnterBack: () => gsap.to(card, { opacity: 1, duration: 0.5 }),
					onLeave: () => gsap.to(card, { opacity: 0, duration: 0.5 }),
					onLeaveBack: () => gsap.to(card, { opacity: 0, duration: 0.5 }),
				})
			}

			return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}, [])

	return (
		<article ref={cardRef} className='bg-white h-[316px] w-[316px] sm:h-[450px] sm:w-[450px] md:h-[260px] md:w-[260px] lg:h-[320px] lg:w-[320px] xl:h-[430px] xl:w-[430px] group shadow rounded-full opacity-0'>
			<div className='flex flex-col items-center h-full px-8 lg:px-12 py-10 lg:py-14 xl:py-24 gap-y-16 md:gap-y-4 xl:gap-y-16'>
				<h2 className='text-3xl lg:text-4xl text-[#930D40] text-center whitespace-nowrap'>
					{title}
				</h2>
				<div className='flex flex-col items-center gap-y-4 text-center'>
					<div className='text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-semibold'>
						{id === '1' ? (
							<Number n={~99} />
						) : id === '2' ? (
							<Number n={~2499} />
						) : id === '3' ? (
							<Number n={~1999} />
						) : (
							''
						)}
					</div>

					<p className='text-lg lg:text-xl'>{desc}</p>
				</div>
			</div>
		</article>
	)
}

export default CompDescCard