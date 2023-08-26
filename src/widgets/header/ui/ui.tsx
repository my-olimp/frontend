import { NavBarLeftHalf } from '@/features/navBarLeftHalf';
import styles from './ui.module.scss';
import { NavBarRightHalf } from '@/features/navBarRightHalf';

export const Header = () => {
    return (
        <header
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className={styles.header}>
            <NavBarLeftHalf />
            <NavBarRightHalf />
        </header>
    );
};
