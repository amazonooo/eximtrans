import type { Metadata } from "next";
import { Inter, Open_Sans, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { navButtons, navItems } from '@/components/ui/header/navItems'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'

export const metadata: Metadata = {
	metadataBase: new URL('https://eximtrans.'),
	alternates: {
		canonical: new URL('https://eximtrans.'),
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
		images: 'https://eximrtans./images/og-image.jpg',
		type: 'website',
		locale: 'en_US',
		url: 'https://eximrtans.ru',
		siteName: 'Эксимтранс',
	},
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
			<body className={`bg-[#F1F2F6] overflow-x-hidden`}>
				<ScrollToTop />
				<Header navItems={navItems} navButtons={navButtons} />
				{children}
				<Footer />
			</body>
		</html>
	)
}
