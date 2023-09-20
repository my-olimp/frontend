import Logo from '@/entities/Logo/ui/ui';
import { useAppSelector } from '@/hooks/useAppSelector';
import { GetDisciplines, TDiscipline } from '@/store/features/auth-slice';
import { RootState } from '@/store/store';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Button } from '@mui/material';
import { AnyAction } from '@reduxjs/toolkit';
import Image from 'next/image';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import styles from './ui.module.scss';

interface props {
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
}

export const ThirdAdditionalDataForm: FC<props> = ({ progress, setProgress }) => {
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
    const [inputValue, setInputValue] = useState<string>('');
    const [disciplineState, setDisciplineState] = useState<{ [key: string]: boolean }>({});
    const { disciplines } = useAppSelector((state) => state.auth);

    useEffect(() => {
        dispatch(GetDisciplines());
        console.log('GETDISCIPLINE', disciplines);
    }, []);
    const handleInputChange = (_: React.ChangeEvent<{}>, newInputValue: string) => {
        setInputValue(newInputValue);
        console.log('SetInputValue', newInputValue);
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
                    <Logo />
                </div>
                <div className={styles.titleRow}>
                    <h1>Дисциплины</h1>
                    <p>{progress} из 4</p>
                </div>
                <div className={styles.description}>
                    <h2 className={styles.descriptionTitle}>
                        Выберите предметы, к которым готовитесь
                    </h2>
                    {/* <h2 className={styles.descriptionDiscipline}>Популярные дисциплины</h2> */}
                </div>
                <div className={styles.disciplesContainer}>
                    {disciplines?.map((discipline: TDiscipline) => (
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
                            />
                            <h3
                                className={`${styles.disciplineName} ${
                                    disciplineState[discipline.name] ? styles.selected : ''
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
