import { FC, FormEvent, useEffect, useState } from 'react';
import Logo from '@/entities/Logo/ui/ui';
import styles from './ui.module.scss';
import { Gapped } from '@/shared/Gapped';
import { RegisterHelp } from '@/features/authHelp/RegisterHelp';
import { ConfirmationTime } from '@/entities/confirmationTime/ui/ui';
import { useAppSelector } from '@/hooks/useAppSelector';
import { MaskedInput } from '@/shared/MaskedInput';
import { useDispatch } from 'react-redux';
import { getRedemptionCode } from '@/store/features/auth-slice';
import { ThunkDispatch } from 'redux-thunk';

interface props {}

export const ConfirmationForm: FC<props> = ({}) => {
    const [value, setValue] = useState<string>('');

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const mail: string = useAppSelector((state) => state.auth.mail) as string;
    const handleInput = (event: FormEvent<HTMLInputElement>): void => {
        const input = event.target as HTMLInputElement;
        const text = input.value.replace(/\D+/g, '');

        setValue(text);
        input.setSelectionRange(text.length, text.length);
        if (text.length >= 6) {
            handleSubmit(text);
        }
    };

    useEffect(() => {
        dispatch(getRedemptionCode());
    }, [dispatch]);

    const handleSubmit = (text: string): void => {
        console.log(text);
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
                                        На почту {mail} был отправлен код, введите его для
                                        завершения регистрации
                                    </h4>
                                </Gapped>
                                <Gapped alignItems="center" className={styles.inputWrap}>
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
                    <RegisterHelp />
                </Gapped>
            </Gapped>
        </>
    );
};
