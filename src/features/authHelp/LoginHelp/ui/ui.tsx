import { FC } from 'react';
import styles from './ui.module.scss';
import Link from '@mui/material/Link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const LoginHelp: FC = ({}) => {
    return (
        <div className={styles.helpWrap}>
            <Link href="/">myolimp.ru</Link>
            <div className={styles.buttonWrap}>
                <Link href="/">Зарегестрироватся</Link>
                <ArrowForwardIosIcon />
            </div>
        </div>
    );
};
