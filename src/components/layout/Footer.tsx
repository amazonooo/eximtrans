import Image from 'next/image'
import FooterContact from '../ui/footer/FooterContact'
import FooterItems from '../ui/footer/FooterItems'
import FooterLogo from '../ui/footer/FooterLogo'
import FooterInfo from '../ui/footer/FooterInfo'

const Footer = () => {
	return (
		<footer className='pt-8 pb-3 px-5 sm:px-10'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
				<div className='flex flex-col items-center md:items-start'>
					<FooterLogo />
				</div>
				<div className='flex flex-col items-center'>
					<FooterItems
						title='О компании'
						links={[
							{ href: '#', text: 'Услуги' },
							{ href: '#', text: 'Пресс-центр' },
							{ href: '#', text: 'Архив новостей', isGray: true },
							{ href: '#', text: 'Фирменный стиль', isGray: true },
							{ href: '#', text: 'Медиабанк'},
							{ href: '#', text: 'ПГК Диджитал' },
							{ href: '#', text: 'Устойчивое развитие' },
						]}
					/>
				</div>
				<div className='flex flex-col items-center md:items-center'>
					<FooterContact />
				</div>
			</div>
			<div className='mt-12 text-center text-sm text-gray-500'>
					<FooterInfo />
			</div>
		</footer>
	)
}

export default Footer
