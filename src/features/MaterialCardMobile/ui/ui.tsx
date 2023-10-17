'use client';
import styles from './ui.module.scss';
import { FC } from 'react';
import { IMaterial } from '@/widgets/Materials';
import Link from 'next/link';


interface Props {
    material: IMaterial;
}
export const MaterialCardMobile: FC<Props> = ({ material }) => {

    return (
        <Link href={`/main/library/items/chapter/article/${material.id}`} className={styles.wrap}>
            <div className={styles.icon} style={{ backgroundImage: `url(${material.icon})` }}></div>
            <div className={styles.block}>
                <h6 className={styles.block__title}>
                    {material.tags[0].text}
                </h6>
                <p className={styles.block__text}>
                    {material.title}
                </p>
            </div>
        </Link>
    );
};
