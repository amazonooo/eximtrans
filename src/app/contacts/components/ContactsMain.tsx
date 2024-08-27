'use client'

import React, { useState } from 'react';
import SideMenu from './side-menu/SideMenu'
import ContentArea from './content-area/ContentArea'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion'
import Link from 'next/link'


const ContactsMain: React.FC = () => {
    const menuItems = [
        'Автомобильные перевозки',
        'Железнодорожные перевозки',
        'Продажа запчастей и металлолома',
        'Ремонт вагонов',
        'Аренда вагонов',
    ];

    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

	const getContent = (item: string) => {
		switch (item) {
			case 'Автомобильные перевозки':
				return (
					<div className='flex flex-col md:flex-row'>
						<div className='mt-6 flex flex-col'>
							<h2 className='text-center text-lg lg:text-2xl xl:text-3xl'>
								Комаров Сергей Алексеевич
							</h2>
							<div className='flex justify-center mt-4 gap-x-5 flex-col xl:flex-row items-center'>
								<Link
									href={'/'}
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									+7 (926) 071-56-95
								</Link>
								<Link
									href={'/'}
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									sergey240980@mail.ru
								</Link>
							</div>
						</div>
					</div>
				)
			case 'Железнодорожные перевозки':
				return (
					<div className='flex flex-col md:flex-row gap-x-12 gap-y-5'>
						<div className='mt-6 flex flex-col'>
							<h2 className='text-center text-lg lg:text-2xl xl:text-3xl'>
								Тетнев Александр Евгеньевич
							</h2>
							<div className='flex justify-center mt-4 gap-x-5 flex-col xl:flex-row items-center'>
								<a
									href='tel:+74952698554'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									+7 (495) 269-85-54
								</a>
								<a
									href='mailto:tae@abrail.ru'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									tae@abrail.ru
								</a>
							</div>
						</div>
						<div className='mt-6 flex flex-col'>
							<h2 className='text-center text-lg lg:text-2xl xl:text-3xl'>
								Мамедов Али Бабашахович
							</h2>
							<div className='flex justify-center mt-4 gap-x-5 flex-col xl:flex-row items-center'>
								<a
									href='tel:+74952698554'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									+7 (495) 269-85-54
								</a>
								<a
									href='mailto:mamedov@abrail.ru'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									mamedov@abrail.ru{' '}
								</a>
							</div>
						</div>
					</div>
				)
			case 'Продажа запчастей и металлолома':
				return (
					<div className='flex flex-col md:flex-row gap-x-12 gap-y-5'>
						<div className='mt-6 flex flex-col'>
							<h2 className='text-center text-lg lg:text-2xl xl:text-3xl'>
								Тетнев Александр Евгеньевич
							</h2>
							<div className='flex justify-center mt-4 gap-x-5 flex-col xl:flex-row items-center'>
								<a
									href='tel:+74952698554'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									+7 (495) 269-85-54
								</a>
								<a
									href='mailto:tae@abrail.ru'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									tae@abrail.ru
								</a>
							</div>
						</div>
						{/* <div className='mt-6 flex flex-col'>
							<h2 className='text-center text-lg lg:text-2xl xl:text-3xl'>
								Мамедов Али Бабашахович
							</h2>
							<div className='flex justify-center mt-4 gap-x-5 flex-col xl:flex-row items-center'>
								<a
									href='tel:+74952698554'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									+7 (495) 269-85-54
								</a>
								<a
									href='mailto:mamedov@abrail.ru'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									mamedov@abrail.ru{' '}
								</a>
							</div>
						</div> */}
					</div>
				)
			case 'Ремонт вагонов':
				return (
					<div className='flex flex-col md:flex-row gap-x-12 gap-y-5'>
						{/* <div className='mt-6 flex flex-col'>
							<h2 className='text-center text-lg lg:text-2xl xl:text-3xl'>
								Тетнев Александр Евгеньевич
							</h2>
							<div className='flex justify-center mt-4 gap-x-5 flex-col xl:flex-row items-center'>
								<a
									href='tel:+74952698554'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									+7 (495) 269-85-54
								</a>
								<a
									href='mailto:tae@abrail.ru'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									tae@abrail.ru
								</a>
							</div>
						</div> */}
						<div className='mt-6 flex flex-col'>
							<h2 className='text-center text-lg lg:text-2xl xl:text-3xl'>
								Мамедов Али Бабашахович
							</h2>
							<div className='flex justify-center mt-4 gap-x-5 flex-col xl:flex-row items-center'>
								<a
									href='tel:+74952698554'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									+7 (495) 269-85-54
								</a>
								<a
									href='mailto:mamedov@abrail.ru'
									className='text-primary-red hover:underline underline-offset-2 text-lg'
								>
									mamedov@abrail.ru{' '}
								</a>
							</div>
						</div>
					</div>
				)
			case 'Аренда вагонов':
				return (
					<div className='mt-6 flex flex-col'>
						<h2 className='text-center text-lg lg:text-2xl xl:text-3xl'>
							Белова Людмила Александровна
						</h2>
						<div className='flex justify-center mt-4 gap-x-5 flex-col xl:flex-row items-center'>
							<a
								href='tel:+74952698554'
								className='text-primary-red hover:underline underline-offset-2 text-lg'
							>
								+7 (495) 269-85-54
							</a>
							<a
								href='mailto:tae@abrail.ru'
								className='text-primary-red hover:underline underline-offset-2 text-lg'
							>
								tae@abrail.ru
							</a>
						</div>
					</div>
				)
			default:
				return <p>Выберите пункт меню</p>
		}
	}

    return (
			<motion.div
				variants={fadeIn('right', 'tween', 0.3, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				className='relative flex flex-col md:flex-row w-full mb-12 md:mb-24 bg-white rounded-lg mt-8 lg:mt-0'
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
