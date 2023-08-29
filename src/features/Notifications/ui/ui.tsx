import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import styles from './ui.module.scss';
import { timeAfter } from '../lib/timeAfter';

export interface INotice {
    id: number;
    title: string;
    date: string;
}

interface props {
    notifications: INotice[];
    setShow: Dispatch<SetStateAction<boolean>>;
}
export const Notifications: FC<props> = ({ notifications, setShow }) => {
    const wrapRef = useRef(null);
    const newNotifications = notifications.map((notice) => {
        const timeAfterNotice = timeAfter(notice.date);
        return {
            ...notice,
            date: timeAfterNotice,
        };
    });
    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (event.target !== wrapRef.current) {
                setShow(false);
            }
        });
        return function cleanup() {
            document.body.removeEventListener('click', (event) => {
                if (event.target !== wrapRef.current) {
                    setShow(false);
                }
            });
        };
    }, [setShow]);

    return (
        <div className={styles.wrap} ref={wrapRef}>
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
