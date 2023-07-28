/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { AuthInputLabel } from '@/features/authInputLabel';
import { AuthTypeBlock } from '@/features/authTypeBlock';
import { AuthButton } from '@/entities/buttons/authButton';
import styles from './ui.module.scss';
import { RegisterRulesAccept } from '@/entities/registerRulesAccept';
import { RegisterHelp } from '@/features/authHelp/RegisterHelp';
import { Gapped } from '@/shared/Gapped/ui/ui';
import Logo from '@/entities/Logo/ui/ui';
import { mailOrNumberData } from '@/store/features/auth-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';

interface props {}

export const RegisterForm: FC<props> = ({}) => {
    const [errorMailOrNumberMessage, setErrorMailOrNumberMessage] = useState<string>('notError');
    const [errorPasswordMessage, setErrorPasswordMessage] = useState<string>('notError');
    const [errorSecondPasswordMessage, setErrorSecondPasswordMessage] =
        useState<string>('notError');
    const [mailOrNumber, setMailOrNumber] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [passwordSecondValue, setPasswordSecondValue] = useState<string>('');
    const [isButtonDisabled, setButtonDisabled] = useState<'active' | 'disabled'>('disabled');
    const dispatch = useDispatch<AppDispatch>();
    const [type, setType] = useState<'mail' | 'number'>('mail');
    const router = useRouter();
    useEffect(() => {
        if (
            mailOrNumber.length !== 0 &&
            passwordValue.length !== 0 &&
            passwordSecondValue.length !== 0 &&
            !(errorPasswordMessage !== 'notError') &&
            !(errorMailOrNumberMessage !== 'notError') &&
            !(errorSecondPasswordMessage !== 'notError') &&
            passwordValue === passwordSecondValue &&
            !(type === 'number' && mailOrNumber.length !== 18)
        ) {
            setButtonDisabled('active');
        } else {
            setButtonDisabled('disabled');
        }
    }, [mailOrNumber, passwordValue, passwordSecondValue, type]);

    useEffect(() => {
        if (passwordValue !== passwordSecondValue && passwordValue === ' ') {
            setErrorSecondPasswordMessage('Пароли должны совпадать!');
            console.log(passwordValue);
        }
    }, [passwordSecondValue, passwordValue]);

    useEffect(() => {
        setMailOrNumber('');
        setPasswordValue('');
        setPasswordSecondValue('');
        setErrorMailOrNumberMessage('notError');
        setErrorPasswordMessage('notError');
        setErrorSecondPasswordMessage('notError');
    }, [type]);

    const handleSubmit = () => {
        dispatch(mailOrNumberData(mailOrNumber));
        router.push('/confirmation');
        console.log(mailOrNumber);
        console.log(passwordValue);
        console.log(type);
    };

    return (
        <>
            <Gapped className={styles.form} vertical verticalAlign="middle">
                <Gapped
                    gap="0px"
                    vertical
                    verticalAlign="middle"
                    style={{ display: 'flex', width: '100%' }}>
                    <Gapped className={styles.wrap} vertical gap="16px" verticalAlign="middle">
                        <Gapped
                            className={styles.headerWrap}
                            gap="24px"
                            verticalAlign="middle"
                            vertical>
                            <Gapped vertical verticalAlign="middle" alignItems="center" gap="8px">
                                <Logo />
                                <h4 className={styles.text}>
                                    Для создания учетной записи укажите свои данные:
                                </h4>
                            </Gapped>
                            <AuthTypeBlock type={type} setType={setType} />

                            <Gapped
                                className={styles.inputWrap}
                                vertical
                                verticalAlign="middle"
                                gap="16px"
                                style={{ display: 'flex', width: '100%' }}>
                                <AuthInputLabel
                                    mail={type === 'mail'}
                                    number={type === 'number'}
                                    inputName={type === 'mail' ? 'Почта' : 'Номер телефона'}
                                    text={mailOrNumber}
                                    setText={setMailOrNumber}
                                    errorMessage={errorMailOrNumberMessage}
                                    setErrorMessage={setErrorMailOrNumberMessage}
                                />{' '}
                                <AuthInputLabel
                                    password={true}
                                    passwordSignInMode={false}
                                    inputName={'Пароль'}
                                    eye={true}
                                    text={passwordValue}
                                    setText={setPasswordValue}
                                    errorMessage={errorPasswordMessage}
                                    setErrorMessage={setErrorPasswordMessage}
                                />
                                <AuthInputLabel
                                    password={true}
                                    passwordSignInMode={true}
                                    inputName={'Подтверждение пароля'}
                                    eye={true}
                                    text={passwordSecondValue}
                                    setText={setPasswordSecondValue}
                                    errorMessage={errorSecondPasswordMessage}
                                    setErrorMessage={setErrorSecondPasswordMessage}
                                />
                                <AuthButton
                                    type="register"
                                    width="medium"
                                    height="medium"
                                    btnStyle={{ width: '100%' }}
                                    use={isButtonDisabled}
                                    onClick={handleSubmit}>
                                    Зарегистрироваться
                                </AuthButton>
                                <RegisterRulesAccept />
                            </Gapped>
                        </Gapped>
                    </Gapped>
                    <RegisterHelp />
                </Gapped>
            </Gapped>
        </>
    );
};
