const withPWAInit = require('next-pwa');

const isDev = process.env.NODE_ENV !== 'production';

const withPWA = withPWAInit({
    dest: 'public',
    disable: isDev,
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
    },
    experimental: {
        appDir: true,
    },
};

module.exports = withPWA(nextConfig);
