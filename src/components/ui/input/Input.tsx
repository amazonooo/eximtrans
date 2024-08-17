import React from 'react'
import { FC } from 'react'

interface InputProps {
  placeholder: string
  type: string
}

const Input: FC<InputProps> = ({ placeholder, type }) => {
  return (
		<input
			className='focus:outline-primary-red outline-none rounded-lg w-full p-3 min-w-[300px] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[360px] xl:min-w-[560px] transition-all duration-300'
			placeholder={placeholder}
			type={type}
		/>
	)
}

export default Input