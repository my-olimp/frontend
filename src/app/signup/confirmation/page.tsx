'use client';
import { ConfirmationForm } from '@/widgets/AuthForm/AuthConfirmationForm/ui/ui';
import { useSearchParams } from 'next/navigation';
import styles from './index.modules.scss';

export default function Auth() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    console.log(token);

    return (
        <div className={styles.wrap}>
            
        </div>
    );
}
