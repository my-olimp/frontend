import React, { CSSProperties, FC, FormEvent, RefObject, useEffect, useState } from 'react';
import styles from './ui.module.scss';

interface props {
    inputRef: RefObject<HTMLInputElement>;
    width?: number;
    height?: number;
    fontSize?: number;
    center?: boolean;
    maxLength?: number;
    type?: string;
    handleInput?: (event: FormEvent<HTMLInputElement>, input: RefObject<HTMLInputElement>) => void;
}

export const Input: FC<props> = ({
    inputRef,
    width = 320,
    height = 38,
    fontSize = 16,
    center = false,
    maxLength,
    type = 'text',
    handleInput = () => {},
}) => {
    const [disabled, setDisabled] = useState<boolean>(true);
    useEffect(() => {
        setDisabled(false);
    }, []);
    const style: CSSProperties = {
        backgroundColor: disabled ? '#efefef' : 'white',
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
                disabled={disabled}
                onInput={(event: FormEvent<HTMLInputElement>) => handleInput(event, inputRef)}
            />
        </>
    );
};
