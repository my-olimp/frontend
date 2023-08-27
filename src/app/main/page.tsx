import React from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss';
import { Materials } from '@/widgets/Materials';
import { NearestOlimpList } from '@/widgets/NearestOlimpList';
import { PlansToday } from '@/widgets/PlansToday';
import { Header } from '@/widgets/header';

const Main: NextPage = () => {
    return (
        <>
            <Header />
            <div className={styles.screen}>
                <div className={styles.wrap}>
                    <NearestOlimpList />
                    <PlansToday />
                </div>
                <Materials />
            </div>
        </>
    );
};

export default Main;
