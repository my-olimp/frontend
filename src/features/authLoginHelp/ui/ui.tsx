import styles from './ui.module.scss';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import Link from '@mui/material/Link';

export const AuthLoginHelp = () => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={styles.wrap}>
            <div className={styles.checkWrap}>
                <Checkbox value={active} onClick={() => setActive(!active)} />
                <h1>Запомнить меня</h1>
            </div>
            <Link href="/" underline="none" className={styles.link}>
                Забыли пароль?
            </Link>
        </div>
    );
};
