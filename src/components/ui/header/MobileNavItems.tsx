'use client'

import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

interface IMobileMenuItems {
	closeMenu: () => void
}

const MobileNavItems: FC<IMobileMenuItems> = ({ closeMenu }) => {
  return (
		<AnimatePresence>
			<ul className='pl-3 pr-1 pt-28 flex flex-col gap-y-8'>
				<li>
					<Link className='text-3xl' href={'/about'} onClick={closeMenu}>
						О компании
					</Link>
				</li>
				<li>
					<Link className='text-3xl' href={'/services'} onClick={closeMenu}>
						Услуги
					</Link>
				</li>
				<li>
					<Link className='text-3xl' href={'/career'} onClick={closeMenu}>
						Карьера
					</Link>
				</li>
				<li>
					<Link
						className='text-3xl text-primary-red'
						href={'/contacts'}
						onClick={closeMenu}
					>
						Контакты
					</Link>
				</li>
			</ul>
			<ul className='pl-3.5 pr-1 mt-16 flex flex-col gap-y-2'>
				<li>
					<a className='text-lg' href='tel:+78007751616' onClick={closeMenu}>
						8 800 775-16-16
					</a>
				</li>
				<li>
					<a
						className='text-lg text-neutral-400'
						href={'mailto:info@abrail.ru'}
						onClick={closeMenu}
					>
						info@abrail.ru{' '}
					</a>
				</li>
			</ul>
		</AnimatePresence>
	)
}

export default MobileNavItems