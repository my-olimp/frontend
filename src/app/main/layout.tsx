'use client';
import { UnathorizedPopup } from '@/features/UnathorizedPopup';
import { useAppSelector } from '@/hooks/useAppSelector';
import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/header';
import styles from '@/app/main/calendar/index.module.scss';

export default function Layout({ children }) {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <>
            <Header />
            <RefreshTokenComponent />
                {children}
            <Footer />
        </>
    );
}
