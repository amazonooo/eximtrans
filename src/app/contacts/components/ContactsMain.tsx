'use client'

import React, { useState } from 'react';
import SideMenu from './side-menu/SideMenu'
import ContentArea from './content-area/ContentArea'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion'


const ContactsMain: React.FC = () => {
    const menuItems = [
        'Промывка цистерн на ППС',
        'Ремонт вагонов',
        'Партнерам',
        'Пресс-центр',
        'По вопросам закупок',
        'По антикоррупционной политике'
    ];

    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

	const getContent = (item: string) => {
		switch (item) {
			case 'Промывка цистерн на ППС':
				return (
					<div>
						<p>Контент для промывки цистерн на ППС</p>
						<img
							src='/images/cistern.jpg'
							alt='Промывка цистерн'
							className='mt-4'
						/>
					</div>
				)
			case 'Ремонт вагонов':
				return (
					<div>
						<p>Контент для ремонта вагонов</p>
						<img src='/images/vagon.jpg' alt='Ремонт вагонов' className='mt-4' />
					</div>
				)
			case 'Партнерам':
				return (
					<div>
						<p>Контент для партнеров</p>
						<ul className='list-disc pl-5'>
							<li>Партнер 1</li>
							<li>Партнер 2</li>
							<li>Партнер 3</li>
						</ul>
					</div>
				)
			// Добавьте остальные случаи
			default:
				return <p>Выберите пункт меню</p>
		}
	}

    return (
			<motion.div
				variants={fadeIn('down', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.4 }}
				className='relative flex w-full mb-12 md:mb-24 bg-white rounded-lg'
			>
				<SideMenu
					items={menuItems}
					selectedItem={selectedItem}
					onItemSelect={setSelectedItem}
				/>
				<ContentArea content={getContent(selectedItem)} />
			</motion.div>
		)
};

export default ContactsMain
