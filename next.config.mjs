/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		loader: 'akamai',
		path: '/_next',
		unoptimized: true,
	},
	trailingSlash: true,
}

export default nextConfig
