import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='w-full h-screen bg-primary-blue flex flex-col items-center justify-center'>
			<div className='flex flex-col items-center'>
				<h1 className='text-8xl lg:text-[200px] xl:text-[350px] font-bold mb-4 lg:mb-8 text-fuchsia-950'>
					404
				</h1>
				<h2 className='text-base xl:text-xl font-medium mb-[60px] lg:mb-7 text-fuchsia-950'>
					Эта страница не найдена
				</h2>
			</div>
			<Link
				href={'/'}
				className='bg-white cursor-pointer text-center px-8 py-5 rounded-xl hover:bg-fuchsia-950 hover:text-white transition-colors duration-500 border border-fuchsia-950 hover:border-transparent'
			>
				На главную
			</Link>
		</div>
	)
}
