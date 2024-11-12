/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		loader: 'akamai',
		path: '/_next',
		unoptimized: true,
	},
	trailingSlash: true,
}

export default nextConfig
