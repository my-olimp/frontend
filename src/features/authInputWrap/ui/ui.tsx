import {
    Dispatch,
    FC,
    FocusEvent,
    FormEvent,
    KeyboardEvent,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { AuthInput } from '@/entities/authInput';
import { authInputWrapStyles } from '@/features/authInputWrap/lib/authInputWrapStyles';
import styles from './ui.module.scss';
import { handleFocus } from '@/features/authInputWrap/lib/handlers/handleFocusError';
import { handleInput } from '@/features/authInputWrap/lib/handlers/handleInput';
import { handleKeyDown } from '@/features/authInputWrap/lib/handlers/customDelete';
import { blurHandler } from '@/features/authInputWrap/lib/handlers/blurHandler';

interface props {
    inputName: string;
    eye?: boolean;
    password?: boolean;
    mail?: boolean;
    passwordSignInMode?: boolean;
    autoComplete: string;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
    setButton: Dispatch<SetStateAction<'active' | 'disabled'>>;
    type: 'mail' | 'number';
}

export const AuthInputWrap: FC<props> = ({
    inputName,
    eye = false,
    password = false,
    passwordSignInMode = false,
    autoComplete,
    mail = false,
    text,
    setText,
    type,
    setButton,
}) => {
    const [secure, setSecure] = useState<string>('');
    const [color, setColor] = useState<string>('#DA4242');
    const [errorMessage, setErrorMessage] = useState<string>('notError');

    const style = authInputWrapStyles(color, secure);

    const chooseColor = useCallback(() => {
        if (secure === 'Слабый пароль') setColor('#DA4242');
        else if (secure === 'Средний пароль') setColor('#EDB16A');
        else if (secure === 'Надежный пароль') setColor('#58904F');
        else setColor('#999');
    }, [secure]);

    const onFocus = () =>
        handleFocus([/^Максимальная/, /^Пароль может/], errorMessage, setErrorMessage);

    const onInput = (event: FormEvent<HTMLInputElement>) =>
        handleInput(event, password, passwordSignInMode, setText, setErrorMessage, setSecure);

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) =>
        handleKeyDown(event, setText, text);

    const onBlur = (event: FocusEvent<HTMLInputElement>) =>
        blurHandler(event, text, mail, setErrorMessage, setText);

    useEffect(() => {
        if (
            text.length &&
            errorMessage === 'notError' &&
            (secure === 'Надежный пароль' || secure === 'Средний пароль') &&
            !(type === 'number' && text.length !== 18)
        ) {
            setButton('active');
        } else {
            setButton('disabled');
        }
    }, [text, errorMessage, type, setButton, secure]);

    useEffect(chooseColor, [secure, chooseColor]);

    useEffect(() => {
        setSecure('');
        setErrorMessage('notError');
    }, [type]);

    return (
        <div className={styles.wrap}>
            <AuthInput
                eye={eye}
                inputName={inputName}
                autoComplete={autoComplete}
                errorMessage={errorMessage}
                password={password}
                text={text}
                mask={!password && !mail ? '+7 (999) 999-99-99' : undefined}
                onFocus={onFocus}
                onBlur={onBlur}
                onInput={onInput}
                onKeyDown={onKeyDown}
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
