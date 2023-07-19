import {FC, useEffect, useState} from 'react';
import { AuthInputLabel } from "@/features/authInputLabel";
import { AuthTypeBlock } from "@/features/authTypeBlock";
import { AuthButton } from "@/entities/buttons/authButton";
import styles from "./ui.module.scss";
import {RegisterRulesAccept} from '@/entities/registerRulesAccept';
import {RegisterHelp} from '@/features/authHelp/RegisterHelp';

interface props {
}
export const RegisterForm: FC<props> = ({ }) => {
    const [errorMailOrNumberMessage, setErrorMailOrNumberMessage] = useState<string>('notError')
    const [errorPasswordMessage, setErrorPasswordMessage] = useState<string>('notError')
    const [errorSecondPasswordMessage, setErrorSecondPasswordMessage] = useState<string>('notError')

    const [mailOrNumber, setMailOrNumber] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [passwordSecondValue, setPasswordSecondValue] = useState<string>('')

    const [isButtonDisabled, setButtonDisabled] = useState<'active' | 'disabled'>('disabled')

    const [type, setType] = useState<"mail" | "number">("mail");

    useEffect(() => {
        if (
            mailOrNumber.length !== 0 &&
            passwordValue.length !== 0 &&
            passwordSecondValue.length !== 0 &&
            !(errorPasswordMessage !== 'notError') &&
            !(errorMailOrNumberMessage !== 'notError') &&
            !(errorSecondPasswordMessage !== 'notError') &&
            passwordValue === passwordSecondValue
        ) {
            setButtonDisabled('active')
        } else {
            setButtonDisabled('disabled')
        }
    }, [mailOrNumber, passwordValue, passwordSecondValue]);

    useEffect(() => {
        if (passwordValue !== passwordSecondValue) {
            setErrorSecondPasswordMessage('Пароли должны совпадать!')
        }
    }, [passwordSecondValue, passwordValue]);

    const handleSubmit = () => {
        console.log(mailOrNumber);
        console.log(passwordValue);
    };

    return (
        <div className={styles.screen}>
            <div className={styles.wrap}>
                <div className={styles.container}>
                    <div className={styles.headerWrap}>
                        <h1 className={styles.header}>MyOlymp</h1>
                        <h4 className={styles.text}>Для создания  учетной записи укажите свои данные:</h4>
                    </div>
                    <AuthTypeBlock type={type} setType={setType} />
                    <div className={styles.inputWrap}>
                        <AuthInputLabel
                            mail={type === 'mail'}
                            number={type === 'number'}
                            inputName={type === 'mail' ? 'Почта' : 'Номер телефона'}
                            text={mailOrNumber}
                            setText={setMailOrNumber}
                            errorMessage={errorMailOrNumberMessage}
                            setErrorMessage={setErrorMailOrNumberMessage}
                        />
                        <AuthInputLabel
                            password={true}
                            passwordSignInMode={false}
                            inputName={"Пароль"}
                            eye={true}
                            text={passwordValue}
                            setText={setPasswordValue}
                            errorMessage={errorPasswordMessage}
                            setErrorMessage={setErrorPasswordMessage}
                        />
                        <AuthInputLabel
                            password={true}
                            passwordSignInMode={true}
                            inputName={"Подтверждение пароля"}
                            eye={true}
                            text={passwordSecondValue}
                            setText={setPasswordSecondValue}
                            errorMessage={errorSecondPasswordMessage}
                            setErrorMessage={setErrorSecondPasswordMessage}
                        />
                    </div>
                    <AuthButton
                        type="register"
                        width="medium"
                        height="medium"
                        use={isButtonDisabled}
                        onClick={handleSubmit}
                    >
                        Зарегистрироваться
                    </AuthButton>
                    <RegisterRulesAccept/>
                </div>
            </div>
            <RegisterHelp/>
        </div>
    );
};
