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
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{metadata.title}</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/icon.ico" sizes="any" />
            </head>
            <body>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
