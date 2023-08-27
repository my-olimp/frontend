import React, { FC } from 'react';
import styles from './ui.module.scss';
import { timeAfter } from '../lib/timeAfter';

export interface INotice {
    id: number;
    title: string;
    date: string;
}

interface props {
    notifications: INotice[];
}
export const Notifications: FC<props> = ({ notifications }) => {
    const newNotifications = notifications.map((notice) => {
        const timeAfterNotice = timeAfter(notice.date);
        return {
            ...notice,
            date: timeAfterNotice,
        };
    });

    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Уведомления</h1>
            {newNotifications.map((notice) => {
                return (
                    <span key={notice.id} className={styles.fullNotice}>
                        <span className={styles.pointWrap}>
                            <div className={styles.point}></div>
                        </span>
                        <div className={styles.noticeWrap}>
                            <span className={styles.textWrap}>
                                <h1>{notice.title}</h1>
                                <p>{notice.date}</p>
                            </span>
                            <button>Посмотреть</button>
                        </div>
                    </span>
                );
            })}
        </div>
    );
};
