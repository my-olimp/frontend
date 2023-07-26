import { FC, useEffect, useState } from 'react';
import Logo from '@/entities/Logo/ui/ui';
import styles from './ui.module.scss';
import { Gapped } from '@/shared/Gapped';
import { AuthButton } from '@/entities/buttons/authButton';
import { LoginHelp } from '@/features/authHelp/LoginHelp';

interface props {}

export const ConfirmationForm: FC<props> = ({}) => {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [fourth, setFourth] = useState('');
    const mail: string = 'aaaaaa@gmail.com';
    const number: string = '+71111111111';
    const [isButtonDisabled, setButtonDisabled] = useState<'active' | 'disabled'>('disabled');

    const [type, setType] = useState<'mail' | 'number'>('mail');

    useEffect((): void => {
        if (
            first.length !== 0 &&
            second.length !== 0 &&
            third.length !== 0 &&
            fourth.length !== 0
        ) {
            setButtonDisabled('active');
        } else {
            setButtonDisabled('disabled');
        }
    }, [first, second, third, fourth]);
    const handleSubmit = (): void => {
        console.log(first, second, third, fourth);
    };

    return (
        <>
            <Gapped className={styles.screen} vertical verticalAlign="middle">
                <Gapped className={styles.center} gap="16px" vertical verticalAlign="middle">
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
                                style={{ display: 'flex', width: '100%' }}
                            >
                                <Gapped
                                    vertical
                                    verticalAlign="middle"
                                    alignItems="center"
                                    gap="8px"
                                >
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
                                    vertical
                                    verticalAlign="middle"
                                    gap="24px"
                                    style={{
                                        marginBottom: '16px',
                                        display: 'flex',
                                        width: '100%',
                                    }}
                                >
                                    <Gapped
                                        className={styles.inputWrap}
                                        vertical
                                        verticalAlign="middle"
                                        gap="24px"
                                        style={{ display: 'flex', width: '100%' }}
                                    ></Gapped>
                                    <AuthButton
                                        type="register"
                                        width="fit-content"
                                        height="medium"
                                        use={isButtonDisabled}
                                        onClick={handleSubmit}
                                    >
                                        Подтвердить
                                    </AuthButton>
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
