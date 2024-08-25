import Image from 'next/image'
import FooterContact from '../ui/footer/FooterContact'
import FooterItems from '../ui/footer/FooterItems'
import FooterLogo from '../ui/footer/FooterLogo'
import FooterInfo from '../ui/footer/FooterInfo'

const Footer = () => {
	return (
		<footer className='pt-8 pb-3 px-5 sm:px-10 border-t border-t-white/90 shadow-2xl'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
				<div className='flex flex-col items-start'>
					<FooterLogo />
				</div>
				<div className='flex flex-col items-start md:items-center'>
					<FooterItems
						links={[
							{ href: '/services', text: 'Услуги' },
							{ href: '/about', text: 'О компании' },
							// { href: '#', text: 'Пресс-центр' },
							// { href: '#', text: 'Архив новостей', isGray: true },
							// { href: '#', text: 'Фирменный стиль', isGray: true },
							// { href: '#', text: 'Медиабанк'},
							{ href: '/contacts', text: 'Контакты' },
							{ href: '/career', text: 'Карьера' },
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
