'use client';
import React, { FC, useState } from 'react';
import styles from './ui.module.scss';
import { match } from 'ts-pattern';
import { FirstAdditionalDataForm } from '@/features/FirstAdditionalDataForm';

interface props {}
export const AdditionalDataForm: FC<props> = ({}) => {
    const [progress, setProgress] = useState<number>(1);

    return (
        <div className={styles.screen}>
            {match(progress)
                .with(1, () => (
                    <>
                        <FirstAdditionalDataForm progress={progress} setProgress={setProgress} />
                    </>
                ))
                .run()}
        </div>
    );
};
