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

	const isDesktop = useMediaQuery({ minWidth: 769 })

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
	const isNotFound =
		pathname !== '/' &&
		pathname !== '/appdevelop/index.html' &&
		pathname !== '/implementation/index.html' &&
		pathname !== '/contacts/index.html' &&
		pathname !== '/partners/index.html' &&
		pathname !== '/services/index.html' &&
		pathname !== '/case/index.html'

	if (isNotFound) return null

	return (
		<header>
			{isDesktop && (
				<div
					className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 shadow-md bg-white ${
						isVisible ? 'translate-y-0' : '-translate-y-full'
					}`}
				>
					<nav className='pl-5 xl:pl-[3.75rem] 2xl:pl-0 2xl:max-w-[1328.5px] 2xl:ml-auto 2xl:mr-auto py-[1.875rem] flex items-center'>
						<Link
							href={'/'}
							className='text-xl xl:text-2xl font-extrabold uppercase text-primary-blue mr-10 xl:mr-14'
						>
							УМЦ ВОА
						</Link>
						<ul className='flex gap-x-6 xl:gap-x-10 mt-0.5'>
							{navItems.map((item, idx) => (
								<li
									key={idx}
									className={`relative lg:text-sm xl:text-lg font-medium after:w-0 w-fit hover:text-primary-blue transition-colors duration-300 ${
										pathname === item.link
											? 'text-primary-blue after:bg-primary-blue'
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
				<div
					className={`fixed top-0 left-0 w-full pt-5 px-5 sm:px-10 z-[500] transition-all duration-500 bg-white ${
						isOpen ? 'shadow-none pb-0' : 'shadow-md pb-5'
					}`}
				>
					<nav className='flex items-center justify-between'>
						<Link
							href={'/'}
							className='text-2xl font-extrabold uppercase text-primary-blue z-[1000]'
						>
							УМЦ ВОА
						</Link>
						<label className='flex flex-col gap-2 w-8 z-[1000] cursor-pointer'>
							<input
								className='peer hidden'
								type='checkbox'
								onClick={toggleMorePanel}
							/>
							<div
								className={`rounded-2xl h-[3px] w-1/2 bg-black duration-300 origin-right ${
									isOpen
										? 'rotate-[225deg] -translate-x-[12px] -translate-y-[1px]'
										: ''
								}`}
							></div>
							<div
								className={`rounded-2xl h-[3px] w-full bg-black duration-300 ${
									isOpen ? '-rotate-45' : ''
								}`}
							></div>
							<div
								className={`rounded-2xl h-[3px] w-1/2 bg-black duration-300 place-self-end origin-left ${
									isOpen
										? 'rotate-[225deg] translate-x-[12px] translate-y-[1px]'
										: ''
								}`}
							></div>
						</label>
					</nav>
					{isOpen && (
						<div
							className={`fixed top-0 left-0 bg-sky h-full w-full ${
								isClosing ? 'animate-slide-down' : 'animate-slide-up'
							}`}
						>
							<div className='px-5 sm:px-10 pt-[100px] pb-7 z-[500]'>
								<ul className='flex flex-col gap-y-[1.25rem] max-w-[235px] pb-16'>
									{navItems.map((item, idx) => (
										<li onClick={menuClose} key={idx}>
											<Link
												className='text-[26px] leading-[31px] font-bold'
												href={item.link}
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>

								<div className='flex flex-col gap-y-[1.25rem]'>
									<div>
										<h1 className='text-xl font-semibold'>УМЦ ВОА</h1>
										<h2 className='text-sm font-normal'>Учебный центр</h2>
										<h2 className='text-sm font-normal'>
											“Всероссийское общество автомобилистов”
										</h2>
									</div>
									<div>
										<div className={`flex items-center gap-x-1.5 group mt-1.5`}>
											<Phone
												size={17}
												className={`text-primary-blue transition-transform duration-300`}
											/>
											<span className='text-base font-normal'>
												+7 (916) 370-72-02
											</span>
										</div>{' '}
										<div className={`flex items-start gap-x-1.5 group mt-1.5`}>
											<MapPin
												size={17}
												className={`text-primary-blue mt-[4.45px]`}
											/>
											<span className='text-base font-normal'>
												{' '}
												Балашиха, мкр.Железнодорожный, <br />
												ул. Пионерская д.33, пом. 13{' '}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</header>
	)
}
