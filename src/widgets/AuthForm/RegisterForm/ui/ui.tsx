'use client';

import { FC, useEffect, useState } from 'react';
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
import { AuthInputWrap } from '@/features/authInputWrap';

interface props {}

export const RegisterForm: FC<props> = ({}) => {
    const dispatch = useDispatch<AppDispatch>();

    const [isButtonDisabled, setButton] = useState<'active' | 'disabled'>('disabled');

    const [type, setType] = useState<'mail' | 'number'>('mail');

    const [value, setValue] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const router = useRouter();

    useEffect(() => {
        if (password === repeatPassword) {
            setButton('active');
        } else {
            setButton('disabled');
        }
    }, [password, repeatPassword]);

    const handleSubmit = () => {
        dispatch(
            mailOrNumberData({
                mailOrPhone: value,
                type: type,
            }),
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
                            <form>
                                <Gapped
                                    className={styles.inputWrap}
                                    vertical
                                    verticalAlign="middle"
                                    gap="16px"
                                    style={{ display: 'flex', width: '100%' }}
                                >
                                    <AuthInputWrap
                                        mail={type === 'mail'}
                                        inputName={type === 'mail' ? 'Почта' : 'Номер телефона'}
                                        text={value}
                                        setText={setValue}
                                        type={type}
                                        setButton={setButton}
                                        autoComplete={type === 'mail' ? 'email' : 'tel'}
                                    />
                                    <AuthInputWrap
                                        password={true}
                                        passwordSignInMode={false}
                                        inputName={'Пароль'}
                                        eye={true}
                                        text={password}
                                        setText={setPassword}
                                        type={type}
                                        setButton={setButton}
                                        autoComplete={'new-password'}
                                    />
                                    <AuthInputWrap
                                        password={true}
                                        passwordSignInMode={true}
                                        inputName={'Подтверждение пароля'}
                                        eye={true}
                                        text={repeatPassword}
                                        type={type}
                                        setText={setRepeatPassword}
                                        setButton={setButton}
                                        autoComplete={'new-password'}
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
                            </form>
                        </Gapped>
                    </Gapped>
                    <RegisterHelp />
                </Gapped>
            </Gapped>
        </>
    );
};
