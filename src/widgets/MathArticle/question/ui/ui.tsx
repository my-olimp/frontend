import { FC, PropsWithChildren } from 'react';
import styles from './QuestionPage.module.scss';

interface PropsQuestionPage {
    
}

export const QuestionPage: FC<PropsWithChildren<PropsQuestionPage>> = ( { children } ) => {

    return (
        <div>
            {children}
        </div>
    )
}