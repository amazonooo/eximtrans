'use client'

import Aos from 'aos'
import { FC, useEffect } from 'react'

const Services: FC = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section className='h-[1000px]'>
      <h1 data-aos='fade-left' className='text-center text-2xl md:text-4xl'>Наши услуги</h1>
      
    </section>
  )
}

export default Services