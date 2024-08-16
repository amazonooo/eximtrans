import React from 'react'

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
		<div className='w-1/3 bg-primary-red/70 text-white rounded-lg'>
			<ul>
				{items.map(item => (
					<li
						key={item}
						className={`p-4 cursor-pointer border-b rounded-lg border-b-gray-200 ${
							selectedItem === item ? 'bg-black/20' : ''
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
