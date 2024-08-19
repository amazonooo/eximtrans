'use client'

import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const MobileNavItems: FC = () => {
  return (
		<AnimatePresence>
			<ul className='pl-3 pr-1 pt-28 flex flex-col gap-y-8'>
				<li>
					<Link className='text-3xl' href={'/about'}>
						О компании
					</Link>
				</li>
				<li>
					<Link className='text-3xl' href={'/services'}>
						Услуги
					</Link>
				</li>
				<li>
					<Link className='text-3xl' href={'/career'}>
						Карьера
					</Link>
				</li>
				<li>
					<Link className='text-3xl text-primary-red' href={'/contacts'}>
						Контакты
					</Link>
				</li>
			</ul>
			<ul className='pl-3.5 pr-1 mt-16 flex flex-col gap-y-2'>
				<li>
					<Link className='text-lg' href={'/'}>
						8 800 775-16-16
					</Link>
				</li>
				<li>
					<Link className='text-lg text-neutral-400' href={'/'}>
						help@pgk.ru
					</Link>
				</li>
			</ul>
		</AnimatePresence>
	)
}

export default MobileNavItems