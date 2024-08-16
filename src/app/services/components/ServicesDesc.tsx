import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'

const ServicesDesc: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<Heading text='Почему выбирают нас?' />
			<div className='pt-12 md:pt-16'>
				<p className='text-center md:text-left text-lg md:text-xl'>
					<span className='text-primary-red'>Эксимтранс</span> обеспечивает
					своим клиентам широкий спектр транспортных решений по перевозке грузов
					железнодорожным и грузовым транспортом Большой опыт работы дает{' '}
					<span className='text-primary-red'>Эксимтрансу</span> широкие возможности эффективно решать
					долгосрочные задачи клиентов по достижению стратегических целей
				</p>
			</div>
		</section>
	)
}

export default ServicesDesc