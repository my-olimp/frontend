import React, { FC } from 'react';
import styles from './ui.module.scss';
import Link from 'next/link';
import ArrowRight from '../../../../public/arrows/arrow-right.svg';
import { match, P } from 'ts-pattern';
import Image from 'next/image';
import ChillImage from '../../../../public/materials/chill.svg';
import { PlanToday } from '@/features/PlanToday';

interface props {}

export interface IPlan {
    id: number;
    completed: boolean;
    title: string;
}

const planTodayList: IPlan[] = [
    { id: 0, completed: false, title: 'Теория оптимальности. Лингвистика. Сириус.курсы' },
    { id: 1, completed: false, title: 'Ориентированные графы. Комбинаторика. Сириус.курсы' },
    { id: 2, completed: true, title: 'Дискретная непрерывность. Комбинаторика. Сириус.курсы' },
];

export const PlansToday: FC<props> = ({}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.titleWrap}>
                <h1>План на сегодня</h1>
                <div className={styles.link}>
                    <Link className={styles.text} href="/main/calendar">Календарь</Link>
                    <Image width={20} height={20} className={styles.arrow} alt='arrow' src={ArrowRight.src}/>
                </div>
            </div>
            <div className={styles.plansWrap}>
                {match(planTodayList.length)
                    .with(0, () => (
                        <div className={styles.noPlans}>
                            <Image draggable={false} src={ChillImage} alt={'chill'} />
                            <h2>У вас ещё нет планов</h2>
                        </div>
                    ))
                    .with(P.number.gt(0), () => (
                        <div className={styles.plans}>
                            {planTodayList.map((plan) => {
                                return <PlanToday key={plan.id} plan={plan} />;
                            })}
                        </div>
                    ))
                    .run()}
            </div>
        </div>
    );
};
