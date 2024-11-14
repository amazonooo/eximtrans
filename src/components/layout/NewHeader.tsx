'use client'

import { useScrollDirection } from '@/hooks/useScrollDirection'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { navItems } from '../ui/header/navItems'
import MobileNav from '../ui/header/MobileNav'

export default function NewHeader() {
	const scrollDirection = useScrollDirection()
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (scrollDirection === 'up') {
			setIsVisible(true)
		} else if (scrollDirection === 'down') {
			setIsVisible(false)
		}
	}, [scrollDirection])

	const isDesktop = useMediaQuery({ minWidth: 920 })

	const [isOpen, setIsOpen] = useState(false)
	const [isClosing, setIsClosing] = useState(false)

	const toggleMorePanel = () => {
		if (isOpen) {
			setIsClosing(true)
			setTimeout(() => {
				setIsOpen(false)
				setIsClosing(false)
			}, 300)
		} else {
			setIsOpen(true)
		}
	}

	const menuClose = () => {
		setIsOpen(false)
	}

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

	const pathname = usePathname()
	const isNotFoundPage = pathname === '/404'

	if (isNotFoundPage) return null

	return (
		<header>
			{isDesktop && (
				<div
					className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 shadow-md bg-white ${
						isVisible ? 'translate-y-0' : '-translate-y-full'
					}`}
				>
					<nav className='pl-5 xl:pl-[3.75rem] 2xl:pl-0 2xl:max-w-[1328.5px] 2xl:ml-auto 2xl:mr-auto py-[1.875rem] flex items-center'>
						<Link className='mr-20' href={'/'}>
							<Image src={'/logo.png'} alt='logo' width={150} height={150} />
						</Link>
						<ul className='flex gap-x-6 xl:gap-x-10 mt-0.5'>
							{navItems.map((item, idx) => (
								<li
									key={idx}
									className={`relative lg:text-lt xl:text-xl font-medium w-fit hover:text-primary-red transition-colors duration-300 ${
										pathname === item.link
											? 'text-primary-red font-bold'
											: 'text-black'
									}`}
								>
									<Link href={item.link}>{item.name}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			)}

			{!isDesktop && (
				<div className={`fixed z-50 top-0 left-0 w-full bg-white shadow-md pb-5 transition-transform duration-300`}>
					<MobileNav />
				</div>
			)}
		</header>
	)
}
