'use client';

import styles from './index.module.scss';
import { LoginForm } from '@/widgets/AuthForm/LoginForm/ui/ui';
import { useEffect } from 'react';
import $api from '@/axios';

export default function Auth() {
    useEffect(() => {
        (async () => {
            try {
                const response = await $api.post('user/auth/refresh_token/');
                console.log(response);
            } catch (error: any) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <div className={styles.wrap}>
            <LoginForm />
        </div>
    );
}
