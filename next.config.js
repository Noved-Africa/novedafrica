/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
	images: {
		domains: ["images.unsplash.com", "unsplash.com","images.pexels.com","www.pexels.com"],
	},
	compiler: {
    styledComponents: true,
},
}

module.exports = nextConfig
