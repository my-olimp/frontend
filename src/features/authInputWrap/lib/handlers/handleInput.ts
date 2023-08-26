import { Dispatch, FormEvent, SetStateAction } from 'react';
import validatePassword from '@/features/authInputWrap/lib/validate/validatePassword';

export const handleInput = (
    event: FormEvent<HTMLInputElement>,
    password: boolean,
    passwordSignInMode: boolean,
    setText: Dispatch<SetStateAction<string>>,
    setErrorMessage: Dispatch<SetStateAction<string>>,
    setSecure?: Dispatch<SetStateAction<string>>,
) => {
    const input = event.target as HTMLInputElement;
    const text = input.value;
    const textLength = text.length;

    console.log(text);

    input?.setSelectionRange(textLength + 2, textLength + 2);
    setText(text);

    if (password && setSecure) {
        setSecure(validatePassword(text));
    }
    if (passwordSignInMode) {
        const tested = text.match(/^[!@#$%^\w]+$/);
        console.log(tested);
        if (!tested) {
            setErrorMessage(
                'Пароль должен состоять только из букв латиницы верхнего или нижнего регистра, цифр, специальных символов(!@$%^)',
            );
        } else {
            setErrorMessage('');
        }
    }

    if (textLength === 0 && setSecure) {
        setSecure('');
    }
    if (textLength === 0) {
        setErrorMessage('');
    }
};
