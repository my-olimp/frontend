import { FC, FormEvent, KeyboardEvent, RefObject, useRef, useState } from 'react';
import Logo from '@/entities/Logo/ui/ui';
import styles from './ui.module.scss';
import { Gapped } from '@/shared/Gapped';
import { Input } from '@/entities/input';
import { useEventListener } from 'usehooks-ts';

interface props {}

export const ConfirmationForm: FC<props> = ({}) => {
    const first = useRef<HTMLInputElement>(null);
    const second = useRef<HTMLInputElement>(null);
    const third = useRef<HTMLInputElement>(null);
    const fourth = useRef<HTMLInputElement>(null);

    const mail: string = 'aaaaaa@gmail.com';
    const number: string = '+71111111111';

    const [type, setType] = useState<'mail' | 'number'>('mail');

    const setButtonActive = (event: KeyboardEvent<HTMLInputElement>) => {
        if (isNaN(parseInt(event.key))) {
            if (event.key === 'Backspace' || event.key === 'Delete') {
                const input = event.target as HTMLInputElement;
                if (input.value !== '') {
                    input.value = '';
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
                                        marginBottom: '16px',
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
                                    />
                                    <Input
                                        inputRef={second}
                                        width={56}
                                        height={63}
                                        fontSize={32}
                                        center={true}
                                        maxLength={1}
                                        handleInput={handleInput}
                                    />
                                    <Input
                                        inputRef={third}
                                        width={56}
                                        height={63}
                                        fontSize={32}
                                        center={true}
                                        maxLength={1}
                                        handleInput={handleInput}
                                    />
                                    <Input
                                        inputRef={fourth}
                                        width={56}
                                        height={63}
                                        fontSize={32}
                                        center={true}
                                        maxLength={1}
                                        handleInput={handleInput}
                                    />
                                    <Gapped
                                        className={styles.inputWrap}
                                        vertical
                                        verticalAlign="middle"
                                        gap="24px"
                                        style={{ display: 'flex', width: '100%' }}></Gapped>
                                </Gapped>
                            </Gapped>
                        </Gapped>
                    </Gapped>
                </Gapped>
            </Gapped>
        </>
    );
};
