import styles from './ui.module.scss';
import { LinkButton } from '@/entities/buttons/linkButton';
import { useRouter } from 'next/navigation';
import { Checkbox } from '@mui/material';
import { useEffect, useState } from 'react';

export const AuthLoginHelp = () => {
    const [active, setActive] = useState<boolean>(false);
    useEffect(() => {
        console.log(active);
    }, [active]);
    const router = useRouter();
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.checkWrap} onClick={() => setActive(!active)}>
                    <Checkbox value={active} />
                    <h1>Запомнить меня</h1>
                </div>
                <LinkButton link="/page" onClick={() => router.push('/page')}>
                    Забыли пароль?
                </LinkButton>
            </div>
        </>
    );
};
