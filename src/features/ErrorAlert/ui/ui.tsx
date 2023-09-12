'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { FC } from 'react';
import styles from './ui.module.scss';
import { auth } from '@/store/features/auth-slice';

interface props {}

export const ErrorAlert: FC<props> = ({}) => {
    const { error } = useAppSelector((state) => state.auth);
    return <div className={styles.wrap}>{error}</div>;
};
