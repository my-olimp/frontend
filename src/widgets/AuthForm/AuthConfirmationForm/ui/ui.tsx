import { FC, FormEvent, KeyboardEvent, RefObject, useRef, useState } from 'react';
import Logo from '@/entities/Logo/ui/ui';
import styles from './ui.module.scss';
import { Gapped } from '@/shared/Gapped';
import { Input } from '@/entities/input';
import { useEventListener } from 'usehooks-ts';
import { RegisterHelp } from '@/features/authHelp/RegisterHelp';
import { ConfirmationTime } from '@/entities/confirmationTime/ui/ui';
import { useAppSelector } from '@/store/store';
interface props {}

export const ConfirmationForm: FC<props> = ({}) => {
    const first = useRef<HTMLInputElement>(null);
    const second = useRef<HTMLInputElement>(null);
    const third = useRef<HTMLInputElement>(null);
    const fourth = useRef<HTMLInputElement>(null);
    const mail: string = useAppSelector((state) => state.authReducer.value.mailOrPhone);
    const number: string = useAppSelector((state) => state.authReducer.value.mailOrPhone);
    const type: string = useAppSelector((state) => state.authReducer.value.type);
   
    const setButtonActive = (event: KeyboardEvent<HTMLInputElement>) => {
        if (isNaN(parseInt(event.key))) {
            if (event.key === 'Backspace' || event.key === 'Delete') {
                const input = event.target as HTMLInputElement;
                if (input.value !== '') {
                    input.value = '';
                    if (input.id === '4') {
                        setTimeout(() => {
                            third.current?.focus();
                        }, 0);
                    } else if (input.id === '3') {
                        setTimeout(() => {
                            second.current?.focus();
                        }, 0);
                    } else if (input.id === '2') {
                        setTimeout(() => {
                            first.current?.focus();
                        });
                    }
                }
            }
        } else {
            if (
                first.current?.value !== '' &&
                second.current?.value !== '' &&
                third.current?.value !== '' &&
                fourth.current?.value !== ''
            ) {
                handleSubmit();
            }

            if (first.current?.value !== '') {
                second.current?.focus();
            }
            if (second.current?.value !== '') {
                third.current?.focus();
            }
            if (third.current?.value !== '') {
                fourth.current?.focus();
            }
        }
    };

    //@ts-ignore
    useEventListener('keydown', (event) => setButtonActive(event), first.current);
    //@ts-ignore
    useEventListener('keydown', (event) => setButtonActive(event), second.current);
    //@ts-ignore
    useEventListener('keydown', (event) => setButtonActive(event), third.current);
    //@ts-ignore
    useEventListener('keydown', (event) => setButtonActive(event), fourth.current);

    const handleInput = (
        event: FormEvent<HTMLInputElement>,
        input: RefObject<HTMLInputElement>,
    ): void => {
        const numericValue: string = (event.target as HTMLInputElement).value.replace(
            /[^0-9]/g,
            '',
        );
        if (numericValue.length < 1) {
            if (input.current !== null) {
                input.current.value = numericValue;
            }
        }
    };

    const handleSubmit = (): void => {
        const total: string | undefined =
            `${first.current?.value}${second.current?.value}${third.current?.value}${fourth.current?.value}`.trim();
        console.log(total);
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
                                    <h4 className={styles.text}>
                                        Подтверждение{' '}
                                        {type === 'mail' ? 'почты:' : 'номера телефона'}
                                    </h4>
                                    <h4 className={styles.subTitle}>
                                        На {type === 'mail' ? 'почту' : 'номер'}{' '}
                                        {type === 'mail' ? mail : number} был отправлен код, введите
                                        его для завершения регистрации
                                    </h4>
                                </Gapped>

                                <Gapped
                                    vertical={false}
                                    gap="24px"
                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        gap: '8px',
                                        justifyContent: 'center',
                                    }}>
                                    <Input
                                        inputRef={first}
                                        width={56}
                                        height={63}
                                        fontSize={32}
                                        center={true}
                                        handleInput={handleInput}
                                        id="1"
                                    />
                                    <Input
                                        inputRef={second}
                                        width={56}
                                        height={63}
                                        fontSize={32}
                                        center={true}
                                        maxLength={1}
                                        handleInput={handleInput}
                                        id="2"
                                    />
                                    <Input
                                        inputRef={third}
                                        width={56}
                                        height={63}
                                        fontSize={32}
                                        center={true}
                                        maxLength={1}
                                        handleInput={handleInput}
                                        id="3"
                                    />
                                    <Input
                                        inputRef={fourth}
                                        width={56}
                                        height={63}
                                        fontSize={32}
                                        center={true}
                                        maxLength={1}
                                        handleInput={handleInput}
                                        id="4"
                                    />
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
