import styles from './index.module.scss';
import { ConfirmationForm } from '@/widgets/AuthForm/AuthConfirmationForm/ui/ui';

export default function Auth() {
    return (
        <div className={styles.wrap}>
            <ConfirmationForm />
        </div>
    );
}
