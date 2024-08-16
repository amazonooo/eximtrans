'use client'

import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards/infinite-moving-cards'
import Heading from '@/components/ui/heading/Heading'

export function InfiniteMovingCardsDemo() {
	return (
		<div className='h-fit rounded-lg flex flex-col antialiased bg-white relative overflow-hidden py-4 mb-2 md:mb-8'>
      <Heading text='Наша клиентская база' className='' />
			<InfiniteMovingCards
        className='pt-8 md:pt-12'
				items={testimonials}
				direction='right'
				speed='normal'
			/>
		</div>
	)
}

const testimonials = [
	{
		image: '/client-1.jpg',
	},
	{
		image: '/client-2.jpg',
	},
	{
		image: '/client-3.jpg',
	},
	{
		image: '/client-4.jpg',
	},
	{
		image: '/client-5.jpg',
	},
	{
		image: '/client-6.jpg',
	},
	{
		image: '/client-7.jpg',
	},
	{
		image: '/client-8.jpg',
	},
	{
		image: '/client-9.jpg',
	},
	{
		image: '/client-10.jpg',
	},
	{
		image: '/client-11.jpg',
	},
	{
		image: '/client-12.jpg',
	},
	{
		image: '/client-13.jpg',
	},
	{
		image: '/client-14.jpg',
	},
]
