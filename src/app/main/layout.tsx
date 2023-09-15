'use client';
import { UnathorizedPopup } from '@/features/UnathorizedPopup';
import { useAppSelector } from '@/hooks/useAppSelector';
import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/header';

export default function Layout({ children }) {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <>
            <Header />
            <RefreshTokenComponent />
            <main style={{ padding: '48px 0' }}>
                {!user && <UnathorizedPopup />}
                {children}
            </main>
            <Footer />
        </>
    );
}
