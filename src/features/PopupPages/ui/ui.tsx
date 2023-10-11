import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import styles from './ui.module.scss';
import { NavbarAvatar } from '@/entities/NavbarAvatar';
import { useAppSelector } from '@/hooks/useAppSelector';
import homeIcon from '../../../../public/popupHeader/home.svg';
import profileIcon from '../../../../public/popupHeader/profile.svg';
import goalIcon from '../../../../public/popupHeader/goal.svg';
import documentsIcon from '../../../../public/popupHeader/documents.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PropsPopupPages {
    setShow: Dispatch<SetStateAction<boolean>>
}

export const PopupPages: FC<PropsPopupPages> = ({ setShow }) => {
    const pathName = usePathname()
    const wrapRef = useRef(null);
    const { user } = useAppSelector((state) => state.auth);

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (event.target !== wrapRef.current) {
                setShow(false);
            }
        });
        return function cleanup() {
            document.body.removeEventListener('click', (event) => {
                if (event.target !== wrapRef.current) {
                    setShow(false);
                }
            });
        };
    }, [setShow]);

    return (
        <div className={styles.wrap} ref={wrapRef}>
            <div className={styles.userBlock}>
                <div className={styles.avatar}>
                    <NavbarAvatar size={44}/>
                </div>
                <div className={styles.blockText}>
                    <h6 className={styles.title}>{user?.first_name} {user?.second_name}</h6>
                    <p className={styles.text}>{user?.account_type === 's' ? 'Ученик' : 'Учитель'}</p>
                </div>
            </div>
            <div className={styles.pagesBlock}>
                <div className={styles.line}></div>
                <Link href='/profile' className={`${styles.link} ${pathName === '/profile' ? `${styles._active}` : ''}`}>
                    <img className={styles.link__icon} src={profileIcon.src} alt=""/>
                    <p className={styles.link__text}>Профиль</p>
                </Link>
                <Link href='/main' className={`${styles.link} ${pathName === '/main' ? `${styles._active}` : ''}`}>
                    <img className={styles.link__icon} src={homeIcon.src} alt=""/>
                    <p className={styles.link__text}>Главная</p>
                </Link>
                <Link href='/main' className={`${styles.link} ${pathName === '/main' ? `${styles._active}` : ''}`}>
                    <img className={styles.link__icon} src={goalIcon.src} alt=""/>
                    <p className={styles.link__text}>Цели</p>
                </Link>
                <div className={styles.line}></div>
                <Link href='/main' className={`${styles.link} ${pathName === '/main' ? `${styles._active}` : ''}`}>
                    <img className={styles.link__icon} src={documentsIcon.src} alt=""/>
                    <p className={styles.link__text}>Документы</p>
                </Link>
            </div>
        </div>
    )
}
