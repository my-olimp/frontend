'use client';
import { EditPersonalDataModal } from '@/widgets/EditPersonalDataModal';
import { EditWorkDataModal } from '@/widgets/EditWorkDataModal';
import { EditContactModal } from '@/widgets/EditContactModal';
import { PersonalInfoBlock } from '@/widgets/PersonalInfoBlock';
import { ProfileAvatar } from '@/widgets/ProfileAvatar';
import { WorkBlock } from '@/widgets/WorkBlock';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ContactsInfo } from '@/widgets/ContactsInfo';
import { Achievments } from '@/widgets/Achievments/ui/ui';
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { GetUser } from '@/store/features/auth-slice';

const Profile: NextPage = () => {
    const [userdata, setUserdata] = useState({});
    const [editMode, setMode] = useState<'' | 'personal' | 'work' | 'contact' | 'teacher'>('');

    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    useEffect(() => {
        localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJhY2NvdW50X3R5cGUiOiJzIiwicm9sZXMiOltdLCJleHAiOjE2OTc4Mzc5MzcsImlhdCI6MTY5NzIzMjIzNywidHlwIjoiYWNjZXNzIiwianRpIjoiOTg1NzRhNDgtYTAwZi00YmQxLTg3ZWQtMzQyODBjZmRmNDFiIn0.cpIWbbHgzEJgx_Iohx6rxToufvQgPqTHqDGYyr7vLZc')
        async function getUserData() {
            const data = await dispatch(GetUser())
            console.log(data.payload.data)
            setUserdata(data.payload.data)
        }
        getUserData()
        if (editMode === 'personal' || editMode === 'work' || editMode === 'contact') {
            document.body.style.overflow = 'hidden';
        } else if (editMode === '') {
            document.body.style.removeProperty('overflow');
        }
    }, [editMode]);

    const tag: any = 'asd';

    return (
        <div className={styles.wrap}>
            {tag === 'teacher' ? (
                <>
                    <div className={`${styles.left} df fdc`}>
                        <ProfileAvatar />
                        <Achievments setMode={setMode} tag={'teacher'}/>
                    </div>
                    <div className={styles.personalData}>
                        <PersonalInfoBlock setMode={setMode} userdata={userdata}/>
                        <WorkBlock setMode={setMode} tag={'teacher'}/>
                        <ContactsInfo setMode={setMode} />
                        {editMode !== '' &&
                            <>
                                {editMode === 'personal' ? <EditPersonalDataModal setMode={setMode} /> : null}
                                {editMode === 'work' ? <EditWorkDataModal setMode={setMode} tag={'teacher'} /> : null}
                                {editMode === 'contact' ? <EditContactModal setMode={setMode} /> : null}
                            </>
                        }
                    </div>
                </>
            ) : (
                <>
                    <div className={`${styles.left} df fdc`}>
                        <ProfileAvatar />
                        <Achievments />
                    </div>
                    <div className={styles.personalData}>
                        <PersonalInfoBlock setMode={setMode} userdata={userdata} />
                        <WorkBlock setMode={setMode} userdata={userdata} />
                        <ContactsInfo setMode={setMode} userdata={userdata} />
                        {editMode !== '' &&
                            <>
                                {editMode === 'personal' ? <EditPersonalDataModal setMode={setMode} userdata={userdata} /> : null}
                                {editMode === 'work' ? <EditWorkDataModal setMode={setMode} userdata={userdata} /> : null}
                                {editMode === 'contact' ? <EditContactModal setMode={setMode} userdata={userdata} /> : null}
                            </>
                        }
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
