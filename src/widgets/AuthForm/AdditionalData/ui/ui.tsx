'use client';
import { FirstAdditionalDataForm } from '@/features/FirstAdditionalDataForm';
import { FourAdditionalDataForm } from '@/features/FourAdditionalDataForm';
import { SecondAdditionalDataForm } from '@/features/SecondAdditionalDataForm';
import { ThirdAdditionalDataForm } from '@/features/ThirdAdditionalDataForm';
import { FC, useState } from 'react';
import { match } from 'ts-pattern';
import styles from './ui.module.scss';

interface props {}

export const AdditionalDataForm: FC<props> = ({}) => {
    const [progress, setProgress] = useState<number>(2);

    return (
        <div className={styles.screen}>
            {match(progress)
                .with(1, () => (
                    <FirstAdditionalDataForm progress={progress} setProgress={setProgress} />
                ))
                .with(2, () => (
                    <SecondAdditionalDataForm progress={progress} setProgress={setProgress} />
                ))
                .with(3, () => (
                    <ThirdAdditionalDataForm progress={progress} setProgress={setProgress} />
                ))
                .with(4, () => (
                    <FourAdditionalDataForm progress={progress} setProgress={setProgress} />
                ))
                .run()}
        </div>
    );
};
