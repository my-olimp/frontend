import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useAuthInput(type: 'mail' | 'number') {
    const [errorMessage, setErrorMessage] = useState<string | 'notError'>('notError');
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        setErrorMessage('notError');
        setValue('');
    }, [type]);

    return [errorMessage, setErrorMessage, value, setValue] as [
        string,
        Dispatch<SetStateAction<string>>,
        string,
        Dispatch<SetStateAction<string>>
    ];
}
