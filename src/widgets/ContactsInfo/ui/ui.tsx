"use client"
import React, { Dispatch,
    SetStateAction,
    FC,
} from 'react';
import styles from './ui.module.scss'

import { useAppSelector } from '@/hooks/useAppSelector';

// ICONS
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contact' | 'teacher'>>;
}

export const ContactsInfo: FC<props> = ({ setMode }) => {
    const { user } = useAppSelector((state: any) => state.auth);

    const getValue = (value: any) => value ? `${value}` : 'Не указано'

    return (
        <div className={styles.wrap}>
            <div className={styles.titleWrap}>
                <h1>Контакты</h1>
                <div onClick={() => setMode('contact')}>
                    <DriveFileRenameOutlineOutlinedIcon />
                </div>
            </div>
            <ul className={styles.infoWrap}>
                <li>
                    <h1>Почта</h1>
                    <h2>{getValue(user?.email)}</h2>
                </li>
                <li>
                    <h1>Телефон</h1>
                    <h2>{getValue(user?.number)}</h2>
                </li>
            </ul>
        </div>
    )
}