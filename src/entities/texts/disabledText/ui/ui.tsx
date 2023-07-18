import {FC, PropsWithChildren} from 'react';
import styles from './ui.module.scss';

interface props {
    fontSize?:number
}
export const DisabledText:FC<PropsWithChildren<props>> = ({children,fontSize=16}) => {
    const style = {
        fontSize: `${fontSize}px`
    }
    return (
        <>
            <h1 style={style} className={styles.text}>{children}</h1>
        </>
    )
}