import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
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
			</div>
		</section>
	)
}

export default CareerAnket