import { FC } from 'react';
import styles from './ui.module.scss';

interface Props {
    id?: number;
    text: string;
}

export const TagsButton: FC<Props> = ({ text }) => {
    return (
        <div className={styles.card}>
            <p className={styles.text}>{text}</p>
        </div>
    );
};
