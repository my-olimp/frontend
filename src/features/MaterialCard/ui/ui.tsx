'use client';
import { Button } from '@/entities/buttons/button';
import { ProgressCounter } from '@/entities/progressCounter';
import styles from './ui.module.scss';
import { FC, useState, useEffect } from 'react';
import { IMaterial } from '@/widgets/Materials';
import { MaterialChip } from '@/entities/Chips/MaterialChip';
import Link from 'next/link';

interface Props {
    material: IMaterial;
    urlprop?: string;
    overflow: boolean;
}
export const MaterialCard: FC<Props> = ({ material, urlprop, overflow }) => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(window.location.href)
    }, []);
    const mobile = true;

    return (
        <div className={overflow ? styles.libraryWrap : styles.wrap}>
            <div className={styles.tagWrap}>
                {material.tags.map((tag) => {
                    return <MaterialChip key={tag.id} text={tag.text} />;
                })}
            </div>
            <div className={styles.icon} style={{ backgroundImage: `url(${material.icon})` }}></div>
            <div className={styles.bottomWrap}>
                <h1 className={styles.title}>{material.title}</h1>
                <div className={styles.startWrap}>
                    {!mobile && (
                        <>
                            <Button onClick={(event) => console.log(event.target)}>Пройти</Button>
                            <ProgressCounter
                                current={material.currentProgress}
                                max={material.maxProgress}
                            />
                        </>
                    )}
                </div>
                <div className={styles.btndiv}>
                    <Link href={`${urlprop}`} className={styles.btn}>Посмотреть</Link>
                </div>
            </div>
        </div>
    );
};
