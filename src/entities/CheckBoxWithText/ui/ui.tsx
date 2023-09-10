import { Checkbox } from '@mui/material';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    text: string;
}

export const CheckBoxWithText: FC<props> = ({ active, setActive, text }) => {
    return (
        <span className={styles.checkWrap}>
            <Checkbox
                className={styles.checkBox}
                value={active}
                onClick={() => setActive(!active)}
            />
            <h1>{text}</h1>
        </span>
    );
};
