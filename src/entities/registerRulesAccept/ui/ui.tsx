import React from 'react';
import styles from './ui.module.scss';
import Link from 'next/link';

export const RegisterRulesAccept = () => {
    return (
        <h4 className={styles.text}>
            {/*TODO: change href*/}
            Регистрируясь, вы соглашаетесь на
            <Link className={styles.focus} href={'/'}>
                обработку персональных данных
            </Link>
            и получение информационных сообщений от группы компании MyOlimp
        </h4>
    );
};
