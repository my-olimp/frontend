'use client';

import styles from './index.module.scss';
import { LoginForm } from '@/widgets/AuthForm/LoginForm/ui/ui';
import { useEffect } from 'react';
import $api from '@/axios';

export default function Auth() {
    useEffect(() => {
        (async () => {
            const response = await $api.post('user/auth/refresh_token/');
            console.log(response);
        })();
    }, []);

    return (
        <div className={styles.wrap}>
            <LoginForm />
        </div>
    );
}
