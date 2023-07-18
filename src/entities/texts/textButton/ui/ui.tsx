import {FC, PropsWithChildren} from 'react';
import styles from './ui.module.scss'
interface props {
    link: string
}
export const TextButton:FC<PropsWithChildren<props>> = ({children,link}) => {
    return (
        <a href={link} className={styles.link}>
            <button className={styles.button}>{children}</button>
            <i className={styles.icon}/>
        </a>
    )
}