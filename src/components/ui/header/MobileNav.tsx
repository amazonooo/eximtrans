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
					className='relative bg-primary rounded-full cursor-pointer w-14 h-14 flex items-center justify-center group'
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{/* {isOpen ? <X size={35} /> : <Menu size={35} />} */}
					<div className='flex items-center justify-center flex-col'>
						<div
							className={`-translate-y-1 w-7 h-0.5 bg-black group-hover:-translate-y-0 group-hover:rotate-45 transition-all duration-400 ${isOpen ? 'rotate-45 -translate-y-0' : ''}`}
						></div>
						<div className={`w-7 h-0.5 bg-black group-hover:invisible ${isOpen ? 'invisible' : 'visible'}`}></div>
						<div
							className={`translate-y-1 w-7 h-0.5 bg-black group-hover:translate-y-0 group-hover:-rotate-45 transition-all duration-400 ${isOpen ? 'translate-y-0 -rotate-45' : ''}`}
						></div>
					</div>
				</div>
			</nav>
			<div>{isOpen && <MobileNavItems />}</div>
		</header>
	)
}

export default MobileNav