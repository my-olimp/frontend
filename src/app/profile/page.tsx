'use client';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { ProfileCabinet } from '@/widgets/ProfileCabinet';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { useDispatch } from 'react-redux';
import { GetUser } from '@/store/features/auth-slice';

const Profile: NextPage = () => {
    const [editMode, setMode] = useState<'' | 'personal' | 'work' | 'contact' | 'teacher'>('');
    const [userdata, setUserdata] = useState({});
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    useEffect(() => {
        localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJhY2NvdW50X3R5cGUiOiJzIiwicm9sZXMiOltdLCJleHAiOjE2OTc4Mzc5MzcsImlhdCI6MTY5NzIzMjIzNywidHlwIjoiYWNjZXNzIiwianRpIjoiOTg1NzRhNDgtYTAwZi00YmQxLTg3ZWQtMzQyODBjZmRmNDFiIn0.cpIWbbHgzEJgx_Iohx6rxToufvQgPqTHqDGYyr7vLZc')
        async function getUserData() {
            const data = await dispatch(GetUser())
            setUserdata(data.payload.data)
        }
        getUserData()
    }, []);

    useEffect(() => {
        if (editMode === 'personal' || editMode === 'work' || editMode === 'contact') {
            document.body.style.overflow = 'hidden';
        } else if (editMode === '') {
            document.body.style.removeProperty('overflow');
        }
    }, [editMode]);

    return (
        <div className={styles.wrap}>
            <ProfileCabinet setMode={setMode} editMode={editMode} userdata={userdata} />
        </div>
    );
};

export default Profile;
