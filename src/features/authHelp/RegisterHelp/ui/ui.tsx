import { FC } from 'react';
import Link from 'next/link';

import styles from './ui.module.scss';
export const RegisterHelp: FC = ({}) => {
    return (
        <div className={styles.helpWrap}>
            <h2 className={styles.text}>Уже регистрировались в сервисах MyOlimp?</h2>
            <Link href="/signin" className={styles.link}>
                Войдите в учетную запись
            </Link>
        </div>
    );
};
