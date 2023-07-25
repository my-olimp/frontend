import styles from './ui.module.scss';
import { LinkButton } from '@/entities/buttons/linkButton';
import { CheckBox } from '@/entities/buttons/checkBox';
import { useRouter } from 'next/navigation';

export const AuthLoginHelp = () => {
    const router = useRouter();
    return (
        <>
            <div className={styles.wrap}>
                <CheckBox isText={true}>Запомнить меня</CheckBox>
                <LinkButton link="/page" onClick={() => router.push('/page')}>
                    Забыли пароль?
                </LinkButton>
            </div>
        </>
    );
};
