import { Dispatch, SetStateAction } from 'react';

export const handleFocus = (
    bannedStrings: RegExp[],
    errorMessage: string,
    setErrorMessage: Dispatch<SetStateAction<string>>,
) => {
    const containsBannedString = bannedStrings.some((bannedString) =>
        errorMessage.match(bannedString),
    );

    if (!containsBannedString) {
        setErrorMessage('notError');
    }
};
