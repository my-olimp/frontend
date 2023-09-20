'use client';
import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Layout({ children }) {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <RefreshTokenComponent />
                <main>{children}</main>
            </LocalizationProvider>
        </>
    );
}
