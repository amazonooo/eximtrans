import { FC } from 'react'

const CareerText: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36 px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
			<div className=''>
				<p className='text-center md:text-left text-lg md:text-xl'>
					Сотрудники <span className='text-primary-red'>«Эксимтранс»</span> —
					самый значимый ресурс компании. Мы ценим профессионализм, стремление к
					достижению результата, готовность работать в команде и брать на себя
					ответственность. Мы — это не только интересная работа и нестандартные
					задачи, но и сплоченный коллектив из людей, объединенных общими идеями
					и увлечениями. Присоединяйтесь к команде опытных профессионалов
					<span className='text-primary-red'>«Эксимтранс»</span>!
				</p>
			</div>
		</section>
	)
}

export default CareerText