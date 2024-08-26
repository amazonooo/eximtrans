'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { CircleUserRound, LogOut, MenuIcon, User, User2 } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'
import MobileNav from '../ui/header/MobileNav'

export const Header = ({
	navItems,
	className,
	navButtons,
}: {
	navItems: {
		name: string
		link: string
		icon?: JSX.Element
	}[]
	navButtons: {
		src: string
		icon?: JSX.Element
	}[]
	className?: string
}) => {
	const pathname = usePathname()

	// const router = useRouter()

	// const isLoggedLogin = pathname === '/login'
	// const isLoggedRegister = pathname === '/register'

	// if (isLoggedLogin) return null
	// if (isLoggedRegister) return null



	const { scrollYProgress } = useScroll()

	// set true for the initial state so that nav bar is visible in the hero section
	const [visible, setVisible] = useState(true)
	const [show, setShow] = useState(false)

	useMotionValueEvent(scrollYProgress, 'change', current => {
		// Check if current is not undefined and is a number
		if (typeof current === 'number') {
			let direction = current! - scrollYProgress.getPrevious()!

			if (scrollYProgress.get() < 0.05) {
				// also set true for the initial state
				setVisible(true)
			} else {
				if (direction < 0) {
					setVisible(true)
				} else {
					setVisible(false)
				}
			}
		}
	})

	const isDesktop = useMediaQuery({ minWidth: 951 })
	const isMobile = useMediaQuery({ maxWidth: 950 })

	const [dropdownOpen, setDropdownOpen] = useState(false)
	
	// const dropdownRef = useRef<HTMLDivElement>(null)
	// const buttonRef = useRef<HTMLDivElement>(null)

	// const handleClickOutside = (event: any) => {
	// 	if(
	// 		dropdownRef.current &&
	// 		!dropdownRef.current.contains(event.target) &&
	// 		buttonRef.current &&
	// 		!buttonRef.current.contains(event.target)
	// 	) {
	// 		setDropdownOpen(false)В
	// 	}
	// }

	// useEffect(() => {
	// 	document.addEventListener('click', handleClickOutside)
	// 	return () => {
	// 		document.removeEventListener('click', handleClickOutside)
	// 	}
	// }, [])

	return (
		<header>
			{isDesktop && (
				<AnimatePresence mode='wait'>
					<motion.div
						initial={{
							opacity: 1,
							y: -100,
						}}
						animate={{
							y: visible ? 0 : -100,
							opacity: visible ? 1 : 0,
						}}
						transition={{
							duration: 0.2,
						}}
						className={cn(
							'max-w-fit md:min-w-[40vw] lg:min-w-[55vw] 2xl:min-w-[51vw] mx-auto fixed z-[5000] inset-x-0 xl:px-10 lg:px-5 py-4 rounded-lg border border-white/[0.2] bg-white',
							className
						)}
					>
						<ul className='flex justify-between'>
							<div className='text-2xl font-bold Welcome-text'>
								<Link href={'/'}>
									<Image
										src={'/logo.png'}
										alt='logo'
										width={150}
										height={150}
									/>
								</Link>
							</div>
							<li className='flex justify-between lg:gap-x-4 xl:gap-x-12 font-semibold'>
								{navItems.map((navItem: any, idx: number) => (
									<Link
										key={navItem.link}
										href={navItem.link}
										className={cn(
											`relative dark:text-neutral-50 font-semibold cursor-pointer items-center  flex space-x-1 transition-colors duration-300 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700`
										)}
									>
										<span className='block sm:hidden'>{navItem.icon}</span>
										{/* add !cursor-pointer */}
										{/* remove hidden sm:block for the mobile responsive */}
										<span className={`xl:text-lg font-bold  hover:text-[#930d4bd5] transition-colors duration-300 lg:text-sm !cursor-pointer ${pathname === navItem.link ? 'text-[#930d4bd5]' : 'text-neutral-900'}`}>
											{navItem.name}
										</span>
									</Link>
								))}
							</li>
							{/* <div className='flex justify-between items-center lg:gap-x-4 xl:gap-x-6'>
								<Link
									className={cn('relative items-center  flex space-x-1')}
									href={'/'}
								>
									<User2 />
								</Link>
								<MenuIcon />
							</div> */}
						</ul>
					</motion.div>
				</AnimatePresence>
			)}
			{isMobile && <MobileNav />}
		</header>
	)
}
