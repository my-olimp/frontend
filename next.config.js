const withPWAInit = require('next-pwa');

const isDev = process.env.NODE_ENV !== 'production';

const withPWA = withPWAInit({
    dest: 'public',
    disable: isDev,
    fallbacks: {
        image: '/public/materials/offlinePage.svg',
        document: '/src/app/_offline.tsx',  // if you want to fallback to a custom    page other than /_offline
    },
    runtimeCaching: [
        {
            urlPattern: /\.(?:png|jpg|jpeg|gif|svg|webp)$/,
            handler: 'NetworkOnly',
        },
    ],

    exclude: [
        ({ asset }) => {
            if (
                asset.name.startsWith('server/') ||
                asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/)
            ) {
                return true;
            }
            return isDev && !asset.name.startsWith('static/runtime/');
        },
    ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['storage.yandexcloud.net'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.yandexcloud.net',
                port: '',
                pathname: 'myolimp/user/avatar/**.webp',
            },
        ],
    },
    experimental: {
        appDir: true,
    },
};

module.exports = withPWA(nextConfig);
