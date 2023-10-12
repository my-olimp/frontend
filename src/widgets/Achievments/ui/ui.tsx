import React, { FC } from 'react';
import styles from './ui.module.scss'

import Image from 'next/image';
import AchievIcon from '../../../../public/materials/AchivIcon.svg';

export const Achievments: FC = () => {
    return (
        <div className={`${styles.main} df fdc`}>
            <div className={styles.title}>
                <span>Достижения</span>
            </div>
            <div className={`${styles.item} df aic`}>
                <div className={styles.left}>
                    <div className={`${styles.avatar} df jcc aic`}>
                        <Image src={AchievIcon} alt='AchievIcon'/>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.righttitle}>Иди нахуй</div>
                    <div className={styles.subtitle}>Взять чтото</div>
                </div>
            </div>
            <div className={`${styles.item} df aic`}>
                <div className={styles.left}>
                    <div className={`${styles.avatar} df jcc aic`}>
                        <Image src={AchievIcon} alt='AchievIcon'/>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.righttitle}>Иди нахуй</div>
                    <div className={styles.subtitle}>Взять чтото</div>
                </div>
            </div>
            <div className={`${styles.item} df aic`}>
                <div className={styles.left}>
                    <div className={`${styles.avatar} df jcc aic`}>
                        <Image src={AchievIcon} alt='AchievIcon'/>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.righttitle}>Иди нахуй</div>
                    <div className={styles.subtitle}>Взять чтото</div>
                </div>
            </div>
        </div>
    )
}