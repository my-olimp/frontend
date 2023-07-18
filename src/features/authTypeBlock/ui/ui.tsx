import React, {FC} from 'react';
import styles from './ui.module.scss'
interface props {
    type: 'mail' | 'number'
    setType: (type: 'mail' | 'number') => void
}
export const AuthTypeBlock:FC<props> = ({ type, setType }) => {

    return (
        <div className={styles.wrap}>
            <div className={styles.textWrap}>
                <h3
                    className={type === 'mail' ? styles.text : styles.disableText}
                    onClick={() => setType('mail')}
                >Почта</h3>
                <h3
                    className={type === 'number' ? styles.text : styles.disableText}
                    onClick={() => setType('number')}
                >Номер телефона</h3>
            </div>
            <span className={styles.line}/>
        </div>
    );
};

