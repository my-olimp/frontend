import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Button } from '@mui/material';
import Image from 'next/image';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import styles from './ui.module.scss';
import myOlimpIcon from '../../../../public/logo/myOlimpLogo.svg';
import avatarLink from '../../../../public/social/empty-avatar.svg';
import math from '../../../../public/discipline-icons/math.svg';
import physics from '../../../../public/discipline-icons/physics.svg';
import informatics from '../../../../public/discipline-icons/informatics.svg';
import history from '../../../../public/discipline-icons/history.svg';
import literature from '../../../../public/discipline-icons/literature.svg';
import russian from '../../../../public/discipline-icons/russian.svg';
import english from '../../../../public/discipline-icons/english.svg';
import mxk from '../../../../public/discipline-icons/mxk.svg';
import socialStudies from '../../../../public/discipline-icons/socialStudies.svg';
import law from '../../../../public/discipline-icons/law.svg';
import economics from '../../../../public/discipline-icons/economics.svg';
import chemistry from '../../../../public/discipline-icons/chemistry.svg';
import biology from '../../../../public/discipline-icons/biology.svg';
import ecology from '../../../../public/discipline-icons/ecology.svg';
import astranomics from '../../../../public/discipline-icons/astranomics.svg';
import technology from '../../../../public/discipline-icons/technology.svg';

interface props {
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
}

interface IDiscipline {
    id: number;
    name: string;
    icon: string;
}

const disciplines: IDiscipline[] = [
    {
        id: 1,
        name: 'Математика',
        icon: math.src,
    },
    {
        id: 2,
        name: 'Физика',
        icon: physics.src,
    },
    {
        id: 3,
        name: 'Информатика',
        icon: informatics.src,
    },
    {
        id: 4,
        name: 'История',
        icon: history.src,
    },
    {
        id: 5,
        name: 'Литература',
        icon: literature.src,
    },
    {
        id: 6,
        name: 'Русский язык',
        icon: russian.src,
    },
    {
        id: 7,
        name: 'Английский',
        icon: english.src,
    },
    {
        id: 8,
        name: 'МХК',
        icon: mxk.src,
    },
    {
        id: 9,
        name: 'Обществознание',
        icon: socialStudies.src,
    },
    {
        id: 10,
        name: 'Право',
        icon: law.src,
    },
    {
        id: 11,
        name: 'Экономика',
        icon: economics.src,
    },
    {
        id: 12,
        name: 'Химия',
        icon: chemistry.src,
    },
    {
        id: 13,
        name: 'Биология',
        icon: biology.src,
    },
    {
        id: 14,
        name: 'Экология',
        icon: ecology.src,
    },
    {
        id: 15,
        name: 'Астрономия',
        icon: astranomics.src,
    },
    {
        id: 16,
        name: 'Технология',
        icon: technology.src,
    },
];

export const ThirdAdditionalDataForm: FC<props> = ({ progress, setProgress }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [disciplineState, setDisciplineState] = useState<{ [key: string]: boolean }>({});
    const handleInputChange = (_: React.ChangeEvent<{}>, newInputValue: string) => {
        setInputValue(newInputValue);
        console.log('SetInputValue', newInputValue)
    };

    const handleDisciplineClick = (name: string) => {
        setDisciplineState((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
        setInputValue('');
    };

    const handleClick = () => {
        if (progress !== 3) {
            setProgress(progress + 1);
        }
    };

    return (
        <div className={styles.form}>
            <form>
                <div className={styles.logoRow}>
                    <ArrowBackOutlinedIcon className={styles.arrowIcon} />
                    <img src={myOlimpIcon.src} alt={'myOlimpIcon'} className={styles.myOlimpIcon} />
                    <div></div>
                    {/*<Logo />*/}
                </div>
                <div className={styles.titleRow}>
                    <h1>Дисциплины</h1>
                    <p>{progress} из 4</p>
                </div>
                <div className={styles.description}>
                    <h2 className={styles.descriptionTitle}>Выберите предметы, к которым готовитесь</h2>
                    <h2 className={styles.descriptionDiscipline}>Популярные дисциплины</h2>
                </div>
                <div className={styles.disciplesContainer}>
                    {disciplines.map((discipline: IDiscipline) => (
                        <div
                            className={`${styles.disciplineContainer} ${
                                disciplineState[discipline.name] ? styles.selected : ''
                            }`}
                            key={discipline.id}
                            onClick={() => handleDisciplineClick(discipline.name)}>
                            {/*// TODO: @habdevs add alt, width, height*/}
                            <Image
                                src={`https://storage.yandexcloud.net/myolimp/subject/${discipline.name}.svg`}
                                alt={discipline.name}
                                width={16}
                                height={16}
                                className={`${styles.disciplesIcon} ${
                                    disciplineState[discipline.name] ? styles.selected : ''
                                }`}
                                key={discipline.id}
                                onClick={() => handleDisciplineClick(discipline.name)}
                            />
                            <img
                                src={discipline.icon}
                                alt={discipline.name}
                                className={`${styles.disciplesIcon} ${disciplineState[discipline.name] ? styles.selected : ''
                                    }`}
                            />
                            <h3 className={`${styles.disciplineName} ${disciplineState[discipline.name] ? styles.selected : ''
                                }`}>
                                {discipline.name}
                            </h3>
                        </div>
                    ))}
                </div>

                <Button
                    variant="contained"
                    disabled={Object.values(disciplineState).every((isActive) => !isActive)}
                    className={styles.button}
                    onClick={() => handleClick()}>
                    Дальше
                </Button>
            </form>
        </div>
    );
};