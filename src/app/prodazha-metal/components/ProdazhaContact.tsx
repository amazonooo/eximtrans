import Contact from '@/components/ui/contact/Contact'
import { FC } from 'react'

const ProdazhaContact: FC = () => {
	return (
		<Contact
			title='Контакты'
			name='ДР Тетнев Александр Евгеньевич'
			phone='+7 (495) 269-85-54'
			email='mamedov@abrail.ru'
			link='tae@abrail.ru'
			image='/ava-2.jpg'
		/>
	)
}

export default ProdazhaContact
