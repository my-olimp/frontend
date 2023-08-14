import eyeCloseIconRed from '../../../../public/auth/eyeCloseRed.svg';
import eyeCloseIcon from '../../../../public/auth/eyeClose.svg';
import eyeOpenIconRed from '../../../../public/auth/eyeOpenRed.svg';
import eyeOpenIcon from '../../../../public/auth/eyeOpen.svg';
import React, {
    ChangeEvent,
    Dispatch,
    FC,
    FocusEvent,
    FormEvent,
    KeyboardEvent,
    SetStateAction,
    useState,
} from 'react';
import validateEmail from '../lib/validate/validateEmail';
import validatePassword from '../lib/validate/validatePassword';
import styles from './ui.module.scss';
import { match } from 'ts-pattern';
import { MaskedInput } from '@/shared/MaskedInput/ui/ui';

interface props {
    eye?: boolean;
    maxLength?: number;
    inputName: string;
    password: boolean;
    mail: boolean;
    number: boolean;
    errorMessage: string;
    text: string;
    passwordSignInMode: boolean;
    setText: Dispatch<SetStateAction<string>>;
    setErrorMessage: Dispatch<SetStateAction<string>>;
    setSecure?: Dispatch<SetStateAction<string>>;
    id?: string;
}

export const AuthInput: FC<props> = ({
    eye = false,
    maxLength = 26,
    inputName,
    password,
    errorMessage,
    mail,
    number,
    setErrorMessage,
    setSecure,
    text,
    setText,
    passwordSignInMode,
    id,
}) => {
    const [isEyeOpen, setEyeOpen] = useState<boolean>(false);
    const [inputType, setInputType] = useState<'text' | 'password'>(password ? 'password' : 'text');

    const style = {
        input: {
            borderLeft: errorMessage !== 'notError' ? `1px solid #F54135` : `1px solid lightgray`,
            borderTop: errorMessage !== 'notError' ? `1px solid #F54135` : `1px solid lightgray`,
            borderBottom: errorMessage !== 'notError' ? `1px solid #F54135` : `1px solid lightgray`,
            borderRight: eye
                ? 'none'
                : `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}`,
            borderTopRightRadius: eye ? '0' : '8px',
            borderBottomRightRadius: eye ? '0' : '8px',
        },
        icon: {
            backgroundImage: !isEyeOpen
                ? errorMessage !== 'notError'
                    ? `url(${eyeOpenIconRed.src})`
                    : `url(${eyeOpenIcon.src})`
                : errorMessage !== 'notError'
                ? `url(${eyeCloseIconRed.src})`
                : `url(${eyeCloseIcon.src})`,
        },
        iconWrap: {
            display: eye ? 'flex' : 'none',
            borderRight: eye
                ? `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}`
                : 'none',
            borderTop: eye
                ? `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}`
                : 'none',
            borderBottom: eye
                ? `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}`
                : 'none',
        },
    };
    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        const text = input.value;
        const textLength = text.length;

        input.setSelectionRange(textLength + 2, textLength + 2);

        if (!password && textLength <= 18) {
            setText(text);
        }

        if (password && setSecure) {
            setText(text);
            setSecure(validatePassword(text));
        }
        if (passwordSignInMode) {
            const tested = text.match(/^[!@#$%^\w]+$/);
            if (tested) {
                setText(text);
            } else {
                setErrorMessage(
                    'Пароль должен состоять только из букв латиницы верхнего или нижнего регистра, цифр, специальных символов(!@$%^)'
                );
            }
        }

        if (textLength === 0 && setSecure) {
            setSecure('');
        }
        if (textLength === 0) {
            setErrorMessage('notError');
        }
    };

    const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
        if (text === '') {
            setErrorMessage(
                `${event.target.name} не может быть пуст${
                    event.target.name === 'Почта' ? 'ой' : 'ым'
                }!`
            );
        } else if (mail) {
            const validated = validateEmail(text);
            if (validated) {
                setErrorMessage('notError');
            } else {
                setText(text);
                setErrorMessage('Неверный формат почты! Пример: test@example.com');
            }
        }
    };
    const handleFocus = () => {
        if (errorMessage.match(/^Максимальная/) || errorMessage.match(/^Пароль может/)) {
        } else {
            setErrorMessage('notError');
        }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        const selectionStart = input.selectionStart as number;
        const selectionEnd = input.selectionEnd as number;

        if (event.key === 'ArrowLeft' && selectionStart === 4) {
            event.preventDefault();
        } else if (selectionStart < 4) {
            input.setSelectionRange(4, 4);
        }

        if (selectionStart !== selectionEnd) {
            setText(text.slice(0, selectionStart) + text.slice(selectionEnd));
            setTimeout(() => {
                input.setSelectionRange(selectionEnd, selectionEnd);
            });
            return;
        }
        if (event.key === 'Backspace' || event.key === 'Delete') {
            event.preventDefault();
            const input = event.target as HTMLInputElement;
            const selectionEnd = input.selectionEnd as number;
            const selectionStart = input.selectionStart as number;

            if (selectionStart !== selectionEnd) {
                setText(text.slice(0, selectionStart) + text.slice(selectionEnd));
                setTimeout(() => {
                    input.setSelectionRange(selectionEnd, selectionEnd);
                });
                return;
            }

            if (text === '' || text === '+' || text === '+7' || text === '+7 ' || text === '+7 (') {
                return;
            }
            if (/^\s*$/.test(text.slice(-1))) {
                setText(text.slice(0, -3));
                return;
            }
            if (!/^\d$/.test(text.slice(-1))) {
                setText(text.slice(0, -2));
                return;
            }
            setText(text.slice(0, -1));
        }
    };

    return (
        <div className={styles.wrap}>
            {match(number)
                .with(true, () => (
                    <MaskedInput
                        mask={'+7 (999) 999-99-99'}
                        maskPlaceholder={''}
                        value={text}
                        onBlur={(event: FocusEvent<HTMLInputElement>) => blurHandler(event)}
                        onFocus={() => handleFocus()}
                        style={style.input}
                        onKeyDown={(event) => handleKeyDown(event)}
                    >
                        <input
                            style={style.input}
                            className={styles.input}
                            name={inputName}
                            value={text}
                            type="tel"
                            max="10"
                            onInput={(event: FormEvent<HTMLInputElement>) => handleInput(event)}
                        />
                    </MaskedInput>
                ))
                .with(false, () => (
                    <>
                        <input
                            style={style.input}
                            className={styles.input}
                            name={inputName}
                            value={text}
                            type={inputType}
                            id={id}
                            onInput={(event: FormEvent<HTMLInputElement>) => handleInput(event)}
                            onBlur={(event: FocusEvent<HTMLInputElement>) => blurHandler(event)}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                setText(event.target.value)
                            }
                            onFocus={() => handleFocus()}
                        />
                    </>
                ))
                .exhaustive()}
            <div
                style={style.iconWrap}
                className={styles.iconWrap}
                onClick={() => {
                    setInputType(inputType === 'text' ? 'password' : 'text');
                    setEyeOpen(!isEyeOpen);
                }}
            >
                <i style={style.icon} className={styles.icon} draggable="false" />
            </div>
        </div>
    );
};
