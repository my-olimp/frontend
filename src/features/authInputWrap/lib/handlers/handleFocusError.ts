export const handleFocus = (
    bannedStrings: RegExp[],
    text: string,
    errorMessage: string,
    passwordSignInMode: boolean,
    setErrorMessage: Dispatch<SetStateAction<string>>,
) => {
    const tested = text.match(/^[!._@#$%^\w]+$/);

    if (tested) {
        const containsBannedString = bannedStrings.some((bannedString) =>
            errorMessage?.match(bannedString),
        );

        if (!containsBannedString) {
            setErrorMessage('');
        }
    }

    if (!tested && passwordSignInMode && text !== '') {
        setErrorMessage(
            'Пароль должен состоять только из букв латиницы верхнего или нижнего регистра, цифр, точки, нижнего подчёркивания и специальных символов(!@#$%^)',
        );
    }
};

import { Dispatch, SetStateAction } from 'react';
