'use client';
import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { Header } from '@/widgets/header';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Layout({ children }) {
    return (
        <>
            <RefreshTokenComponent />
            <Header profile />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <main
                    style={{
                        padding: '20px 0 0 84px',
                        backgroundColor: '#F3F7FF',
                        width: '100vw',
                        minHeight: '100vh',
                    }}>
                    {children}
                </main>
            </LocalizationProvider>
        </>
    );
}
