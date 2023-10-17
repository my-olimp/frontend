'use client';
import { useSearchParams } from 'next/navigation';
import styles from './index.module.scss';

export default function Auth() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    console.log(token);

    return <div className={styles.wrap}>{token}</div>;
}
