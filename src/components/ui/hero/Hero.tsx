'use client'

import { FC, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero: FC = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
		<div className='flex flex-col gap-96 items-center justify-center px-44 mt-16 lg:mt-40 w-full'>
      <div className='w-full h-44 bg-white p-2 border border-black'>
        fdsf
      </div>
		</div>
	)
}

export default Hero