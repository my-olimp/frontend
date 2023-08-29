'use client';
import React, { FC, useLayoutEffect, useState } from 'react';
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
    const [isMobile, setMobile] = useState<boolean>(false);
    useLayoutEffect(() => {
        if (window.innerWidth < 900) {
            setMobile(true);
        }
    }, []);
    return (
        <div className={styles.wrap} style={{ flexDirection: isMobile ? 'column' : 'row' }}>
            {isMobile && (
                <div className={styles.titleWrap}>
                    {!libMode && (
                        <>
                            <h1 className={styles.title}>{title}</h1>
                            <Link href={'/library'} className={styles.link}>
                                <h2>Материалы</h2>
                                <ArrowForwardIosIcon />
                            </Link>
                        </>
                    )}
                </div>
            )}

            <div className={styles.wrapMaterials}>
                {materialList.map((material) => {
                    return <MaterialCard key={material.id} material={material} />;
                })}
            </div>
            {!isMobile &&
                (libMode ? (
                    <span className={styles.linkWrap}>
                        <Link href={'/'} className={styles.link}>
                            <ArrowForwardIosIcon />
                        </Link>
                    </span>
                ) : (
                    <span className={styles.linkWrap}>
                        <Link href={'/library'} className={styles.link}>
                            <ArrowForwardIosIcon />
                        </Link>
                    </span>
                ))}
        </div>
    );
};
