import { FC } from 'react';
import styles from './ui.module.scss';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const LoginHelp: FC = ({}) => {
    return (
        <div className={styles.helpWrap}>
            <Link href="/">myolimp.ru</Link>
            <div className={styles.buttonWrap}>
                <Link href={'/signup'}>Зарегестрироватся</Link>
                <ArrowForwardIosIcon />
            </div>
        </div>
    );
};
