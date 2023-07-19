export default function validatePassword(password: string) {

    if (password.length < 5) {
        return 'Слабый пароль'
    }

    if (password.match(/^[a-z]+$/) || password.match(/^\d+$/)) {
        return "Слабый пароль";
    }
    if (
        password.match(/^[a-z\d]+$/) ||
        password.match(/^(?=.*[a-z!@#$%^&*])[^A-Z\d]+$/) ||
        password.match(/^[\d!@#$%^&*]+$/) ||
        password.match(/^[a-zA-Z]+$/)
    ) {
        return "Средний пароль";
    }
    if (password.match(/^(?=.*[a-z\d!@#$%^&*])|(?=.*[A-Z\d]).+$/)) {
        return "Надежный пароль";
    }


    return 'Пароль может состоять только из английских букв верхнего и нижнего регистра, цифр, и специальных символов.';
}

