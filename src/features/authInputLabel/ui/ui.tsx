import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { AuthInput } from '@/entities/authInput';
import styles from './ui.module.scss';

interface props {
    inputName: string;
    eye?: boolean;
    password?: boolean;
    mail?: boolean;
    number?: boolean;
    passwordSignInMode?: boolean;
    text: string;
    errorMessage: string;
    setText: Dispatch<SetStateAction<string>>;
    maxLength?: number;
    setErrorMessage: Dispatch<SetStateAction<string>>;
    type: 'mail' | 'number';
}

export const AuthInputLabel: FC<props> = ({
    inputName,
    eye = false,
    password = false,
    passwordSignInMode = false,
    mail = false,
    number = false,
    text,
    setText,
    maxLength = 30,
    errorMessage,
    setErrorMessage,
    type,
}) => {
    const [secure, setSecure] = useState<string>('');
    const [color, setColor] = useState<string>('#DA4242');

    const style = {
        label: {
            color: errorMessage !== 'notError' ? '#F54135' : '#222',
        },
        secure: {
            color: color,
        },
        secureBar: {
            backgroundColor: color,
            width:
                secure === 'Слабый пароль'
                    ? '33%'
                    : secure === 'Средний пароль'
                    ? '66%'
                    : secure === 'Надежный пароль'
                    ? '100%'
                    : '100%',
        },
        secureWrap: {
            display: secure !== '' ? 'flex' : 'none',
        },
    };
    useEffect(() => {
        if (secure === 'Слабый пароль') setColor('#DA4242');
        if (secure === 'Средний пароль') setColor('#EDB16A');
        if (secure === 'Надежный пароль') setColor('#58904F');
        if (
            secure !== 'Надежный пароль' &&
            secure !== 'Средний пароль' &&
            secure !== 'Слабый пароль'
        )
            setColor('#999');
    }, [secure]);
    useEffect(() => {
        setSecure('');
    }, [type]);
    return (
        <div className={styles.wrap}>
            <label style={style.label} htmlFor={inputName} className={styles.label}>
                {inputName}
            </label>
            <AuthInput
                eye={eye}
                inputName={inputName}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                setSecure={setSecure}
                password={password}
                mail={mail}
                number={number}
                text={text}
                setText={setText}
                maxLength={maxLength}
                passwordSignInMode={passwordSignInMode}
            />
            {!password && (
                <h4
                    style={{ display: errorMessage !== 'notError' ? 'block' : 'none' }}
                    className={styles.error}
                >
                    {errorMessage}
                </h4>
            )}
            {passwordSignInMode ? (
                <h4
                    style={{ display: errorMessage !== 'notError' ? 'block' : 'none' }}
                    className={styles.error}
                >
                    {errorMessage}
                </h4>
            ) : password && errorMessage !== 'notError' ? (
                <h4
                    style={{ display: errorMessage !== 'notError' ? 'block' : 'none' }}
                    className={styles.error}
                >
                    {errorMessage}
                </h4>
            ) : (
                <div style={style.secureWrap} className={styles.securityWrap}>
                    <span style={style.secureBar} className={styles.securityBar} />
                    <span className={styles.securityFullBar} />
                    <h4 style={style.secure} className={styles.security}>
                        {secure}
                    </h4>
                </div>
            )}
        </div>
    );
};
