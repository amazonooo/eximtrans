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
				<meta name='yandex-verification' content='9629f34907b5ed44' />
				<meta property='og:image' content='/logo.png' />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
				<meta title='Эксимтранс' />
				<meta
					name='description'
					content='Эксимтранс - грузоперевозки по РФ и в другие страны. Собственный вагонный парк. Круглосуточный диспетчерский центр.'
				/>
				<link rel='icon' type='image/x-icon' href='/favicon.ico' />
				<link rel="icon" href="/logo.png" />
				<link
					rel='icon'
					type='image/png'
					sizes='48x48'
					href='/favicon-48x48.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link rel='manifest' href='./site.webmanifest' />
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
