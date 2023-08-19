import { KeyboardEvent, RefObject } from 'react';

export const setButtonActive = (
    event: KeyboardEvent<HTMLInputElement>,
    first: RefObject<HTMLInputElement>,
    second: RefObject<HTMLInputElement>,
    third: RefObject<HTMLInputElement>,
    fourth: RefObject<HTMLInputElement>,
    handleSubmit: () => void,
) => {
    if (isNaN(parseInt(event.key))) {
        if (event.key === 'Backspace' || event.key === 'Delete') {
            const input = event.target as HTMLInputElement;
            if (input.value !== '') {
                input.value = '';
                if (input.id === '4') {
                    setTimeout(() => {
                        third.current?.focus();
                    }, 0);
                } else if (input.id === '3') {
                    setTimeout(() => {
                        second.current?.focus();
                    }, 0);
                } else if (input.id === '2') {
                    setTimeout(() => {
                        first.current?.focus();
                    }, 0);
                }
            }
        }
    } else {
        if (
            first.current?.value !== '' &&
            second.current?.value !== '' &&
            third.current?.value !== '' &&
            fourth.current?.value !== ''
        ) {
            handleSubmit();
        }

        if (first.current?.value !== '') {
            second.current?.focus();
        }
        if (second.current?.value !== '') {
            third.current?.focus();
        }
        if (third.current?.value !== '') {
            fourth.current?.focus();
        }
    }
};
