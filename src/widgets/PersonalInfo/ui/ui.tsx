'use client';
import { EditPersonalDataModal } from '@/features/EditPersonalDataModal';
import { PersonalInfoBlock } from '@/features/PersonalInfoBlock';
import { WorkBlock } from '@/features/WorkBlock';
import { FC, useEffect, useState } from 'react';
import styles from './ui.module.scss';

interface props {}

export const PersonalInfo: FC<props> = ({}) => {
    const [editMode, setMode] = useState<'' | 'personal' | 'work'>('');

    useEffect(() => {
        if (editMode === 'personal' || editMode === 'work') {
            document.body.style.overflow = 'hidden';
        } else if (editMode === '') {
            document.body.style.removeProperty('overflow');
        }
    }, [editMode]);

    return (
        <div className={styles.wrap}>
            <PersonalInfoBlock setMode={setMode} />
            <WorkBlock setMode={setMode} />
            {editMode !== '' && <EditPersonalDataModal editMode={editMode} setMode={setMode} />}
        </div>
    );
};
