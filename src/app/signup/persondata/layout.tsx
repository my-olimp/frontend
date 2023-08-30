'use client';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

export default function Layout({ children }) {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <main>{children}</main>
            </LocalizationProvider>
        </>
    );
}
