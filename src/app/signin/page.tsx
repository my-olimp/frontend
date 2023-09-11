
import { LoginForm } from '@/widgets/AuthForm/LoginForm/ui/ui';
import styles from './index.module.scss';
import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';

export default function Auth() {

    return (
        <div className={styles.wrap}>
            <RefreshTokenComponent authMode />
            <LoginForm />
        </div>
    );
}
