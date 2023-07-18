import {FC} from 'react';
import {DisabledText} from '@/entities/texts/disabledText';
import {TextButton} from '@/entities/texts/textButton';
import styles from './ui.module.scss'
export const AuthHelp: FC = ({}) => {
    return (
        <div className={styles.helpWrap}>
            <DisabledText>myolymp.ru</DisabledText>
            <TextButton link={'/auth'}>Зарегистрироваться</TextButton>
        </div>
    )
}
