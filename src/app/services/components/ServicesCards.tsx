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
				</div>
			</div>
		</section>
	)
}

export default ServicesCards