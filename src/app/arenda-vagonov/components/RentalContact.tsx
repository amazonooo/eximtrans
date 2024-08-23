import { FC } from 'react'
import Contact from '@/components/ui/contact/Contact'

const RentalContact: FC = () => {
  return (
		<Contact
			key={1}
			title='Присылайте ваши предложения по предоставлению подвижного состава в аренду по указанным ниже контактам'
			image='/ava.jpg'
			name='Белова Людмила Александровна'
			link='ShaikoNaN@PGK.RU'
			email='ShaikoNaN@PGK.RU'
			phone='+7 (495) 269-85-54'
			image2='/'
			link2=''
		/>
	)
}

export default RentalContact