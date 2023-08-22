import { Dispatch, SetStateAction } from 'react';
import { validateEmail } from '@/features/authInputWrap/lib/validate/validateEmail';

export const blurHandler = (
    text: string,
    mail: boolean,
    setErrorMessage: Dispatch<SetStateAction<string>>,
    setText: Dispatch<SetStateAction<string>>,
) => {
    if (text === '') {
        setErrorMessage(`Это поле не может быть пустым`);
    } else if (mail && !validateEmail(text)) {
        setText(text);
        setErrorMessage('Неверный формат почты, пример: test@example.com');
    } else {
        setErrorMessage('');
    }
};
