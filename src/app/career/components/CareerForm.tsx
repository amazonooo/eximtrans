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
    email: '',
    phone: '',
    city: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
			'service_aixfu79',
			'template_i5vpd6d',
			{
				from_name: form.name,
				to_name: 'Garik',
				from_email: form.email,
				to_email: 'garikogannisyan.9@gmail.com',
			},
			'1wcWUQA2CLAzji-jz'
		)
    .then(() => {
      setLoading(false)
      alert('Thank you')
      setForm({
				name: '',
				surname: '',
				email: '',
				phone: '',
				city: '',
			})
    }, (error) => {
      setLoading(false)

      console.log(error)

      alert('Something went wrong')
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
					placeholder='Name'
					className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
				/>
				<input
					type='text'
					name='surname'
					value={form.surname}
					onChange={handleChange}
					placeholder='Surname'
					className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
				/>
				<input
					type='email'
					name='email'
					value={form.email}
					onChange={handleChange}
					placeholder='Email'
					className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
				/>
				<input
					type='tel'
					name='tel'
					value={form.phone}
					onChange={handleChange}
					placeholder='Phone'
					className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
				/>
				<input
					type='text'
					name='city'
					value={form.city}
					onChange={handleChange}
					placeholder='City'
					className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
				/>

				{/* <textarea
					rows={7}
					name='message'
					value={form.message}
					onChange={handleChange}
					placeholder='What do you want to say?'
				></textarea> */}
				<div className='mt-10 lg:mt-20 flex items-center justify-center font-medium'>
					<button
						type='submit'
						disabled={loading}
						className='bg-white cursor-pointer border border-primary text-center px-8 py-5 rounded-xl hover:bg-primary-red hover:text-white transition-colors duration-500 disabled:cursor-not-allowed disabled:bg-neutral-200'
					>
						Отправить анкету
					</button>
				</div>
			</form>
		</div>
	)
}