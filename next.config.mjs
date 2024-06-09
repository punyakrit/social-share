/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'image3.jdomni.in', 'image2.jdomni.in', 'www.svgrepo.com', 'picsum.photos', 'images.unsplash.com', 'sharehub.s3.amazonaws.com','avatars.githubusercontent.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
