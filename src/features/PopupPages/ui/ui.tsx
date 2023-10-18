import { Dispatch, EventHandler, FC, MouseEvent, SetStateAction, useEffect, useRef } from 'react';
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
    const modalRef = useRef(null);
    const { user } = useAppSelector((state) => state.auth);

    const handleClickOutSide: EventHandler<MouseEvent<HTMLDivElement>> = (event) => {
        if (event.target === modalRef.current) {
            setShow(false)
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShow(false)
            }
        });
        return () => {
            document.removeEventListener('keydown', (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    setShow(false)
                }
            });
        };
    }, []);

    return (
        <div className={styles.wrap}>
            <div className={styles.userBlock}>
                <div className={styles.avatar}>
                    <NavbarAvatar size={44} />
                </div>
                <div className={styles.blockText}>
                    <h6 className={styles.title}>{user?.first_name} {user?.second_name}</h6>
                    <p className={styles.text}>{user?.account_type === 's' ? 'Ученик' : 'Учитель'}</p>
                </div>
            </div>
            <div className={styles.pagesBlock}>
                <div className={styles.line}></div>
                <Link href='/profile' className={`${styles.link} ${pathName === '/profile' ? `${styles._active}` : ''}`}>
                    <img className={styles.link__icon} src={profileIcon.src} alt="" />
                    <p className={styles.link__text}>Профиль</p>
                </Link>
                <Link href='/main' className={`${styles.link} ${pathName === '/main' ? `${styles._active}` : ''}`}>
                    <img className={styles.link__icon} src={homeIcon.src} alt="" />
                    <p className={styles.link__text}>Главная</p>
                </Link>
                <Link href='/main' className={`${styles.link} ${pathName === '/main' ? `${styles._active}` : ''}`}>
                    <img className={styles.link__icon} src={goalIcon.src} alt="" />
                    <p className={styles.link__text}>Цели</p>
                </Link>
                <div className={styles.line}></div>
                <Link href='/main' className={`${styles.link} ${pathName === '/main' ? `${styles._active}` : ''}`}>
                    <img className={styles.link__icon} src={documentsIcon.src} alt="" />
                    <p className={styles.link__text}>Документы</p>
                </Link>
            </div>
        </div>
    )
}
