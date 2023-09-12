'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import styles from './ui.module.scss';

interface props {}

export const ErrorAlert: FC<props> = ({}) => {
    const { error, errorCode } = useAppSelector((state) => state.auth);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        if (!errorCode) {
            setIsError(false);
        } else {
            setIsError(true);
        }
    }, [error, errorCode]);

    return (
        <AnimatePresence>
            {isError && (
                <motion.div
                    initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    exit={{ x: 300 }}
                    className={styles.wrap}>
                    <h1>{errorCode}</h1>
                    <h2>{error}</h2>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
