'use client'

import { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import emailjs from '@emailjs/browser'
import 'react-toastify/dist/ReactToastify.css'

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
		preferredCity: '',
		direction: '',
		specialization: '',
		resume: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		// Проверка на заполнение всех полей
		const isFormComplete = Object.values(form).every(
			field => field.trim() !== ''
		)
		if (!isFormComplete) {
			toast.error('Заполните все поля!')
			return
		}

		setLoading(true)

		const templateParams = {
			from_name: form.name,
			surname: form.surname,
			patronymic: form.patronymic,
			email: form.email,
			phone: form.phone,
			city: form.city,
			preferredCity: form.preferredCity,
			direction: form.direction,
			specialization: form.specialization,
			resume: form.resume,
		}

		emailjs
			.send(
				'service_aixfu79',
				'template_i5vpd6d',
				templateParams,
				'1wcWUQA2CLAzji-jz'
			)
			.then(
				response => {
					setLoading(false)
					toast.success('Анкета успешно отправлена!')
					setForm({
						name: '',
						surname: '',
						patronymic: '',
						email: '',
						phone: '',
						city: '',
						preferredCity: '',
						direction: '',
						specialization: '',
						resume: '',
					})
				},
				error => {
					setLoading(false)
					console.error('Ошибка при отправке:', error)
					toast.error('Что-то пошло не так')
				}
			)
	}

	return (
		<div>
			<ToastContainer
				position='top-center'
				autoClose={3000}
				limit={3}
				hideProgressBar={true}
				closeOnClick
				pauseOnHover={false}
			/>
			<form ref={formRef} onSubmit={handleSubmit} className=''>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10'>
					<input
						type='text'
						name='name'
						value={form.name}
						onChange={handleChange}
						className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
						placeholder='Имя'
					/>
					<input
						type='text'
						name='surname'
						value={form.surname}
						onChange={handleChange}
						className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
						placeholder='Фамилия'
					/>
					<input
						type='text'
						name='patronymic'
						value={form.patronymic}
						onChange={handleChange}
						className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
						placeholder='Отчество'
					/>
					<input
						type='email'
						name='email'
						value={form.email}
						onChange={handleChange}
						className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
						placeholder='Электронная почта'
					/>
					<input
						type='tel'
						name='phone'
						value={form.phone}
						onChange={handleChange}
						className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
						placeholder='Телефон'
					/>
					<input
						type='text'
						name='city'
						value={form.city}
						onChange={handleChange}
						className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
						placeholder='Город фактического проживания'
					/>
					<input
						type='text'
						name='preferredCity'
						value={form.preferredCity}
						onChange={handleChange}
						className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300 truncate'
						placeholder='Предпочтительный город присутствия Эксимтранс'
					/>
					<input
						type='text'
						name='direction'
						value={form.direction}
						onChange={handleChange}
						className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
						placeholder='Направление'
					/>
					<input
						type='text'
						name='specialization'
						value={form.specialization}
						onChange={handleChange}
						className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
						placeholder='Специализация'
					/>
					<input
						type='text'
						name='resume'
						value={form.resume}
						onChange={handleChange}
						className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
						placeholder='Резюме'
					/>
				</div>
				<div className='mt-10 lg:mt-20 font-medium w-full flex items-center justify-center'>
					<button
						type='submit'
						disabled={loading}
						className='bg-white cursor-pointer border border-primary-red text-center px-8 py-5 rounded-xl hover:bg-primary-red hover:text-white transition-colors duration-500 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:border-none'
					>
						Отправить анкету
					</button>
				</div>
			</form>
		</div>
	)
}
