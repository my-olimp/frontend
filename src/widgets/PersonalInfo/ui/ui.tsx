'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { FC } from 'react';
import styles from './ui.module.scss';

interface props {}

export const PersonalInfo: FC<props> = ({}) => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div className={styles.wrap}>
            <div className={styles.titleWrap}>
                <h1>Личная информация</h1>
                <DriveFileRenameOutlineOutlinedIcon />
            </div>
            <div className={styles.infoWrap}>
                <ul className={styles.titleUL}>
                    <li>ID</li>
                    <li>ФИО</li>
                    <li>Дата рождения</li>
                    <li>Пол</li>
                    <li>Почта</li>
                </ul>
                <ul className={styles.dataUL}>
                    {user && (
                        <>
                            {' '}
                            <li>{user.id}</li>
                            <li>{`${user.first_name} ${user.second_name} ${user.third_name}`}</li>
                            <li>{`${user.data_of_birth}`}</li>
                            <li>{`${user.gender}`}</li>
                            <li>{`${user.email}`}</li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};
