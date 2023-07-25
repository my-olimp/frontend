'use client';

import styles from './index.module.scss';
import { RegisterForm } from '@/widgets/AuthForm/RegisterForm';

export default function Auth() {
    return (
        <>
            <div className={styles.wrap}>
                <RegisterForm />
            </div>
        </>
    );
}
