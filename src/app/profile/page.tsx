'use client';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { EditAvatar } from '@/widgets/EditAvatar';
import { ProfileAchievements } from '@/widgets/ProfileAchievements';
import { EditContacts } from '@/widgets/EditContacts';
import { ProfileContacts } from '@/widgets/ProfileContacts';

const Profile: NextPage = () => {
    const [editMode, setMode] = useState<'' | 'personal' | 'work' | 'avatar' | 'contacts'>('');
    useEffect(() => {
        if (editMode === 'personal' || editMode === 'work' || editMode === 'contacts') {
            document.body.style.overflow = 'hidden';
        } else if (editMode === '') {
            document.body.style.removeProperty('overflow');
        }
    }, [editMode]);

    return (
        <div className={styles.wrap}>
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
        </div>
    );
};

export default Profile;
