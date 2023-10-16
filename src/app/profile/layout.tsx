'use client';
import { UnathorizedPopup } from '@/features/UnathorizedPopup';
import { useAppSelector } from '@/hooks/useAppSelector';
import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { Header } from '@/widgets/header';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

export default function Layout({ children }) {
    const { user } = useAppSelector((state) => state.auth);
    const [unathorized, setUnathorized] = useState<boolean>(false);

    // useEffect(() => {
    //     if (!user) {
    //         setUnathorized(true);
    //     } else {
    //         setUnathorized(false);
    //     }
    // }, [user]);

    return (
        <>
            <RefreshTokenComponent />
            <UnathorizedPopup isOpen={unathorized} />
            <Header profile />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <main
                    className={styles.main}
                    style={{
                        backgroundColor: '#F3F7FF',
                        width: '100vw',
                    }}>
                    {children}
                </main>
            </LocalizationProvider>
        </>
    );
}
