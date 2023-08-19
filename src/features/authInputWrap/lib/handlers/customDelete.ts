import { Dispatch, KeyboardEvent, SetStateAction } from 'react';

export const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    setText: Dispatch<SetStateAction<string>>,
    text: string,
) => {
    const input = event.target as HTMLInputElement;
    const selectionStart = input.selectionStart as number;
    const selectionEnd = input.selectionEnd as number;

    if (event.key === 'ArrowLeft' && selectionStart === 4) {
        event.preventDefault();
    } else if (selectionStart < 4) {
        input.setSelectionRange(4, 4);
    }

    if (selectionStart !== selectionEnd) {
        setText(text.slice(0, selectionStart) + text.slice(selectionEnd));
        setTimeout(() => {
            input.setSelectionRange(selectionEnd, selectionEnd);
        });
        return;
    }
    if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        const input = event.target as HTMLInputElement;
        const selectionEnd = input.selectionEnd as number;
        const selectionStart = input.selectionStart as number;

        if (selectionStart !== selectionEnd) {
            setText(text.slice(0, selectionStart) + text.slice(selectionEnd));
            setTimeout(() => {
                input.setSelectionRange(selectionEnd, selectionEnd);
            });
            return;
        }

        if (text === '' || text === '+' || text === '+7' || text === '+7 ' || text === '+7 (') {
            return;
        }
        if (/^\s*$/.test(text.slice(-1))) {
            setText(text.slice(0, -3));
            return;
        }
        if (!/^\d$/.test(text.slice(-1))) {
            setText(text.slice(0, -2));
            return;
        }
        setText(text.slice(0, -1));
    }
};
