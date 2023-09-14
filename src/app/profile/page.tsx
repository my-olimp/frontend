'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { EditPersonalDataModal } from '@/widgets/EditPersonalDataModal';
import { EditWorkDataModal } from '@/widgets/EditWorkDataModal';
import { PersonalInfoBlock } from '@/widgets/PersonalInfoBlock';
import { ProfileAvatar } from '@/widgets/ProfileAvatar';
import { WorkBlock } from '@/widgets/WorkBlock';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

const Profile: NextPage = () => {
    const [editMode, setMode] = useState<'' | 'personal' | 'work'>('');
    const { user } = useAppSelector((state) => state.auth);

    const { push } = useRouter();

    useEffect(() => {
        setTimeout(() => {
            if (!user) {
                push('/signin');
            }
        }, 0);
    }, []);

    useEffect(() => {
        if (editMode === 'personal' || editMode === 'work') {
            document.body.style.overflow = 'hidden';
        } else if (editMode === '') {
            document.body.style.removeProperty('overflow');
        }
    }, [editMode]);
    return (
        <div className={styles.wrap}>
            <ProfileAvatar />
            <div className={styles.personalData}>
                <PersonalInfoBlock setMode={setMode} />
                <WorkBlock setMode={setMode} />
                {editMode !== '' &&
                    (editMode === 'personal' ? (
                        <EditPersonalDataModal setMode={setMode} />
                    ) : (
                        <EditWorkDataModal setMode={setMode} />
                    ))}
            </div>
        </div>
    );
};

export default Profile;
