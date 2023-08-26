export const handleFocus = (
    bannedStrings: RegExp[],
    errorMessage: string,
    setErrorMessage: Dispatch<SetStateAction<string>>,
) => {
    const containsBannedString = bannedStrings.some((bannedString) =>
        errorMessage?.match(bannedString),
    );

    if (!containsBannedString) {
        setErrorMessage('');
    }
};

import { Dispatch, SetStateAction } from 'react';
