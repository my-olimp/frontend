import {FC, useState} from 'react';
import styles from './ui.module.scss'
import {AuthInputLabel} from '@/features/authInputLabel';
import {AuthButton} from '@/entities/buttons/authButton';
import {AuthTypeBlock} from '@/features/authTypeBlock';

interface props {
    signIn:boolean
}
export const AuthForm:FC<props> = ({signIn}) => {
    const [type, setType] = useState<'mail' | 'number'>('mail')
    const handleSubmit = () => {

    }

    return (
        <div className={styles.screen}>
            <div className={styles.wrap}>
                <div className={styles.container}>
                    <div className={styles.headerWrap}>
                        <h1 className={styles.header}>MyOlymp</h1>
                        <h4 className={styles.text}>Вход в сервис</h4>
                    </div>
                    <AuthTypeBlock type={type} setType={setType}/>
                    <div className={styles.inputWrap}>
                        <AuthInputLabel
                            mail={true}
                            inputName={'Почта'}
                        />
                        <AuthInputLabel
                            password={true}
                            passwordSignInMode={signIn}
                            inputName={'Пароль'}
                            eye={true}
                        />
                    </div>
                    <AuthButton>Логин</AuthButton>
                </div>
            </div>
        </div>
    );
};

