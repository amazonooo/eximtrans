'use client'

import Image from 'next/image'
import FooterContact from '../ui/footer/FooterContact'
import FooterItems from '../ui/footer/FooterItems'
import FooterLogo from '../ui/footer/FooterLogo'
import FooterInfo from '../ui/footer/FooterInfo'
import { usePathname } from 'next/navigation'

const Footer = () => {
	const pathname = usePathname()

	const isNotFoundPage =
		pathname !== '/' &&
		pathname !== '/about/index.html' &&
		pathname !== 'arenda-vagonov/index.html' &&
		pathname !== '/avtomobilnye-perevozki/index.html' &&
		pathname !== '/career/index.html' &&
		pathname !== '/contacts/index.html' &&
		pathname !== '/prodazha-metal/index.html' &&
		pathname !== '/services/index.html' &&
		pathname !== '/zheleznodorozhnye-perevozki/index.html'

	if (isNotFoundPage) return null

	return (
		<footer className='pt-8 pb-3 px-5 sm:px-10 border-t border-t-white/90 shadow-2xl'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
				<div className='flex flex-col items-start'>
					<FooterLogo />
				</div>
				<div className='flex flex-col items-start md:items-center'>
					<FooterItems
						links={[
							{ href: '/services/index.html', text: 'Услуги' },
							{ href: '/about/index.html', text: 'О компании' },
							{ href: '/contacts/index.html', text: 'Контакты' },
							{ href: '/career/index.html', text: 'Карьера' },
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
