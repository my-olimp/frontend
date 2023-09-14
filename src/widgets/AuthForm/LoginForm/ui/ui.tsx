'use client';
import Logo from '@/entities/Logo/ui/ui';
import { AuthButton } from '@/entities/buttons/authButton';
import { AuthHelp } from '@/features/authHelp/LoginHelp';
import { AuthLoginHelp } from '@/features/authHelp/authLoginHelp';
import { AuthInputWrap, validateEmail } from '@/features/authInputWrap';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Gapped } from '@/shared/Gapped/ui/ui';
import { Login } from '@/store/features/auth-slice';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import styles from './ui.module.scss';

interface props {}

export const LoginForm: FC<props> = ({}) => {
    const [isButtonDisabled, setButton] = useState<'active' | 'disabled'>('disabled');

    const [value, setValue] = useState<string>('');
    const [valueError, setValueError] = useState<string>('');

    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
    const { user, error } = useAppSelector((state) => state.auth);

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
        dispatch(Login({ email: value, password: password }));
    };

    useEffect(() => {
        if (user && !error) {
            push('/main');
        }
    }, [user, error]);

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
                <AuthHelp link={'/signup'} linkText={'Зарегистрироваться'} />
            </Gapped>
        </Gapped>
    );
};
