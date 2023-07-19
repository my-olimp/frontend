export default function validatePassword(password: string) {

    if (password.length < 5) {
        return 'password rules'
    }

    if (password.match(/^[a-z]+$/) || password.match(/^\d+$/)) {
        return "Слабый пароль";
    }
    if (password.match(/^[a-z\d]+$/) || password.match(/^(?=.*[a-z!@#$%^&*])[^A-Z\d]+$/) || password.match(/^[\d!@#$%^&*]+$/)) {
        return "Средний пароль";
    }
    if (password.match(/^(?=.*[a-z\d!@#$%^&*])|(?=.*[A-Z\d]).+$/)) {
        return "Надежный пароль";
    }


    return 'Ошибка, обратитесь в поддержку';
}

