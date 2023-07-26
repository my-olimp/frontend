import { ReduxProvider } from '@/store/provider';
import './globals.scss';
import { ReactNode } from 'react';

export const metadata = {
    title: 'MyOlimp',
    description: '...',
    icons: {
        icon: ['/icon.ico?v=4'],
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <link rel="icon" href="/icon.ico" sizes="any" />
            <body>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
