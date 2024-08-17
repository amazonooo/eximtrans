'use client'

import Heading from '@/components/ui/heading/Heading'
import { FC, useRef } from 'react'
import { inputData } from '@/components/ui/input/inputData'
import Input from '@/components/ui/input/Input'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'

const CareerAnket: FC = () => {
  const notify = () => toast('Wow so easy!')

  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<Heading text='Мы можем помочь с поиском' className='mb-5' />
			<h2 className='text-center text-lg md:text-xl max-w-[600px]'>
				Заполни анкету, и мы постараемся подобрать вакансию в{' '}
				<span className='text-primary-red'>Эксимтранс</span> именно для тебя
			</h2>
			<div className='pt-12 md:pt-16'>
				<div className='w-full h-auto rounded-lg'>
					<div className=''>
						<form className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10'>
							{inputData.map(inp => (
								<Input
									key={inp.id}
									placeholder={inp.placeholder}
									type={inp.type}
								/>
							))}
						</form>
					</div>
				</div>
				{/* <div className='mt-5 lg:mt-10 flex w-full items-center justify-end'>
					<input type='checkbox' className='w-7 h-7' />
					<h2 className='max-w-[450px]'>
						Подтверждаю согласие с Политикой обработки персональных данных
					</h2>
				</div> */}
				<div className='mt-10 lg:mt-20 flex items-center justify-center font-medium'>
					<button
						onClick={notify}
						className='bg-white cursor-pointer border border-primary text-center px-8 py-5 rounded-xl hover:bg-primary-red hover:text-white transition-colors duration-500'
					>
						Отправить анкету
					</button>
				</div>
			</div>
		</section>
	)
}

export default CareerAnket