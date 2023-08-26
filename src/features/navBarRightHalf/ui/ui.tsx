import { UserAvatar } from '@/entities/avatar';
import styles from './ui.module.scss';
import { Bell } from '@/entities/bell';

export const NavBarRightHalf = () => {
    return (
        <div className={styles.wrap}>
            <Bell />
            <UserAvatar />
        </div>
    );
};
