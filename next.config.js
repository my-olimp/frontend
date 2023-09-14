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
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Disable image caching
        config.module.rules.forEach((rule) => {
            if (rule.test && rule.test.toString().includes('png|jpe?g|gif|svg|webp')) {
                rule.use = [
                    {
                        loader: rule.use[0].loader,
                        options: {
                            cache: false,
                        },
                    },
                ];
            }
        });

        return config;
    },
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
