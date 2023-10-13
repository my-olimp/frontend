'use client';
import { EditPersonalDataModal } from '@/widgets/EditPersonalDataModal';
import { EditWorkDataModal } from '@/widgets/EditWorkDataModal';
import { EditContactModal } from '@/widgets/EditContactModal';
import { PersonalInfoBlock } from '@/widgets/PersonalInfoBlock';
import { ProfileAvatar } from '@/widgets/ProfileAvatar';
import { WorkBlock } from '@/widgets/WorkBlock';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ContactsInfo } from '@/widgets/ContactsInfo';
import { Achievments } from '@/widgets/Achievments/ui/ui';
import styles from './index.module.scss';
import { EditAvatar } from '@/widgets/EditAvatar';
import { ProfileAchievements } from '@/widgets/ProfileAchievements';
import { EditContacts } from '@/widgets/EditContacts';
import { ProfileContacts } from '@/widgets/ProfileContacts';

const Profile: NextPage = () => {
    const [editMode, setMode] = useState<'' | 'personal' | 'work' | 'avatar' | 'contacts'>('');
    useEffect(() => {
        if (editMode === 'personal' || editMode === 'work' || editMode === 'contact') {
            document.body.style.overflow = 'hidden';
        } else if (editMode === '') {
            document.body.style.removeProperty('overflow');
        }
    }, [editMode]);

    const tag: any = 'teacher';

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
                    <EditWorkDataModal setMode={setMode} />
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
