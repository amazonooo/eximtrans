import { FC } from 'react'

interface ICompDescCard {
  id?: string
  title: string
  count: string
  desc: string
}

const CompDescCard: FC<ICompDescCard> = ({ id, title, count, desc }) => {
	return (
		<article className='bg-white rounded-lg h-[356px] w-[300px] sm:w-[450px] md:w-[230px] lg:w-[320px] xl:w-[500px] group shadow'>
			<div className='flex flex-col justify-between h-full'>
				<h2>{title}</h2>
				<div className=''>
					<div>{count}</div>
					<div>{desc}</div>
				</div>
			</div>
		</article>
	)
}

export default CompDescCard