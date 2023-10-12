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

const Profile: NextPage = () => {
    const [editMode, setMode] = useState<'' | 'personal' | 'work' | 'contact' | 'teacher'>('');
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
            {tag === 'teacher' ? (
                <>
                    <div className={`${styles.left} df fdc`}>
                        <ProfileAvatar />
                        <Achievments setMode={setMode} tag={'teacher'}/>
                    </div>
                    <div className={styles.personalData}>
                        <PersonalInfoBlock setMode={setMode} />
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
                </>
            )}
        </div>
    );
};

export default Profile;
