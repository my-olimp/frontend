import { NavBarButton } from '@/entities/Landing/navBarButton/ui';
import { SideBarElement } from '@/entities/Landing/navSideBarElements/ui';
import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './ui.module.scss';

interface props {
    show: boolean;
}

export const SideNavBar: FC<props> = ({ show }) => {
    return (
        <motion.div
            className={styles.wrap}
            initial={{ x: 900 }}
            style={{height: '100vh', display: 'flex'}}
            animate={{ x: !show ? 900 : 0 }}
            transition={{ duration: .25 }}
        >
            <SideBarElement>Преимущества</SideBarElement>
            <SideBarElement>О Проекте</SideBarElement>
            <SideBarElement link="/signin">Войти</SideBarElement>
            <NavBarButton>Присоединиться</NavBarButton>
        </motion.div>
    );
};
