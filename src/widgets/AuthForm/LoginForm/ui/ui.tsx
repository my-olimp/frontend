'use client';
import { FC, useState } from 'react';
import styles from './ui.module.scss';
import { AuthTypeBlock } from '@/features/authTypeBlock';
import { AuthLoginHelp } from '@/features/authLoginHelp';
import { LoginHelp } from '@/features/authHelp/LoginHelp';
import { AuthButton } from '@/entities/buttons/authButton';
import { Gapped } from '@/shared/Gapped/ui/ui';
import Logo from '@/entities/Logo/ui/ui';
import { AuthInputWrap } from '@/features/authInputWrap';
import { useRouter } from 'next/navigation';

interface props {}

export const LoginForm: FC<props> = ({}) => {
    const router = useRouter();

    const [isButtonDisabled, setButton] = useState<'active' | 'disabled'>('disabled');

    const [value, setValue] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [type, setType] = useState<'mail' | 'number'>('mail');

    const handleSubmit = () => {
        router.push('/confirmation');
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
                                                setButton={setButton}
                                                autoComplete={type === 'mail' ? 'email' : 'tel'}
                                            />
                                            <AuthInputWrap
                                                password={true}
                                                passwordSignInMode={true}
                                                inputName={'Пароль'}
                                                eye={true}
                                                text={password}
                                                setText={setPassword}
                                                type={type}
                                                setButton={setButton}
                                                autoComplete={'current-password'}
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
                                    </form>
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
