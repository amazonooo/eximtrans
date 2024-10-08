import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

interface SideMenuProps {
	items: string[]
	selectedItem: string
	onItemSelect: (item: string) => void
}

const SideMenu: React.FC<SideMenuProps> = ({
	items,
	selectedItem,
	onItemSelect,
}) => {
	return (
		<div
			className='w-full md:w-1/3 bg-primary text-black font-medium rounded-lg'
		>
			<ul>
				{items.map(item => (
					<li
						key={item}
						className={`p-4 text-sm sm:text-base md:text-lg cursor-pointer border-b hover:text-white/90 transition-colors duration-300 ${
							selectedItem === item ? 'text-white/90' : ''
						}`}
						onClick={() => onItemSelect(item)}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default SideMenu
