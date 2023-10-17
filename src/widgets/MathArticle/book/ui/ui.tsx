import { FC, PropsWithChildren } from 'react';
import styles from './ui.module.scss';

interface PropsBookPage {
    
}

export const BookPage: FC<PropsWithChildren<PropsBookPage>> = ( { children } ) => {

    return (
        <div>
            {children}
        </div>
    )
}
