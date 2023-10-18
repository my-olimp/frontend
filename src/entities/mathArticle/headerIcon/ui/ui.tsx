"use client"
import { FC, useState } from 'react';
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
    isOpen: Boolean;
    isCorrectAll: Boolean[][];
    updatePage: Boolean;
}

const switchNameImage = (name: PropName) => {
    switch (name) {
        case 'book':
            return BookIcon
        case 'question':
            return Question
        case 'star':
            return Star
    }
}

export const HeaderIcon: FC<PropsHeaderIcon> = ({ name, numberPage, setOpenedPage, isOpen, isCorrectAll, updatePage }) => {
    const [bookWasOpened, setBookWasOpened] = useState<boolean>(`${name}${numberPage}` === 'book1');

    return (
        <div>
            <div
                onClick={() => {setOpenedPage(`${name}${numberPage}`); if (name === 'book') {setBookWasOpened(true) } }}
                style={{
                    border: `${isOpen ? '2' : '0'}px solid #FFF `,
                    background: `${bookWasOpened ? '#286CEA' : ((isCorrectAll[numberPage - 1].length != 0 ? isCorrectAll[numberPage - 1].filter((el) => !el).length == 0 : false) && (name === 'question')) ? '#286CEA' : '#9CBFFF'}`
                }}
                className={[styles.imageContainer, `${styles[`imageContainer_${name}`]}`].join(' ')}
            >
                <Image className={styles.image} src={switchNameImage(name)} alt={name} />
            </div>
        </div>
    );
};
