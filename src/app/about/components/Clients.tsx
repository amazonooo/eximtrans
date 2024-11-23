'use client'

import React, { useEffect, useState } from 'react'
import Heading from '@/components/ui/heading/Heading'
import MovingCards from './MovingCards'

export function InfiniteMovingCardsDemo() {
	return (
		<div className='h-fit rounded-lg flex flex-col antialiased bg-white relative overflow-hidden py-4'>
			<Heading text='Наша клиентская база' className='' />
			<MovingCards />
		</div>
	)
}