import { CheckBoxWithText } from '@/entities/CheckBoxWithText';
import Link from 'next/link';
import { useState } from 'react';
import styles from './ui.module.scss';

export const AuthLoginHelp = () => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={styles.wrap}>
            <CheckBoxWithText active={active} setActive={setActive} text="Запомнить меня" />
            <Link href="/" className={styles.link}>
                Забыли пароль?
            </Link>
        </div>
    );
};
