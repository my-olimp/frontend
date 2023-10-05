import { FC } from 'react';
import styles from './ui.module.scss';
import Image from 'next/image';
import BookIcon from '../../../../../public/libraryArticle/bookIcon.svg';
import Question from '../../../../../public/libraryArticle/question.svg';
import Star from '../../../../../public/libraryArticle/star.svg';

type PropName = 'book' | 'question' | 'star';
interface PropsHeaderIcon {
    name: PropName;
    numberPage: number;
    setOpenedPage: Function;
}

const switchNameImage = (name: PropName) => {
    switch(name) {
        case 'book': 
            return BookIcon
        case 'question':  
            return Question
        case 'star':  
            return Star
      }
}

export const HeaderIcon: FC<PropsHeaderIcon> = ({ name, numberPage, setOpenedPage }) => {

    return (
        <div onClick={() => setOpenedPage(`${name}${numberPage}`)} className={[styles.imageContainer, `${styles[`imageContainer_${name}`]}`].join(' ')}>
            <Image className={styles.image} src={switchNameImage(name)} alt={name} />
        </div>
    )
}