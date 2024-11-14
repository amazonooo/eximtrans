import type { Metadata } from "next";
import { Inter, Open_Sans, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { navButtons, navItems } from '@/components/ui/header/navItems'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import NewHeader from '@/components/layout/NewHeader'

export const metadata: Metadata = {
	metadataBase: new URL('https://exim-trans.ru'),
	alternates: {
		canonical: new URL('https://exim-trans.ru'),
	},
	title: {
		default: 'Эксимтранс',
		template: '%s | Эксимтранс',
	},
	description:
		'Эксимтранс - грузоперевозки по РФ и в другие страны. Собственный вагонный парк. Круглосуточный диспетчерский центр.',
	openGraph: {
		title: 'Эксимтранс',
		description:
			'Эксимтранс - грузоперевозки по РФ и в другие страны. Собственный вагонный парк. Круглосуточный диспетчерский центр.',
		images: 'https://exim-trans.ru/images/og-image.jpg',
		type: 'website',
		locale: 'en_US',
		url: 'https://exim-trans.ru',
		siteName: 'Эксимтранс',
	},
	keywords: [
		'Эксимтранс',
		'эксимтранс',
		'Eximtrans',
		'eximtrans',
		'Перевозка грузов',
		'перевозка грузов',
		'Железнодорожная перевозка',
		'железнодорожная перевозка',
		'эксим-транс',
		'exim-trans',
		'ремонт вагонов',
		'продажа металла',
		'аренда вагонов',
		'Ремонт вагонов',
		'Продажа металла',
		'Аренда вагонов',
	],
	creator: 'amazonooo',
	robots: {
		index: true,
		follow: true,
	},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en'>
			<head>
				<meta
					name='google-site-verification'
					content='1wfPzNCxpgrQFWUrUl82UIcvAZbCKvmNhIDCjPoibcU'
				/>
			</head>
			<body className={`bg-[#F1F2F6] overflow-x-hidden`}>
				<ScrollToTop />
				<NewHeader />
				{children}
				<Footer />
			</body>
		</html>
	)
}
