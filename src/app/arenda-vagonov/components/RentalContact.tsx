import { FC } from 'react'
import Contact from '@/components/ui/contact/Contact'

const RentalContact: FC = () => {
  return (
		<Contact
			key={1}
			title='Контакты'
			image='/ava.jpg'
			name='Белова Людмила Александровна'
			link='ShaikoNaN@PGK.RU'
			phone='+7 (495) 269-85-54'
		/>
	)
}

export default RentalContact