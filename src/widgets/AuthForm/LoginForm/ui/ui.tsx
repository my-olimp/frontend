'use client';
import { FC, useEffect, useState } from 'react';
import styles from './ui.module.scss';
import { AuthInputLabel } from '@/features/authInputLabel';
import { AuthTypeBlock } from '@/features/authTypeBlock';
import { AuthLoginHelp } from '@/features/authLoginHelp';
import { LoginHelp } from '@/features/authHelp/LoginHelp';
import { AuthButton } from '@/entities/buttons/authButton';
import { Gapped } from '@/shared/Gapped/ui/ui';
import Logo from '@/entities/Logo/ui/ui';
import useAuthInput from '@/hooks/useAuthInput';

interface props {}

export const LoginForm: FC<props> = ({}) => {
    const [isButtonDisabled, setButtonDisabled] = useState<'active' | 'disabled'>('disabled');

    const [type, setType] = useState<'mail' | 'number'>('mail');

    const [errorMessage, setErrorMessage, value, setValue] = useAuthInput(type);
    const [passwordErrorMessage, setPasswordErrorMessage, password, setPassword] =
        useAuthInput(type);

    useEffect(() => {
        if (
            value.length !== 0 &&
            password.length !== 0 &&
            errorMessage === 'notError' &&
            passwordErrorMessage === 'notError' &&
            !(type === 'number' && value.length !== 18)
        ) {
            setButtonDisabled('active');
        } else {
            setButtonDisabled('disabled');
        }
    }, [value, password, errorMessage, passwordErrorMessage, type]);

    const handleSubmit = () => {
        console.log(value);
        console.log(password);
    };

    return (
        <>
            <Gapped className={styles.screen} vertical verticalAlign="middle">
                <Gapped className={styles.center} gap="16px" vertical verticalAlign="middle">
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
                                vertical
                                style={{ display: 'flex', width: '100%' }}>
                                <Gapped
                                    vertical
                                    verticalAlign="middle"
                                    alignItems="center"
                                    gap="8px">
                                    <Logo />
                                    <h4 className={styles.text}>Вход в сервис</h4>
                                </Gapped>
                                <AuthTypeBlock type={type} setType={setType} />
                                <Gapped
                                    vertical
                                    verticalAlign="middle"
                                    gap="24px"
                                    style={{
                                        marginBottom: '16px',
                                        display: 'flex',
                                        width: '100%',
                                    }}>
                                    <Gapped
                                        className={styles.inputWrap}
                                        vertical
                                        verticalAlign="middle"
                                        gap="24px"
                                        style={{ display: 'flex', width: '100%' }}>
                                        <AuthInputLabel
                                            mail={type === 'mail'}
                                            number={type === 'number'}
                                            inputName={type === 'mail' ? 'Почта' : 'Номер телефона'}
                                            text={value}
                                            setText={setValue}
                                            type={type}
                                            errorMessage={errorMessage}
                                            setErrorMessage={setErrorMessage}
                                            maxLength={type === 'number' ? 11 : 30}
                                        />
                                        <AuthInputLabel
                                            password={true}
                                            passwordSignInMode={true}
                                            inputName={'Пароль'}
                                            eye={true}
                                            text={password}
                                            setText={setPassword}
                                            type={type}
                                            errorMessage={passwordErrorMessage}
                                            setErrorMessage={setPasswordErrorMessage}
                                        />
                                        <AuthLoginHelp />
                                    </Gapped>
                                    <AuthButton
                                        type="register"
                                        width="fit-content"
                                        height="medium"
                                        use={isButtonDisabled}
                                        onClick={handleSubmit}>
                                        Войти
                                    </AuthButton>
                                </Gapped>
                            </Gapped>
                        </Gapped>
                    </Gapped>
                    <LoginHelp />
                </Gapped>
            </Gapped>
        </>
    );
};
