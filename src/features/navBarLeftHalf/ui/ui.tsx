import { MainNavBarElements } from '@/entities/navBarElements';
import styles from './ui.module.scss';
import Logo from '@/entities/Logo/ui/ui';

const navBarData = [
    {
        id: 0,
        title: 'Главная',
        link: '',
    },
    {
        id: 1,
        title: 'Календарь',
        link: '',
    },
    {
        id: 2,
        title: 'Новости',
        link: '',
    },
    {
        id: 3,
        title: 'Библиотека',
        link: '',
    },
];

export const NavBarLeftHalf = () => {
    return (
        <>
            <div className={styles.wrap}>
                <Logo />
                <MainNavBarElements propsData={navBarData} />
            </div>
        </>
    );
};
