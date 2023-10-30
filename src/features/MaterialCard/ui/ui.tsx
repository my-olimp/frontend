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
    overflow?: boolean;
    profile?: boolean;
    edit?: boolean;
    olymp?: boolean;
}
export const MaterialCard: FC<Props> = ({ material, urlprop, overflow, profile, edit, olymp }) => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(window.location.href)
    }, []);
    const mobile = true;

    return (
        <div className={`${!overflow ? styles.wrap : profile ? `${styles.libraryWrap} ${styles.libraryWrap_profile}` : styles.libraryWrap} ${olymp ? styles.olymp : ''}`}>
            {!olymp &&
            <div className={styles.tagWrap}>
                {material.tags.map((tag) => {
                    return <MaterialChip key={tag.id} text={tag.text} />;
                })}
            </div>
            }
            <div className={styles.icon} style={{ backgroundImage: `url(${material.icon})` }}></div>
            <div className={styles.bottomWrap}>
                {olymp && <div className={styles.tag1}>{material.tags[0].text}</div>}
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
                    <Link href={`${urlprop}`} className={styles.btn}>{edit ? 'Редактировать' : 'Посмотреть'} </Link>
                </div>
            </div>
        </div>
    );
};
