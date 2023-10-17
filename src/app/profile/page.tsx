'use client';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
<<<<<<< HEAD
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

=======
import { EditAvatar } from '@/widgets/EditAvatar';
import { ProfileAchievements } from '@/widgets/ProfileAchievements';
import { EditContacts } from '@/widgets/EditContacts';
import { ProfileContacts } from '@/widgets/ProfileContacts';

const Profile: NextPage = () => {
    const [editMode, setMode] = useState<'' | 'personal' | 'work' | 'avatar' | 'contacts'>('');
>>>>>>> ef387c18459c1d2cf890a077d37a2f490c29a44e
    useEffect(() => {
        if (editMode === 'personal' || editMode === 'work' || editMode === 'contacts') {
            document.body.style.overflow = 'hidden';
        } else if (editMode === '') {
            document.body.style.removeProperty('overflow');
        }
    }, [editMode]);

    return (
        <div className={styles.wrap}>
<<<<<<< HEAD
            <ProfileCabinet setMode={setMode} editMode={editMode} userdata={userdata} />
=======
            <div className={styles.avatarAndAchievements}>
                <ProfileAvatar setMode={setMode} />
                <ProfileAchievements />
            </div>
            <div className={styles.personalData}>
                <PersonalInfoBlock setMode={setMode} />
                <WorkBlock setMode={setMode} />
                <ProfileContacts setMode={setMode} />
                {editMode !== '' &&
                    (editMode === 'personal') ? 
                    <EditPersonalDataModal setMode={setMode} />
                : (editMode === 'work') ?
                    <EditWorkDataModal setMode={setMode} tag={tag}/>
                : (editMode === 'avatar') ?
                    <EditAvatar setMode={setMode} />
                : (editMode === 'contacts') ?
                    <EditContacts setMode={setMode} /> 
                : '' 
                }
            </div>
>>>>>>> ef387c18459c1d2cf890a077d37a2f490c29a44e
        </div>
    );
};

export default Profile;
