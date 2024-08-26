import Link from 'next/link'

interface FooterLinkProps {
	href: string
	text: string
	isGray?: boolean
}

const FooterLink = ({ href, text, isGray }: FooterLinkProps) => {
	return (
		<Link href={href} legacyBehavior>
			<a
				className='text-base hover:text-primary-red transition-colors duration-300'
			>
				{text}
			</a>
		</Link>
	)
}

export default FooterLink
