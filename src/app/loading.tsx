export default function loading() {
  return (
		<div className='h-screen w-screen fixed top-0 left-0 z-[100000] bg-[#F1F2F6]'>
			<div className='w-full h-full flex items-center justify-center'>
				<div className='flex flex-row gap-2'>
					<div className='w-4 h-4 rounded-full bg-primary animate-bounce'></div>
					<div className='w-4 h-4 rounded-full bg-primary-red animate-bounce [animation-delay:-.3s]'></div>
					<div className='w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]'></div>
				</div>
			</div>
		</div>
	)
}