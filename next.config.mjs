/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/dashboard/posts',
                destination: '/dashboard/posts/list',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
