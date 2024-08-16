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
				className={`text-base ${
					isGray ? 'text-gray-500' : 'text-black'
				} hover:underline`}
			>
				{text}
			</a>
		</Link>
	)
}

export default FooterLink
