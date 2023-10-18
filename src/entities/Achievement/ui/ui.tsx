import { FC } from 'react';
import styles from './ui.module.scss';
import Image from 'next/image';


interface props {
    image: string;
    title: string;
    text: string;
}

export const Achievement: FC<props> = ({ image, title, text }) => {
    return (
        <li className={styles.block}>
            <div className={styles.blockImage}>
                <div className={styles.imageWrap}>
                    <Image
                        src={image}
                        alt="achievement"
                        sizes="75px"
                        fill
                    />
                </div>
            </div>
            <div className={styles.blockText}>
                <h6 className={styles.title}>{title}</h6>
                <p className={styles.text}>{text}</p>
            </div>
        </li>
    );
};
