/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  headers:  async() => {
    return [
      {
        source: '/(.*)', //Aplica para todas las rutas
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV ? `default-src 'self'; script-src 'self' 'unsafe-eval'; connect-src 'self' ${process.env.NEXT_PUBLIC_SERVER_HOST} ${process.env.NEXT_PUBLIC_SERVER_HOST_SOCKET} img-src 'self' data:; style-src 'self' 'unsafe-inline';` : `default-src 'self'; script-src 'self'; connect-src 'self' ${process.env.NEXT_PUBLIC_SERVER_HOST} ${process.env.NEXT_PUBLIC_SERVER_HOST_SOCKET}; img-src 'self' data:; style-src 'self' 'unsafe-inline';`,
          },
        
        ]
      }
    ]
  }
};

export default nextConfig;
