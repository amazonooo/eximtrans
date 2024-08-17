'use client'

import { useState } from 'react'

export default function CareerForm() {  
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)

    const data = {
      name: String(e.target.name.value),
      email: String(e.target.email.value),
      message: String(e.target.message.value),
    }

    console.log(data)
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    if (response.ok) {
      console.log('Message sent successfully')
      setLoading(false)

      e.target.name.value = ''
      e.target.email.value = ''
      e.target.message.value = ''
    }
    if (!response.ok) {
      console.log('Error sending message')
      setLoading(false)
    }
  }

  return (
		<div>
			<form
				onSubmit={handleSubmit}
				className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10'
			>
				{/* {inputData.map(inp => (
								<Input
									key={inp.id}
									placeholder={inp.placeholder}
									type={inp.type}
								/>
							))} */}
				<label htmlFor='name' className='text-black'>Name</label>
				<input type='text' required autoComplete='off' id='name' />
				<label htmlFor='email' className='text-black'>Email</label>
				<input type='email' required autoComplete='off' id='email' />
				<label htmlFor='message' className='text-black'>Message</label>
				<textarea name='message' id='message'></textarea>
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