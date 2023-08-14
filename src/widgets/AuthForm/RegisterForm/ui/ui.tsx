'use client';

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
import useAuthInput from '@/hooks/useAuthInput';

interface props {}

export const RegisterForm: FC<props> = ({}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [isButtonDisabled, setButtonDisabled] = useState<'active' | 'disabled'>('disabled');
    const [type, setType] = useState<'mail' | 'number'>('mail');
    const [errorMessage, setErrorMessage, value, setValue] = useAuthInput(type);

    const [passwordErrorMessage, setPasswordErrorMessage, password, setPassword] =
        useAuthInput(type);

    const [repeatErrorMessage, setRepeatErrorMessage, repeatPassword, setRepeatPassword] =
        useAuthInput(type);
    const router = useRouter();
    useEffect(() => {
        if (
            value.length !== 0 &&
            password.length !== 0 &&
            repeatPassword.length !== 0 &&
            !(passwordErrorMessage !== 'notError') &&
            !(errorMessage !== 'notError') &&
            !(repeatErrorMessage !== 'notError') &&
            password !== repeatPassword &&
            password !== '' &&
            repeatPassword !== '' &&
            !(type === 'number' && value.length !== 18)
        ) {
            setButtonDisabled('active');
        } else {
            setButtonDisabled('disabled');
        }
    }, [
        value,
        password,
        repeatPassword,
        type,
        passwordErrorMessage,
        errorMessage,
        repeatErrorMessage,
    ]);

    const handleSubmit = () => {
        dispatch(
            mailOrNumberData({
                mailOrPhone: value,
                type: type,
            })
        );
        router.push('/confirmation');
    };

    return (
        <>
            <Gapped className={styles.form} vertical verticalAlign="middle">
                <Gapped
                    gap="0px"
                    vertical
                    verticalAlign="middle"
                    style={{ display: 'flex', width: '100%' }}
                >
                    <Gapped className={styles.wrap} vertical gap="16px" verticalAlign="middle">
                        <Gapped
                            className={styles.headerWrap}
                            gap="24px"
                            verticalAlign="middle"
                            vertical
                        >
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
                                style={{ display: 'flex', width: '100%' }}
                            >
                                <AuthInputLabel
                                    mail={type === 'mail'}
                                    number={type === 'number'}
                                    inputName={type === 'mail' ? 'Почта' : 'Номер телефона'}
                                    text={value}
                                    setText={setValue}
                                    type={type}
                                    errorMessage={errorMessage}
                                    setErrorMessage={setErrorMessage}
                                />{' '}
                                <AuthInputLabel
                                    password={true}
                                    passwordSignInMode={false}
                                    inputName={'Пароль'}
                                    eye={true}
                                    text={password}
                                    setText={setPassword}
                                    type={type}
                                    errorMessage={passwordErrorMessage}
                                    setErrorMessage={setPasswordErrorMessage}
                                />
                                <AuthInputLabel
                                    password={true}
                                    passwordSignInMode={true}
                                    inputName={'Подтверждение пароля'}
                                    eye={true}
                                    text={repeatPassword}
                                    type={type}
                                    setText={setRepeatPassword}
                                    errorMessage={repeatErrorMessage}
                                    setErrorMessage={setRepeatErrorMessage}
                                />
                                <AuthButton
                                    type="register"
                                    width="medium"
                                    height="medium"
                                    btnStyle={{ width: '100%' }}
                                    use={isButtonDisabled}
                                    onClick={handleSubmit}
                                >
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
