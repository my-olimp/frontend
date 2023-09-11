'use client';
import { FirstAdditionalDataForm } from '@/features/FirstAdditionalDataForm';
import { FourAdditionalDataForm } from '@/features/FourAdditionalDataForm';
import { FC, useState } from 'react';
import { match } from 'ts-pattern';
import styles from './ui.module.scss';
import { SecondAdditionalDataForm } from '@/features/SecondAdditionalDataForm';

interface props {}

export const AdditionalDataForm: FC<props> = ({}) => {
    const [progress, setProgress] = useState<number>(1);

    return (
        <div className={styles.screen}>
            {match(progress)
                .with(1, () => (
                    <FirstAdditionalDataForm progress={progress} setProgress={setProgress} />
                ))
                .with(2, () => (
                    <>
                        <SecondAdditionalDataForm progress={progress} setProgress={setProgress} />
                    </>
                ))
                .with(3, () => (
                    <>
                        <h1>;dw;dw</h1>
                    </>
                ))
                .with(4, () => (
                    <>
                        <FourAdditionalDataForm progress={progress} setProgress={setProgress} />
                    </>
                ))
                .run()}
        </div>
    );
};
