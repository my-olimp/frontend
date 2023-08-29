import { Dispatch, SetStateAction } from 'react';
import { validateEmail } from '@/features/authInputWrap/lib/validate/validateEmail';

export const blurHandler = (
    text: string,
    password: boolean,
    passwordSignInMode: boolean,
    setErrorMessage: Dispatch<SetStateAction<string>>,
    setText: Dispatch<SetStateAction<string>>,
) => {
    const tested = text.match(/^[!@#$%^\w]+$/);

    if (text === '') {
        setErrorMessage(`Это поле не может быть пустым`);
    } else if (!password && !validateEmail(text)) {
        setText(text);
        setErrorMessage('Неверный формат почты, пример: test@example.com');
    } else if (!tested && passwordSignInMode && text !== '') {
        setErrorMessage(
            'Пароль должен состоять только из букв латиницы верхнего или нижнего регистра, цифр, специальных символов(!@$%^)',
        );
    } else {
        setErrorMessage('');
    }
};
