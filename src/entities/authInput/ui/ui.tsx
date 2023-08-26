import React, { FC, FocusEvent, FormEvent, useState } from 'react';
import styles from './ui.module.scss';
import { match } from 'ts-pattern';
import { MaskedInput } from '@/shared/MaskedInput/ui/ui';
import { eyeStyles } from '@/entities/authInput/lib/eyeStyles';

interface props {
    eye?: boolean;
    inputName: string;
    password: boolean;
    mask?: string | undefined;
    errorMessage: string;
    text: string;
    autoComplete: string;
    onFocus: () => void | undefined;
    onInput: (event: FormEvent<HTMLInputElement>) => void | undefined;
    onBlur: (event: FocusEvent<HTMLInputElement>) => void | undefined;
}

export const AuthInput: FC<props> = ({
    eye = false,
    inputName,
    password,
    text,
    errorMessage,
    mask = undefined,
    onFocus = undefined,
    onBlur = undefined,
    onInput = undefined,
    autoComplete,
}) => {
    const [isEyeOpen, setEyeOpen] = useState<boolean>(false);
    const [inputType, setInputType] = useState<'text' | 'password'>(password ? 'password' : 'text');

    const style = eyeStyles(errorMessage, eye, isEyeOpen);

    const beforeMaskedStateChange = ({ nextState }) => {
        let { value } = nextState;
        if (value.endsWith(')', '-', ' ')) {
            value = value.slice(0, -1);
        }

        return {
            ...nextState,
            value,
        };
    };

    return (
        <div className={styles.wrap}>
            <label style={style.label} htmlFor={inputName} className={styles.label}>
                {inputName}
            </label>
            <div className={styles.inputWrap}>
                {match(typeof mask)
                    .with('string', () => (
                        <MaskedInput
                            mask={mask ? mask : ''}
                            maskPlaceholder={''}
                            alwaysShowMask={false}
                            beforeMaskedStateChange={beforeMaskedStateChange}
                            onBlur={(event) => onBlur && onBlur(event)}
                            onFocus={onFocus}
                            value={text}
                            onChange={(event) => onInput && onInput(event)}>
                            <input
                                style={style.input}
                                className={styles.input}
                                type="tel"
                                max="10"
                                autoComplete={autoComplete}
                                id={inputName}
                            />
                        </MaskedInput>
                    ))
                    .with('undefined', () => (
                        <input
                            style={style.input}
                            className={styles.input}
                            id={inputName}
                            value={text}
                            type={inputType}
                            autoComplete={autoComplete}
                            onChange={(event) => onInput && onInput(event)}
                            onBlur={(event) => onBlur && onBlur(event)}
                            onFocus={onFocus}
                        />
                    ))
                    .run()}
                <div
                    style={style.iconWrap}
                    className={styles.iconWrap}
                    onClick={() => {
                        setInputType(inputType === 'text' ? 'password' : 'text');
                        setEyeOpen(!isEyeOpen);
                    }}>
                    <i style={style.icon} className={styles.icon} draggable="false" />
                </div>
            </div>
        </div>
    );
};
