import React, { CSSProperties, FC, RefObject } from 'react';
import styles from './ui.module.scss';

interface props {
    inputRef: RefObject<HTMLInputElement>;
    width?: number;
    height?: number;
    fontSize?: number;
    center?: boolean;
    maxLength?: number;
    type?: string;
}

export const Input: FC<props> = ({
    inputRef,
    width = 320,
    height = 38,
    fontSize = 16,
    center = false,
    maxLength,
    type = 'text',
}) => {
    const style: CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${fontSize}px`,
        textAlign: `${center ? 'center' : 'start'}`,
    };
    return (
        <>
            <input
                type={type}
                ref={inputRef}
                style={style}
                className={styles.input}
                maxLength={maxLength}
            />
        </>
    );
};
