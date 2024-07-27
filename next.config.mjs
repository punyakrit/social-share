import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve('.env.local') });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'image3.jdomni.in',
      'image2.jdomni.in',
      'www.svgrepo.com',
      'picsum.photos',
      'images.unsplash.com',
      'sharehub.s3.amazonaws.com',
      'avatars.githubusercontent.com'
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    BUCKET: process.env.BUCKET,
    S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
  },
};

export default nextConfig;
