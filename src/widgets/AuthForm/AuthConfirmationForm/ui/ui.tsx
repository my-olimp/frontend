'use client';
import Logo from '@/entities/Logo/ui/ui';
import { ConfirmationTime } from '@/entities/confirmationTime/ui/ui';
import { AuthHelp } from '@/features/authHelp/LoginHelp';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Gapped } from '@/shared/Gapped';
import { MaskedInput } from '@/shared/MaskedInput';
import { Register } from '@/store/features/auth-slice';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import styles from './ui.module.scss';

interface props {}

export const ConfirmationForm: FC<props> = ({}) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
    const { email, password, code } = useAppSelector((state) => state.auth);

    const { push } = useRouter();
    const handleInput = (event: FormEvent<HTMLInputElement>): void => {
        const input = event.target as HTMLInputElement;
        const text = input.value.replace(/\D+/g, '');

        setValue(text);
        input.setSelectionRange(text.length, text.length);
        if (text.length >= 6) {
            handleSubmit(parseInt(text));
        }
    };
    // TODO: ДЛЯ ДЕБАГА
    useEffect(() => {
        console.log(code);
        if (code !== null) {
            alert(code);
        }
    }, [code]);

    useEffect(() => {
        if (!code || !email) {
            push('/signup');
        }
    }, [code, push, email]);

    const handleSubmit = async (text: number): Promise<void> => {
        if (text !== code) {
            setError('Неверный код, попробуйте еще раз');
        } else {
            await dispatch( 
                Register({
                    email: email,
                    password: password,
                    code: text,
                }),
            );
            push('/signup/persondata');
        }
    };

    return (
        <>
            <Gapped className={styles.screen} vertical verticalAlign="middle">
                <Gapped className={styles.center} gap="0px" vertical verticalAlign="middle">
                    <Gapped
                        gap="0px"
                        vertical
                        verticalAlign="middle"
                        style={{ display: 'flex', width: '100%' }}>
                        <Gapped
                            className={styles.wrap}
                            vertical
                            verticalAlign="middle"
                            style={{ zIndex: '99' }}>
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
                                    <h4 className={styles.text}>Подтверждение почты</h4>
                                    <h4 className={styles.subTitle}>
                                        На почту {email} был отправлен код, введите его для
                                        завершения регистрации
                                    </h4>
                                </Gapped>
                                <Gapped
                                    alignItems="center"
                                    gap="16px"
                                    vertical={false}
                                    className={styles.inputWrap}>
                                    <MaskedInput
                                        value={value}
                                        mask="999 999"
                                        alwaysShowMask
                                        onChange={(event) => handleInput(event)}>
                                        <input
                                            className={styles.input}
                                            autoComplete="one-time-code"
                                        />
                                    </MaskedInput>
                                    {<h1 className={styles.error}>{error}</h1>}
                                </Gapped>
                            </Gapped>
                            <Gapped
                                className={styles.confTime}
                                verticalAlign="middle"
                                vertical
                                style={{ display: 'flex', width: '100%' }}>
                                <ConfirmationTime />
                            </Gapped>
                        </Gapped>
                    </Gapped>
                    <AuthHelp link={'/signin'} linkText={'Войти'} />
                </Gapped>
            </Gapped>
        </>
    );
};
