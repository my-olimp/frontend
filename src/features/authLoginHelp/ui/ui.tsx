import styles from './ui.module.scss';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

export const AuthLoginHelp = () => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={styles.wrap}>
            <div className={styles.checkWrap}>
                <Checkbox
                    className={styles.checkBox}
                    value={active}
                    onClick={() => setActive(!active)}
                />
                <h1>Запомнить меня</h1>
            </div>
            <Link href="/" className={styles.link}>
                Забыли пароль?
            </Link>
        </div>
    );
};
