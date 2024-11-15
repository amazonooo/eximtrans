import { FC } from 'react'
import Contact from '@/components/ui/contact/Contact'

const RentalContact: FC = () => {
  return (
		<Contact
			key={1}
			title='Контакты'
			image='/ava.jpg'
			name='Белова Людмила Александровна'
			email='belova@abrail.ru'
			link='belova@abrail.ru'
			phone='+7 (495) 269-85-54'
		/>
	)
}

export default RentalContact