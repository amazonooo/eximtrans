'use client'

import { Menu, X } from 'lucide-react'
import { FC, useState } from 'react'
import MobileNavItems from './MobileNavItems'

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
		<header className='pt-5 px-5 sm:px-10 h-full'>
			<nav className='flex items-center justify-between h-full'>
				<div className='text-2xl'>LOGO</div>
				<div
					onClick={() => setIsOpen(!isOpen)}
					className='flex items-center justify-center group bg-[#930D40] rounded-full w-12 h-12'
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{/* {isOpen ? <X size={35} /> : <Menu size={35} />} */}
					<div className='flex flex-col items-center justify-center'>
						<div
							className={`-translate-y-0.5 w-7 h-0.5 bg-white transition-all duration-400 ${
								isOpen ? 'rotate-45 translate-y-[1.5px]' : ''
							}`}
						></div>
						<div
							className={`w-7 h-0.5 bg-white transition-all duration-400 ${isOpen ? 'hidden' : ''}`}
						></div>
						<div
							className={`translate-y-0.5 w-7 h-0.5 bg-white transition-all duration-400 ${
								isOpen ? '-rotate-45 -translate-y-[1.5px]' : ''
							}`}
						></div>
					</div>
				</div>
			</nav>
			<div>{isOpen && <MobileNavItems />}</div>
		</header>
	)
}

export default MobileNav