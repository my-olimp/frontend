'use client';

import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
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
import { useEventListener } from 'usehooks-ts';

interface props {}

export const RegisterForm: FC<props> = ({}) => {
    const formRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch<AppDispatch>();

    const [isButtonDisabled, setButton] = useState<'active' | 'disabled'>('disabled');

    const [type, setType] = useState<'mail' | 'number'>('mail');

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
        if (type === 'number' && value.length !== 18) {
            setButton('disabled');
        }
    }, [password, repeatPassword, value, valueError, passwordError, repeatPasswordError, type]);

    const handleSubmit = () => {
        dispatch(
            mailOrNumberData({
                mailOrPhone: value,
                type: type,
            }),
        );
        router.push('/confirmation');
    };

    useEventListener(
        'keydown',
        (event: Event) => {
            event.preventDefault();
            document.activeElement instanceof HTMLElement && document.activeElement.blur();
            const normalEvent = event as unknown as KeyboardEvent<HTMLDivElement>;

            if (normalEvent.key === 'Tab') {
                setType(type === 'mail' ? 'number' : 'mail');
            }
        },
        formRef,
    );

    return (
        <div>
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
                            <form>
                                <Gapped
                                    className={styles.inputWrap}
                                    vertical
                                    verticalAlign="middle"
                                    gap="16px"
                                    style={{ display: 'flex', width: '100%' }}>
                                    <AuthInputWrap
                                        mail={type === 'mail'}
                                        inputName={type === 'mail' ? 'Почта' : 'Номер телефона'}
                                        text={value}
                                        setText={setValue}
                                        type={type}
                                        autoComplete={type === 'mail' ? 'email' : 'tel'}
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
                                        type={type}
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
                                        type={type}
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
                    <RegisterHelp />
                </Gapped>
            </Gapped>
        </div>
    );
};
