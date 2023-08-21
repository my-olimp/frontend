import { KeyboardEvent, RefObject } from 'react';

const INPUT_COUNT = 4;
run
export const setButtonActive = (
    oldEvent: Event,
    inputs: RefObject<HTMLInputElement>[],
    handleSubmit: () => void,
): void => {
    const event = oldEvent as unknown as KeyboardEvent<HTMLInputElement>;
    const key = event.key;

    if (isNaN(parseInt(key))) {
        if (key === 'Backspace' || key === 'Delete') {
            const input = event.target as HTMLInputElement;
            if (input.value !== '') {
                input.value = '';
                const currentIndex = inputs.findIndex((inputRef) => inputRef.current === input);
                if (currentIndex > 0) {
                    setTimeout(() => {
                        inputs[currentIndex - 1].current?.focus();
                    }, 0);
                }
            }
        }
    } else {
        const allInputsFilled = inputs.every((inputRef) => inputRef.current?.value !== '');
        if (allInputsFilled) {
            handleSubmit();
        }

        const currentInput = event.currentTarget;
        const currentIndex = inputs.findIndex((inputRef) => inputRef.current === currentInput);
        if (currentIndex !== -1 && currentIndex < INPUT_COUNT - 1) {
            inputs[currentIndex + 1].current?.focus();
        }
    }
};
