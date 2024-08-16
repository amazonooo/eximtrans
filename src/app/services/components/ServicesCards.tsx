import { compData } from '@/components/ui/comp-desc/compData'
import CompDescCard from '@/components/ui/comp-desc/CompDescCard'
import ServicesCard from '@/components/ui/services/ServicesCard'
import { servicesData } from '@/components/ui/services/servicesData'
import { FC } from 'react'

const ServicesCards: FC = () => {
  return (
		<section className='flex flex-col items-center justify-center mb-24 md:mb-36'>
			<div className=''>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4'>
					{servicesData.map(card => (
						<ServicesCard
							key={card.id}
							id={card.href}
							title={card.title}
							image={card.image}
							href={card.href}
							anim={card.anim}
						/>
					))}
					{/* <div className='mt-10 flex items-center justify-center font-medium'>
						<button className='bg-white text-center px-8 py-5 rounded-xl hover:bg-fuchsia-950 hover:text-white transition-colors duration-500 border border-fuchsia-950 hover:border-transparent'>
							Все услуги
						</button>
					</div> */}
				</div>
			</div>
		</section>
	)
}

export default ServicesCards