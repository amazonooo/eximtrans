import Contact from '@/components/ui/contact/Contact'
import { FC } from 'react'

const RemontContact: FC = () => {
  return (
		<Contact
			title='Контакты'
			name='ТР Мамедов Али Бабашохович'
			phone='+7 (495) 269-85-54'
			email='mamedov@abrail.ru'
			link='mamedov@abrail.ru'
			image='/ava-2.jpg'
		/>
	)
}

export default RemontContact