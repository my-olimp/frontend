'use client';
import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import styles from './ui.module.scss';
import { AuthTypeBlock } from '@/features/authTypeBlock';
import { AuthLoginHelp } from '@/features/authLoginHelp';
import { LoginHelp } from '@/features/authHelp/LoginHelp';
import { AuthButton } from '@/entities/buttons/authButton';
import { Gapped } from '@/shared/Gapped/ui/ui';
import Logo from '@/entities/Logo/ui/ui';
import { AuthInputWrap, validateEmail } from '@/features/authInputWrap';
import { useEventListener } from 'usehooks-ts';

interface props {}

export const LoginForm: FC<props> = ({}) => {
    const formRef = useRef<HTMLDivElement>(null);
    const [isButtonDisabled, setButton] = useState<'active' | 'disabled'>('disabled');

    const [value, setValue] = useState<string>('');
    const [valueError, setValueError] = useState<string>('');

    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const [type, setType] = useState<'mail' | 'number'>('mail');

    useEffect(() => {
        if (value.length && password.length) {
            if (type !== 'mail') {
                setButton('active');
            } else {
                if (validateEmail(value)) {
                    setButton('active');
                }
            }
        }
        if (valueError || passwordError) {
            setButton('disabled');
        }
        if (type === 'number' && value.length !== 18) {
            setButton('disabled');
        }
    }, [value, password, passwordError, valueError, type]);

    useEffect(() => {
        setButton('disabled');
    }, []);

    const handleSubmit = () => {
        console.log(value, password);
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
        <div ref={formRef}>
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
                                    <form>
                                        <Gapped
                                            className={styles.inputWrap}
                                            vertical
                                            verticalAlign="middle"
                                            gap="24px"
                                            style={{ display: 'flex', width: '100%' }}>
                                            <AuthInputWrap
                                                mail={type === 'mail'}
                                                inputName={
                                                    type === 'mail' ? 'Почта' : 'Номер телефона'
                                                }
                                                text={value}
                                                setText={setValue}
                                                type={type}
                                                autoComplete={type === 'mail' ? 'email' : 'tel'}
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
                                                type={type}
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
        </div>
    );
};
