import styles from './index.module.scss';
import { AdditionalDataForm } from '@/widgets/AuthForm/AdditionalData';

export default function Auth() {
    return (
        <div className={styles.wrap}>
            <AdditionalDataForm />
        </div>
    );
}
