import { FC, useRef, useState } from 'react';
import Logo from '@/entities/Logo/ui/ui';
import styles from './ui.module.scss';
import { Gapped } from '@/shared/Gapped';
import { AuthButton } from '@/entities/buttons/authButton';
import { LoginHelp } from '@/features/authHelp/LoginHelp';
import { Input } from '@/entities/input';
import { useEventListener } from 'usehooks-ts';
import { RefObject } from 'react';
interface props {}

export const ConfirmationForm: FC<props> = ({}) => {

    const first = useRef<RefObject<Document>>(null);
    const second = useRef<HTMLInputElement>(null);
    const third = useRef<HTMLInputElement>(null);
    const fourth = useRef<HTMLInputElement>(null);
  
    const mail: string = 'aaaaaa@gmail.com';
    const number: string = '+71111111111';

    const [isButtonDisabled, setButtonDisabled] = useState<'active' | 'disabled'>('disabled');

    const [type, setType] = useState<'mail' | 'number'>('mail');

    function setButtonActive() {
        if (
            first.current?.value.length !== 0 &&
            second.current?.value.length !== 0 &&
            third.current?.value.length !== 0 &&
            fourth.current?.value.length !== 0
        ) {
            setButtonDisabled('active');
        } else {
            setButtonDisabled('disabled');
        }
    }

    useEventListener('input', setButtonActive, first.current);
    useEventListener('input', setButtonActive, second.current);
    useEventListener('input', setButtonActive, third.current);
    useEventListener('input', setButtonActive, fourth.current);
    const handleSubmit = (): void => {
        console.log(
            first.current?.value,
            second.current?.value,
            third.current?.value,
            fourth.current?.value,
        );
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
                                        maxLength={1}
                                        type={'number'}
                                    />
                                    <Input
                                        inputRef={second}
                                        width={56}
                                        height={63}
                                        fontSize={32}
                                        center={true}
                                        maxLength={1}
                                        type={'number'}
                                    />
                                    <Input
                                        inputRef={third}
                                        width={56}
                                        height={63}
                                        fontSize={32}
                                        center={true}
                                        maxLength={1}
                                        type={'number'}
                                    />
                                    <Input
                                        inputRef={fourth}
                                        width={56}
                                        height={63}
                                        fontSize={32}
                                        center={true}
                                        maxLength={1}
                                        type={'number'}
                                    />
                                    <Gapped
                                        className={styles.inputWrap}
                                        vertical
                                        verticalAlign="middle"
                                        gap="24px"
                                        style={{ display: 'flex', width: '100%' }}></Gapped>
                                    <AuthButton
                                        type="register"
                                        width="fit-content"
                                        height="medium"
                                        use={isButtonDisabled}
                                        onClick={handleSubmit}>
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
