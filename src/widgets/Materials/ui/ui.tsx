'use client';
import React, { FC, useLayoutEffect, useState, useRef } from 'react';
import styles from './ui.module.scss';
import { MaterialCard } from '@/features/MaterialCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import { nanoid } from 'nanoid';

interface props {
    materialList: IMaterial[];
    title: string;
    libMode: boolean;
    urlprop?: string;
    overflow: boolean;
    profile?: boolean;
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

export const Materials: FC<props> = ({ materialList, title, libMode, urlprop, overflow, profile = false, edit, olymp }) => {
    const [isMobile, setMobile] = useState(false);
    const [url, setUrl] = useState('');
    const scrollContainerRef = useRef(null);

    const scrollRight = () => {
        const container: any = scrollContainerRef.current;
        if (container) {
            container.scrollBy({ left: 150, behavior: 'smooth' });
        }
    };

    useLayoutEffect(() => {
        if ((window.innerWidth < 900) && !profile) {
            setMobile(true);
        }
        setUrl(window.location.href)
    }, []);
    return (
        <div
            className={title === 'student'
                ? styles.studentWrap
                : overflow
                ? styles.libraryWrap
                : styles.wrap
            }
            style={{ flexDirection: isMobile ? 'column' : 'row' }}
        >
            {isMobile && (
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
            )}

            <div
                className={title === 'student'
                    ? styles.studentMaterials
                    : overflow
                    ? styles.libraryWrapMaterials
                    : styles.wrapMaterials
                }
                ref={scrollContainerRef}
            >
                {materialList.map((material) => {
                    return <MaterialCard key={nanoid(6)} profile={profile} olymp={olymp} material={material} urlprop={urlprop} edit={edit} overflow={overflow} />;
                })}
            </div>
            {!isMobile && !profile &&
                (libMode ? (
                    <span className={styles.linkWrap} style={{ marginLeft: '10px' }}>
                        <Link href={url.includes('library') ? '' : '/main/library'} className={styles.link}>
                            <ArrowForwardIosIcon onClick={scrollRight} />
                        </Link>
                    </span>
                ) : (
                    <span className={styles.linkWrap} style={{ marginLeft: '10px' }}>
                        <Link href={url.includes('library') ? '' : '/main/library'} className={styles.link}>
                            <ArrowForwardIosIcon onClick={scrollRight} />
                        </Link>
                    </span>
                ))}
        </div>
    );
};
