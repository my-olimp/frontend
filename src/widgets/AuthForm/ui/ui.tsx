import {FC} from 'react';
import styles from './ui.module.scss'
import {AuthInputLabel} from '@/features/authInputLabel';
import {AuthButton} from '@/entities/buttons/authButton';

interface props {
    signIn:boolean
}
export const AuthForm:FC<props> = ({signIn}) => {

    const handleSubmit = () => {

    }

    return (
        <div className={styles.screen}>
            <div className={styles.wrap}>
                <AuthInputLabel mail={true} inputName={'Почта'}/>
                <AuthInputLabel password={true} passwordSignInMode={true} inputName={'Пароль'} eye={true}/>
                <AuthInputLabel number={true} inputName={'Номер'}/>
            </div>
        </div>
    );
};

