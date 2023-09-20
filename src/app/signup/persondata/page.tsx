'use client';
import { UnathorizedPopup } from '@/features/UnathorizedPopup';
import { useAppSelector } from '@/hooks/useAppSelector';
import { AdditionalDataForm } from '@/widgets/AuthForm/AdditionalData';
import styles from './index.module.scss';

export default function Auth() {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div className={styles.wrap}>
            <AdditionalDataForm />
            {!user && <UnathorizedPopup />}
        </div>
    );
}
