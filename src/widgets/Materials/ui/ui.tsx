'use client';
import React, { FC, useLayoutEffect, useState, useRef } from 'react';
import styles from './ui.module.scss';
import { MaterialCard } from '@/features/MaterialCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import useIsMobile from '@/hooks/UseIsMobile';

interface props {
    materialList: IMaterial[];
    mode: 'library' | 'main' | 'profile';
    edit?: boolean;
    olymp?: boolean;
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

export const Materials: FC<props> = ({ materialList, mode, edit, olymp }) => {
    const isMobile = useIsMobile(1000)
    const scrollContainerRef = useRef(null);

    const scrollRight = () => {
        const container: any = scrollContainerRef.current;
        if (container) {
            container.scrollBy({ left: 624, behavior: 'smooth' });
        }
    };

    return (
        <div
            className={mode === 'library' ? styles.libraryWrap : styles.mainWrap}
        >
            {/* {isMobile && (
                <div className={styles.titleWrap}>
                    {!libMode && (
                        <>
                            <h1 className={styles.title}>{title}</h1>
                            <Link href={'main/library'} className={styles.link}>
                                <h2>Материалы</h2>
                                <ArrowForwardIosIcon />
                            </Link>
                        </>
                    )}
                </div>
            )} */}

            <div
                className={mode === 'library' ? styles.libraryMaterials : styles.mainMaterials}
                ref={scrollContainerRef}
            >
                {materialList.map((material) => {
                    return <MaterialCard key={nanoid(6)} mode={mode} olymp={olymp} material={material} edit={edit} />;
                })}
            </div>
            {!isMobile &&
                (mode === 'library' && (
                    <span className={styles.linkWrap} style={{ marginLeft: '46px' }}>
                        <div className={styles.link}>
                            <ArrowForwardIosIcon onClick={scrollRight} />
                        </div>
                    </span>
                ))
            }
        </div>
    );
};
