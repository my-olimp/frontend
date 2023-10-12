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
import styles from './index.module.scss';
import { Achievments } from '@/widgets/Achievments/ui/ui';

const Profile: NextPage = () => {
    const [editMode, setMode] = useState<'' | 'personal' | 'work' | 'contact'>('');
    useEffect(() => {
        if (editMode === 'personal' || editMode === 'work' || editMode === 'contact') {
            document.body.style.overflow = 'hidden';
        } else if (editMode === '') {
            document.body.style.removeProperty('overflow');
        }
    }, [editMode]);

    return (
        <div className={styles.wrap}>
            <div className={`${styles.left} df fdc`}>
                <ProfileAvatar />
                <Achievments />
            </div>
            <div className={styles.personalData}>
                <PersonalInfoBlock setMode={setMode} />
                <WorkBlock setMode={setMode} />
                <ContactsInfo setMode={setMode} />
                {editMode !== '' &&
                    <>
                        {editMode === 'personal' ? <EditPersonalDataModal setMode={setMode} /> : null}
                        {editMode === 'work' ? <EditWorkDataModal setMode={setMode} /> : null}
                        {editMode === 'contact' ? <EditContactModal setMode={setMode} /> : null}
                    </>
                }
            </div>
        </div>
    );
};

export default Profile;
