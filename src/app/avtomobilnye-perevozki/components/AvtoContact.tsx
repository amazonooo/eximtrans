import Contact from '@/components/ui/contact/Contact'
import { FC } from 'react'

const AvtoContact: FC = () => {
  return (
		<Contact
			title='Присылайте ваши предложения по предоставлению подвижного состава в аренду по указанным ниже контактам'
			name='Комаров Сергей Алексеевич'
			image='/ava-2.jpg'
			link='sergey240980@mail.ru'
			email='sergey240980@mail.ru'
			phone='+7 (926) 071-56-95'
			image2='/'
			link2=''
		/>
	)
}

export default AvtoContact