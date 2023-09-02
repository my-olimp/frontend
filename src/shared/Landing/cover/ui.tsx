import { FC } from 'react';
import styles from './ui.module.scss';
import { TagsButton } from '../tagsButton/ui';
import MainDecor from '../../../../public/materials/MainDecor.svg';
import Image from 'next/image';

interface Props {
    title: string;
    description: string;
}

interface TypeData {
    id: number;
    text: string;
}

export const Cover: FC<Props> = ({ title, description }) => {
    const data: TypeData[] = [
        {
            id: 0,
            text: 'Библиотека',
        },
        {
            id: 1,
            text: 'Сообщества',
        },
        {
            id: 2,
            text: 'Нетворкинг',
        },
        {
            id: 3,
            text: 'Олимпиады',
        },
    ];
    return (
        <>
            <div className={styles.externalLayout} style={{position: 'relative'}}>
                <Image src={MainDecor} className={styles.decor} alt='Decorations'/>
                <div className={styles.cover}>
                    <div className={styles.innerLayout}>
                        <div
                            className={`${styles.column} ${styles.text__left} ${styles.text__sm__center}`}>
                            <h1 className={styles.title}>{title}</h1>
                            <p className={styles.description}>{description}</p>
                            <div className={styles.items}>
                                {data.map((data: TypeData) => {
                                    return <TagsButton key={data.id} text={data.text} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
