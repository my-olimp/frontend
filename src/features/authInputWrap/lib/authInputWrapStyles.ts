import { match } from 'ts-pattern';

export const authInputWrapStyles = (color: string, secure: string) => {
    const width = match(secure)
        .with('Слабый пароль', () => '33%')
        .with('Средний пароль', () => '66%')
        .with('Надежный пароль', () => '100%')
        .otherwise(() => '100%');

    return {
        secure: {
            color: color,
        },
        secureBar: {
            backgroundColor: color,
            width: width,
        },
        secureWrap: {
            display: secure !== '' ? 'flex' : 'none',
        },
    };
};
