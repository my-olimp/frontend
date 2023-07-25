import React from 'react';
import styles from './ui.module.scss';

export const RegisterRulesAccept = () => {
    return (
        <h4 className={styles.text}>
            {/*TODO: change href*/}
            Регистрируясь, вы соглашаетесь на{' '}
            <a className={styles.focus} href={'/'}>
                обработку персональных данных
            </a>{' '}
            и получение информационных сообщений от группы компании MyOlimp
        </h4>
    );
};
