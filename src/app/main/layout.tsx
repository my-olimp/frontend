'use client';
import { UnathorizedPopup } from '@/features/UnathorizedPopup';
import { useAppSelector } from '@/hooks/useAppSelector';
import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/header';
<<<<<<< HEAD
import styles from '@/app/main/calendar/index.module.scss';
=======
import { useEffect, useState } from 'react';
>>>>>>> 50864cfe0902d828f34e754098e74bac913d8b51

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { user } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [user]);

    return (
        <>
            <Header />
            <RefreshTokenComponent />
<<<<<<< HEAD
=======
            <main style={{ padding: '48px 0' }}>
                {isOpen && <UnathorizedPopup isOpen={isOpen}/>}
>>>>>>> 50864cfe0902d828f34e754098e74bac913d8b51
                {children}
            <Footer />
        </>
    );
}
