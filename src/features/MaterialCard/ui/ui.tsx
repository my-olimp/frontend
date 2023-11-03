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
    mode: 'library' | 'main' | 'profile';
    edit?: boolean;
    olymp?: boolean;
}
export const MaterialCard: FC<Props> = ({ material, mode, edit, olymp }) => {

    return (
        <div className={`${mode === 'main' ? styles.mainWrap : mode === 'library' ? styles.libraryWrap : styles.profileWrap} ${olymp ? styles.olymp : ''}`}>
            {!olymp &&
                <div className={styles.tagWrap}>
                    {material.tags.map((tag) => {
                        return (
                            <div className={styles.tag} key={tag.id}>
                                <h1 className={styles.textContent}>{tag.text}</h1>
                            </div>
                        )
                    })}
                </div>
            }
            <div className={styles.icon} style={{ backgroundImage: `url(${material.icon})` }}></div>
            <div className={styles.bottomWrap}>
                {olymp && <div className={styles.tag1}>Олимпиада</div>}
                <h1 className={styles.title}>{material.title}</h1>
                <div className={styles.btndiv}>
                    <Link href={``} className={styles.btn}>{edit ? 'Редактировать' : mode === 'main' ? 'Пройти' : 'Посмотреть'} </Link>
                    {mode === 'main' &&
                        <ProgressCounter
                            current={material.currentProgress}
                            max={material.maxProgress}
                        />
                    }
                </div>
            </div>
        </div>
    );
};
