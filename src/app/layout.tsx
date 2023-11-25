import { ErrorAlert } from '@/features/ErrorAlert';
import { ServiceWorker } from '@/shared/ServiceWorker';
import { ReduxProvider } from '@/store/provider';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.scss';
import Providers from './providers';

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
                <Providers>
                    <ReduxProvider>
                        <ErrorAlert />
                        {children}
                        <Analytics />
                    </ReduxProvider>
                </Providers>
            </body>
        </html>
    );
}
