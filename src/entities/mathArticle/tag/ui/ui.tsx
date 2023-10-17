import { FC } from 'react';
import styles from './ui.module.scss';

interface PropsTagArticle {
    title: string
}

export const TagArticle: FC<PropsTagArticle> = ({ title }) => {

    return (
        <div className={styles.blockTag}>
            <span>{title}</span>
        </div>
    )
}