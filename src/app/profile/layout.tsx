'use client';
import { UnathorizedPopup } from '@/features/UnathorizedPopup';
import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { Header } from '@/widgets/header';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { GetUser } from '@/store/features/auth-slice';
import Profile from './page';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function Layout({ children }) {
    const [unathorized, setUnathorized] = useState<boolean>(false);
    const [userdata, setUserdata] = useState({});

    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const { user } = useAppSelector((user) => user.auth)
    console.log(user)

    useEffect(() => {
        localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJhY2NvdW50X3R5cGUiOiJzIiwicm9sZXMiOltdLCJleHAiOjE2OTc4Mzc5MzcsImlhdCI6MTY5NzIzMjIzNywidHlwIjoiYWNjZXNzIiwianRpIjoiOTg1NzRhNDgtYTAwZi00YmQxLTg3ZWQtMzQyODBjZmRmNDFiIn0.cpIWbbHgzEJgx_Iohx6rxToufvQgPqTHqDGYyr7vLZc')
        async function getUserData() {
            const data = await dispatch(GetUser())
            setUserdata(data.payload.data)
            console.log(data.payload.data)
        }
        getUserData()
    }, []);

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
            <Header profile userdata={userdata} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <main
                    className={styles.main}
                    style={{
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
