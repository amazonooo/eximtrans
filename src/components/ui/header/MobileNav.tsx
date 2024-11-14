'use client'

import { Menu, X } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import MobileNavItems from './MobileNavItems'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}

		return () => {
			document.body.classList.remove('overflow-hidden')
		}
	}, [isOpen])

  return (
		<div className='pt-5 px-5 sm:px-10 h-full'>
			<nav className='flex items-center justify-between h-full'>
				<Link href={'/'} className='z-[1000]'>
					<Image src={'/logo.png'} alt='logo' width={140} height={140} />
				</Link>
				<label className='flex flex-col gap-2 w-8 z-[1000] cursor-pointer'>
					<input
						className='peer hidden'
						type='checkbox'
						onClick={() => setIsOpen(!isOpen)}
					/>
					<div className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 origin-right ${isOpen ? 'rotate-[225deg] -translate-x-[12px] -translate-y-[1px]' : ''}`}></div>
					<div className={`rounded-2xl h-[3px] w-full bg-black duration-500 ${isOpen ? '-rotate-45' : ''}`}></div>
					<div className={`rounded-2xl h-[3.1px] w-1/2 bg-black duration-500 place-self-end origin-left ${isOpen ? 'rotate-[225deg] translate-x-[12px] translate-y-[1px]' : ''}`}></div>
				</label>
			</nav>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{
							duration: 0.3,
							ease: 'easeInOut',
						}}
						className='fixed top-0 left-0 w-full h-full p-6 bg-white z-[999]'
					>
						<MobileNavItems closeMenu={() => setIsOpen(false)} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default MobileNav