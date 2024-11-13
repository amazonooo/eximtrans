import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards/infinite-moving-cards'
import Heading from '@/components/ui/heading/Heading'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

export function InfiniteMovingCardsDemo() {
	return (
		<div className='h-fit rounded-lg flex flex-col antialiased bg-white relative overflow-hidden py-4'>
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
		image: '/client-3.jpg',
	},
	{
		image: '/client-15.png',
	},
	{
		image: '/client-16.png',
	},
	{
		image: '/client-17.png',
	},
	{
		image: '/client-18.png',
	},
	{
		image: '/client-19.jpg',
	},
	{
		image: '/client-20.png',
	},
	{
		image: '/client-21.jpg',
	},
	{
		image: '/client-22.png',
	},
	{
		image: '/client-23.png',
	},
	{
		image: '/client-24.png',
	},
	{
		image: '/client-25.png',
	},
	{
		image: '/client-26.jpg',
	},
	{
		image: '/client-27.jpg',
	},
]
