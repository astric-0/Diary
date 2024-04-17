/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		base_local_api: "https://localhost:5000",
		image_api: "http://localhost:3001/images",
	},
	devlopment: {
		env: {
			base_local_api: "https://localhost:5000",
			image_api: "http://localhost:3001/images",
		},
	},
};

export default nextConfig;
