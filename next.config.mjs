/** @type {import('next').NextConfig} */
import CURRENT_HOST from "./lib/getHost.js";

const nextConfig = {
  reactStrictMode: true,
  headers:  async() => {
    return [
      {
        source: '/(.*)', //Aplica para todas las rutas
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV ? `default-src 'self'; script-src 'self' 'unsafe-eval'; connect-src 'self' ${process.env.NEXT_PUBLIC_HOST_DEV} ${process.env.NEXT_PUBLIC_HOST_SOCKET} img-src 'self' data:; style-src 'self' 'unsafe-inline';` : `default-src 'self'; script-src 'self'; connect-src 'self' ${process.env.NEXT_PUBLIC_HOST_DEV} ${process.env.NEXT_PUBLIC_HOST_SOCKET}; img-src 'self' data:; style-src 'self' 'unsafe-inline';`,
          },
        
        ]
      }
    ]
  }
};

export default nextConfig;
