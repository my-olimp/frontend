import React, { FC } from 'react';
import styles from './ui.module.scss';
import { MaterialCard } from '@/features/MaterialCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

interface props {
    materialList: IMaterial[];
    title: string;
    libMode: boolean;
}

export interface IMaterial {
    id: number;
    title: string;
    currentProgress: number;
    maxProgress: number;
    tags: ITag[];
    icon: string;
}

export interface ITag {
    id: number;
    text: string;
}

export const Materials: FC<props> = ({ materialList, title, libMode }) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.titleWrap}>
                <h1 className={styles.title}>{title}</h1>
                {!libMode && (
                    <Link href={'/library'} className={styles.link}>
                        <h2>Материалы</h2>
                        <ArrowForwardIosIcon />
                    </Link>
                )}
            </div>
            <div className={styles.wrapMaterials}>
                {materialList.map((material) => {
                    return <MaterialCard key={material.id} material={material} />;
                })}
            </div>
            {libMode && (
                <span className={styles.linkWrap}>
                    <Link href={'/'} className={styles.link}>
                        <ArrowForwardIosIcon />
                    </Link>
                </span>
            )}
        </div>
    );
};
