import { cn } from '@/utils/cn'
import { FC } from 'react'

interface IHeading {
  text: string
  className?: string
}

const Heading: FC<IHeading> = ({ text, className }) => {
  return (
		<h1 className={cn('w-full text-center text-2xl md:text-5xl text-black font-semibold', className)}>
			{text}
		</h1>
	)
}

export default Heading