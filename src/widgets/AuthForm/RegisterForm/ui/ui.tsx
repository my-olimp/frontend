'use client';

import { FC, useEffect, useState } from 'react';
import { AuthButton } from '@/entities/buttons/authButton';
import styles from './ui.module.scss';
import { RegisterRulesAccept } from '@/entities/registerRulesAccept';
import { Gapped } from '@/shared/Gapped/ui/ui';
import Logo from '@/entities/Logo/ui/ui';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AuthInputWrap } from '@/features/authInputWrap';
import { GetOTC } from '@/store/features/auth-slice';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/store/store';
import { AnyAction } from 'redux';
import { AuthHelp } from '@/features/authHelp/LoginHelp';

interface props {}

export const RegisterForm: FC<props> = ({}) => {
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const [isButtonDisabled, setButton] = useState<'active' | 'disabled'>('disabled');

    const [value, setValue] = useState<string>('');
    const [valueError, setValueError] = useState<string>('');

    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [repeatPasswordError, setRepeatPasswordError] = useState<string>('');

    const router = useRouter();

    useEffect(() => {
        setButton('disabled');
    }, []);

    useEffect(() => {
        if (value.length && password.length && repeatPassword.length) {
            setButton('active');
        }
        if (password === repeatPassword && password.length && repeatPassword.length) {
            setButton('active');
        } else {
            setButton('disabled');
        }
        if (valueError || passwordError || repeatPasswordError) {
            setButton('disabled');
        }
    }, [password, repeatPassword, value, valueError, passwordError, repeatPasswordError]);

    const handleSubmit = async () => {
        await dispatch(GetOTC({ email: value, password: password }));
        router.push('signup/confirmation');
    };

    return (
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
                        <form>
                            <Gapped
                                className={styles.inputWrap}
                                vertical
                                verticalAlign="middle"
                                gap="16px"
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
                                    passwordSignInMode={false}
                                    inputName={'Пароль'}
                                    eye={true}
                                    text={password}
                                    setText={setPassword}
                                    autoComplete={'new-password'}
                                    error={passwordError}
                                    setError={setPasswordError}
                                />
                                <AuthInputWrap
                                    password={true}
                                    passwordSignInMode={true}
                                    inputName={'Подтверждение пароля'}
                                    eye={true}
                                    text={repeatPassword}
                                    setText={setRepeatPassword}
                                    autoComplete={'new-password'}
                                    error={repeatPasswordError}
                                    setError={setRepeatPasswordError}
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
                        </form>
                    </Gapped>
                </Gapped>
                <AuthHelp link={'/signin'} linkText={'Войти'} />
            </Gapped>
        </Gapped>
    );
};
