'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { FC, useLayoutEffect } from 'react'

const Mission: FC = () => {
  // gsap.registerPlugin(ScrollTrigger)

	// useLayoutEffect(() => {
	// 	gsap.from('.mission-top', {
	// 		opacity: 0,
	// 		x: -500,
	// 		duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.mission-top',
	// 		},
	// 	})
	// 	gsap.to('.mission-top', {
	// 		opacity: 1,
	// 		x: 0,
	// 		duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.mission-top',
	// 		},
	// 	})
	// 	gsap.from('.mission-top-box', {
	// 		opacity: 0,
	// 		x: 300,
	// 		duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.mission-top-box',
	// 		},
	// 	})
	// 	gsap.to('.mission-top-box', {
	// 		opacity: 1,
	// 		x: 0,
	// 		duration: 1.5,
	// 		scrollTrigger: {
	// 			trigger: '.mission-top-box',
	// 		},
	// 	})
	// }, [])

  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<div className=''>
				<div className='flex flex-col md:flex-row items-center gap-x-6 gap-y-8'>
					<div className='mission-top'>
						<h1 className=' text-2xl md:text-4xl text-black font-semibold mb-6'>
							Наша миссия
						</h1>
						<p className='max-w-[700px] text-lg md:text-xl'>
							Свою миссию мы видим в максимальном{' '}
							<span className='text-primary-red'>упрощении</span> для клиента
							процесса перемещения его груза из точки А в точку В, при этом в
							любой момент времени заказчик должен получить ответ на любой
							вопрос о перевозке, как осуществляющейся, так и потенциально для
							него возможной. Наша слаженная команда профессионалов ставит перед
							собой одну цель - доставить груз качественно и в срок.
						</p>
					</div>
					<div className='mission-top-box'>
						<Image src={'/train-1.jpg'} alt='img' width={400} height={400} className='rounded-lg' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Mission