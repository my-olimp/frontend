'use client';
import { UnathorizedPopup } from '@/features/UnathorizedPopup';
import { useAppSelector } from '@/hooks/useAppSelector';
import { AdditionalDataForm } from '@/widgets/AuthForm/AdditionalData';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

export default function Auth() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { user } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [user]);

    return (
        <div className={styles.wrap}>
            <AdditionalDataForm />
            <UnathorizedPopup isOpen={isOpen} setOpen={setIsOpen} />
        </div>
    );
}


