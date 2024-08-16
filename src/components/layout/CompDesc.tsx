'use client'

import { FC, useLayoutEffect } from 'react'
import Heading from '../ui/heading/Heading'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { compData } from '../ui/comp-desc/compData'
import CompDescCard from '../ui/comp-desc/CompDescCard'

const CompDesc: FC = () => {
	gsap.registerPlugin(ScrollTrigger)

	useLayoutEffect(() => {
		gsap.from('.sect', {
			opacity: 0,
			x: -1000,
			duration: 1.5,
			scrollTrigger: {
				trigger: '.sect',
			},
		})
		gsap.to('.sect', {
			opacity: 1,
			x: 0,
			duration: 1.5,
			scrollTrigger: {
				trigger: '.sect',
			},
		})
		gsap.from('.sect-box', {
			opacity: 0,
			x: -300,
			duration: 1.5,
			scrollTrigger: {
				trigger: '.sect-box',
			},
		})
		gsap.to('.sect-box', {
			opacity: 1,
			x: 0,
			duration: 1.5,
			scrollTrigger: {
				trigger: '.sect-box',
			},
		})
	}, [])

	return (
		<section className='flex flex-col items-center justify-center mb-36 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<Heading
				text='Крупнейший частный оператор грузовых железнодорожных перевозок России'
				className='sect max-w-[1000px]'
			/>
			<div className='sect-box pt-12 md:pt-16'>
				<div className='flex flex-col md:flex-row gap-x-5 gap-y-4'>
					{compData.map(card => (
						<CompDescCard
							key={card.id}
							id={card.id}
							title={card.title}
							count={card.count}
							desc={card.desc}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default CompDesc