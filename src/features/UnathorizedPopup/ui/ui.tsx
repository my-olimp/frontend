'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import fingerUP from '../../../../public/auth/fingerUP.svg';
import styles from './ui.module.scss';

interface props {
    isOpen: boolean;
}

export const UnathorizedPopup: FC<props> = ({ isOpen }) => {
    const { push } = useRouter();
    // const spanRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleClick = () => {
        push('/signin');
    };
    // const handleClickOutside: EventHandler<MouseEvent<HTMLSpanElement>> = (event) => {
    //     if (event.target === spanRef.current) {
    //         document.body.style.overflow = '';
    //         setOpen(false);
    //     }
    // };

    return (
        <>
            {isOpen && (
                <span
                    className={styles.screen}
                    // onClick={(event) => handleClickOutside(event)}
                    // ref={spanRef}
                >
                    <div className={styles.wrap}>
                        <Image src={fingerUP} alt="fingerUp" />
                        <h1>Авторизуйтесь, чтобы получить доступ ко всем материалам</h1>
                        <button onClick={() => handleClick()}>Войти</button>
                    </div>
                </span>
            )}
        </>
    );
};
