import React, { CSSProperties, EventHandler, FC, MouseEvent, PropsWithChildren } from 'react';
import styles from './ui.module.scss';

interface props {
    style?: CSSProperties;
    onClick: EventHandler<MouseEvent<HTMLButtonElement>>;
}
export const Button: FC<PropsWithChildren<props>> = ({ children, style = {}, onClick }) => {
    return (
        <button onClick={(event) => onClick(event)} style={style} className={styles.button}>
            {children}
        </button>
    );
};
