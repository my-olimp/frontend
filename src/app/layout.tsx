import { ReactNode } from 'react';
import { ReduxProvider } from '@/store/provider';
import './globals.scss';
import { ServiceWorker } from '@/shared/ServiceWorker';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MyOlimp',
    description:
        'MyOlimp - платформа для для организации соревнований в сфере информационных технологий, олимпиад и проектов с социальной значимостью, ориентированных как на новичков, так и на опытных специалистов.',
    manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <ServiceWorker />
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
