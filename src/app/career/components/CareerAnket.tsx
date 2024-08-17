import Heading from '@/components/ui/heading/Heading'
import { FC, useRef } from 'react'
import { inputData } from '@/components/ui/input/inputData'
import Input from '@/components/ui/input/Input'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import CareerForm from './CareerForm'

const CareerAnket: FC = () => {
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
						<CareerForm />
					</div>
				</div>
				{/* <div className='mt-5 lg:mt-10 flex w-full items-center justify-end'>
					<input type='checkbox' className='w-7 h-7' />
					<h2 className='max-w-[450px]'>
						Подтверждаю согласие с Политикой обработки персональных данных
					</h2>
				</div> */}
			</div>
		</section>
	)
}

export default CareerAnket