import { Dispatch, FC, FormEvent, SetStateAction, useCallback, useEffect, useState } from 'react';
import { AuthInput } from '@/entities/authInput';
import { authInputWrapStyles } from '@/features/authInputWrap/lib/authInputWrapStyles';
import styles from './ui.module.scss';
import { handleFocus } from '@/features/authInputWrap/lib/handlers/handleFocusError';
import { handleInput } from '@/features/authInputWrap/lib/handlers/handleInput';
import { blurHandler } from '@/features/authInputWrap/lib/handlers/blurHandler';

interface props {
    inputName: string;
    eye?: boolean;
    password?: boolean;
    passwordSignInMode?: boolean;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
    autoComplete: string;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
}

export const AuthInputWrap: FC<props> = ({
    inputName,
    eye = false,
    password = false,
    passwordSignInMode = false,
    autoComplete,
    error,
    setError,
    text,
    setText,
}) => {
    const [secure, setSecure] = useState<string>('');
    const [color, setColor] = useState<string>('#DA4242');

    const style = authInputWrapStyles(color, secure);

    const chooseColor = useCallback(() => {
        if (secure === 'Слабый пароль') setColor('#DA4242');
        else if (secure === 'Средний пароль') setColor('#EDB16A');
        else if (secure === 'Надежный пароль') setColor('#58904F');
        else setColor('#999');
    }, [secure]);

    const onFocus = () =>
        handleFocus([/^Максимальная/, /^Пароль может/], text, error, passwordSignInMode, setError);

    const onInput = (event: FormEvent<HTMLInputElement>) =>
        handleInput(event, password, passwordSignInMode, setText, setError, setSecure);

    const onBlur = () => blurHandler(text, password, passwordSignInMode, setError, setText);

    useEffect(chooseColor, [secure, chooseColor]);

    return (
        <div className={styles.wrap}>
            <AuthInput
                eye={eye}
                inputName={inputName}
                autoComplete={autoComplete}
                errorMessage={error}
                password={password}
                text={text}
                onFocus={onFocus}
                onBlur={onBlur}
                onInput={onInput}
            />
            {!password && (
                <h4 style={{ display: error ? 'block' : 'none' }} className={styles.error}>
                    {error}
                </h4>
            )}
            {passwordSignInMode ? (
                <h4 style={{ display: error ? 'block' : 'none' }} className={styles.error}>
                    {error}
                </h4>
            ) : password && error ? (
                <h4 style={{ display: error ? 'block' : 'none' }} className={styles.error}>
                    {error}
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
