import styles from './index.module.scss';
import { RegisterForm } from '@/widgets/AuthForm/RegisterForm';
import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';

export default function Auth() {

    return (
        <div className={styles.wrap}>
            <RefreshTokenComponent/>
            <RegisterForm />
        </div>
    );
}
