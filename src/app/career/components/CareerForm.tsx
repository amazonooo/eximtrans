'use client'

import Input from '@/components/ui/input/Input'
import { inputData } from '@/components/ui/input/inputData'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { slideIn } from '@/utils/motion'

// 1wcWUQA2CLAzji-jz
// template_i5vpd6d
// service_aixfu79

export default function CareerForm() {  
  const formRef = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
		name: '',
		surname: '',
		patronymic: '',
		email: '',
		phone: '',
		city: '',
		cityEmployment: '',
		preferredCity: '',
		direction: '',
		specialization: '',
		resume: '',
	})

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)

		const templateParams = {
			from_name: form.name,
			surname: form.surname,
			patronymic: form.patronymic,
			email: form.email,
			phone: form.phone,
			city: form.city,
			cityEmployment: form.cityEmployment,
			preferredCity: form.preferredCity,
			direction: form.direction,
			specialization: form.specialization,
			resume: form.resume,
		}

    emailjs.send(
			'service_aixfu79',
			'template_i5vpd6d',
			templateParams,
			'1wcWUQA2CLAzji-jz'
		)
    .then(
      (response) => {
				setLoading(false);
				alert('Форма успешно отправлена!');
				setForm({
					name: '',
					surname: '',
					patronymic: '',
					email: '',
					phone: '',
					city: '',
					cityEmployment: '',
					preferredCity: '',
					direction: '',
					specialization: '',
					resume: '',
				});
    	}, (error) => {
      setLoading(false)
			console.error('Ошибка при отправке:', error)
			alert('Произошла ошибка при отправке формы.')
    })
  }

  // async function handleSubmit(e: any) {
  //   e.preventDefault()
  //   setLoading(true)

  //   const data = {
  //     name: String(e.target.name.value),
  //     email: String(e.target.email.value),
  //     message: String(e.target.message.value),
  //   }

  //   console.log(data)
  //   const response = await fetch('/api/sendEmail', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
    
  //   if (response.ok) {
  //     console.log('Message sent successfully')
  //     setLoading(false)

  //     e.target.name.value = ''
  //     e.target.email.value = ''
  //     e.target.message.value = ''
  //   }
  //   if (!response.ok) {
  //     console.log('Error sending message')
  //     setLoading(false)
  //   }
  // }

  return (
		<div>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10'
			>
				<input
					type='text'
					name='name'
					value={form.name}
					onChange={handleChange}
					placeholder='Имя'
				/>
				<input
					type='text'
					name='surname'
					value={form.surname}
					onChange={handleChange}
					placeholder='Фамилия'
				/>
				<input
					type='text'
					name='patronymic'
					value={form.patronymic}
					onChange={handleChange}
					placeholder='Отчество'
				/>
				<input
					type='email'
					name='email'
					value={form.email}
					onChange={handleChange}
					placeholder='Электронная почта'
				/>
				<input
					type='tel'
					name='phone'
					value={form.phone}
					onChange={handleChange}
					placeholder='Телефон'
				/>
				<input
					type='text'
					name='city'
					value={form.city}
					onChange={handleChange}
					placeholder='Город фактического проживания'
				/>
				<input
					type='text'
					name='cityEmployment'
					value={form.cityEmployment}
					onChange={handleChange}
					placeholder='Город фактического проживания (ещё раз)'
				/>
				<input
					type='text'
					name='preferredCity'
					value={form.preferredCity}
					onChange={handleChange}
					placeholder='Предпочтительный город присутствия Экспимтранс'
				/>
				<input
					type='text'
					name='direction'
					value={form.direction}
					onChange={handleChange}
					placeholder='Направление'
				/>
				<input
					type='text'
					name='specialization'
					value={form.specialization}
					onChange={handleChange}
					placeholder='Специализация'
				/>
				<textarea
					name='resume'
					value={form.resume}
					onChange={handleChange}
					placeholder='Резюме'
				></textarea>

			</form>
				<button type='submit' className='text-center w-fit' disabled={loading}>
					{loading ? 'Отправка...' : 'Отправить анкету'}
				</button>
		</div>
	)
}