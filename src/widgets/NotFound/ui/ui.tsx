import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import not_found from '../../../../public/materials/404.svg';
import styles from './ui.module.scss';

interface props {}

export const NotFound: FC<props> = ({}) => {
    return (
        <div className={styles.wrap}>
            <Image src={not_found} alt="404" className={styles.image} />
            <h1 className={styles.h1}>Упс, такая страница не существует</h1>
            <Link href="/main">
                <button className={styles.button}>Вернуться на главную</button>
            </Link>
        </div>
    );
};
