'use client';

import React from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss';
import { Materials } from '@/widgets/Materials';

const Main: NextPage = () => {
    return (
        <div className={styles.screen}>
            <Materials />
        </div>
    );
};

export default Main;
