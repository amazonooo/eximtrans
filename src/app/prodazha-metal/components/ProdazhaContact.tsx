import Contact from '@/components/ui/contact/Contact'
import { FC } from 'react'

const ProdazhaContact: FC = () => {
	return (
		<Contact
			title='Контакты'
			name='Дмитрий Шелякин'
			phone='+7 (999) 545-05-35'
			email='shelyakin@abrail.ru'
			link='shelyakin@abrail.ru'
			image='/ava-2.jpg'
		/>
	)
}

export default ProdazhaContact
