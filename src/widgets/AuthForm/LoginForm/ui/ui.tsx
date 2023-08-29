'use client';
import { FC, useEffect, useState } from 'react';
import styles from './ui.module.scss';
import { AuthLoginHelp } from '@/features/authHelp/authLoginHelp';
import { LoginHelp } from '@/features/authHelp/LoginHelp';
import { AuthButton } from '@/entities/buttons/authButton';
import { Gapped } from '@/shared/Gapped/ui/ui';
import Logo from '@/entities/Logo/ui/ui';
import { AuthInputWrap, validateEmail } from '@/features/authInputWrap';
import { useRouter } from 'next/navigation';

interface props {}

export const LoginForm: FC<props> = ({}) => {
    const [isButtonDisabled, setButton] = useState<'active' | 'disabled'>('disabled');

    const [value, setValue] = useState<string>('');
    const [valueError, setValueError] = useState<string>('');

    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const { push } = useRouter();

    useEffect(() => {
        if (value.length && password.length) {
            if (validateEmail(value)) {
                setButton('active');
            }
        }
        if (valueError || passwordError) {
            setButton('disabled');
        }
    }, [value, password, passwordError, valueError]);

    useEffect(() => {
        setButton('disabled');
    }, []);

    const handleSubmit = () => {
        push('/main');
    };

    return (
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
                            <Gapped vertical verticalAlign="middle" alignItems="center" gap="8px">
                                <Logo />
                                <h4 className={styles.text}>Вход в сервис</h4>
                            </Gapped>
                            <Gapped
                                vertical
                                verticalAlign="middle"
                                gap="24px"
                                style={{
                                    marginBottom: '16px',
                                    display: 'flex',
                                    width: '100%',
                                }}>
                                <form>
                                    <Gapped
                                        className={styles.inputWrap}
                                        vertical
                                        verticalAlign="middle"
                                        gap="24px"
                                        style={{ display: 'flex', width: '100%' }}>
                                        <AuthInputWrap
                                            inputName={'Почта'}
                                            text={value}
                                            setText={setValue}
                                            autoComplete={'email'}
                                            error={valueError}
                                            setError={setValueError}
                                        />
                                        <AuthInputWrap
                                            password={true}
                                            passwordSignInMode={true}
                                            inputName={'Пароль'}
                                            eye={true}
                                            text={password}
                                            setText={setPassword}
                                            autoComplete={'current-password'}
                                            error={passwordError}
                                            setError={setPasswordError}
                                        />
                                        <AuthLoginHelp />
                                        <Gapped gap="24px" />
                                    </Gapped>
                                    <AuthButton
                                        type="register"
                                        width="fit-content"
                                        height="medium"
                                        use={isButtonDisabled}
                                        onClick={handleSubmit}>
                                        Войти
                                    </AuthButton>
                                </form>
                            </Gapped>
                        </Gapped>
                    </Gapped>
                </Gapped>
                <LoginHelp />
            </Gapped>
        </Gapped>
    );
};
