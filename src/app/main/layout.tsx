'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/header';
import { useEffect, useState } from 'react';

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
            <main style={{ padding: '48px 0' }}>
                {/* {isOpen && <UnathorizedPopup isOpen={isOpen}/>} */}
                {children}
            <Footer />
        </>
    );
}
