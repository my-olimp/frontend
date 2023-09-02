import { FC } from 'react';
import styles from './ui.module.scss';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface props {
    link: string;
    linkText: string;
}

export const AuthHelp: FC<props> = ({ link, linkText }) => {
    return (
        <div className={styles.helpWrap}>
            <Link href="/">myolimp.ru</Link>
            <div className={styles.buttonWrap}>
                <Link href={link}>{linkText}</Link>
                <ArrowForwardIosIcon />
            </div>
        </div>
    );
};
