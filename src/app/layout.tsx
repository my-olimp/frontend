import { ReactNode } from 'react';
import { ReduxProvider } from '@/store/provider';

export const metadata = {
    title: 'MyOlimp',
    description:
        'MyOlimp - платформа для  для организации соревнований в сфере информационных технологий, олимпиад и проектов с социальной значимостью, ориентированных как на новичков, так и на опытных специалистов.',
    icons: {
        icon: ['/icon.ico?v=4'],
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <head>
                <title>{metadata.title}</title>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#84ADF8" />
            </head>
            <body>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
