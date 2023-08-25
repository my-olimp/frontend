export const handleFocus = (
    bannedStrings: RegExp[],
    text: string,
    errorMessage: string,
    passwordSignInMode: boolean,
    setErrorMessage: Dispatch<SetStateAction<string>>,
) => {
    const tested = text.match(/^[!@#$%^\w]+$/);

    if (tested) {
        const containsBannedString = bannedStrings.some((bannedString) =>
            errorMessage?.match(bannedString),
        );

        if (!containsBannedString) {
            setErrorMessage('');
        }
    }

    if (!tested && passwordSignInMode) {
        setErrorMessage(
            'Пароль должен состоять только из букв латиницы верхнего или нижнего регистра, цифр, специальных символов(!@$%^)',
        );
    }
};

import { Dispatch, SetStateAction } from 'react';
