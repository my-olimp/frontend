import { useAppSelector } from '@/hooks/useAppSelector';
import { Discipline, GetDisciplines } from '@/store/features/auth-slice';
import { RootState } from '@/store/store';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Button } from '@mui/material';
import { AnyAction } from '@reduxjs/toolkit';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import myOlimpIcon from '../../../../public/logo/myOlimpLogo.svg';
import styles from './ui.module.scss';

interface props {
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
}

// interface IDiscipline {
//     id: number;
//     name: string;
//     icon: string;
// }

// const disciplines: IDiscipline[] = [
//     {
//         id: 1,
//         name: 'Математика',
//         icon: math.src,
//     },
//     {
//         id: 2,
//         name: 'Физика',
//         icon: physics.src,
//     },
//     {
//         id: 3,
//         name: 'Информатика',
//         icon: informatics.src,
//     },
//     {
//         id: 4,
//         name: 'История',
//         icon: history.src,
//     },
//     {
//         id: 5,
//         name: 'Литература',
//         icon: literature.src,
//     },
//     {
//         id: 6,
//         name: 'Русский язык',
//         icon: russian.src,
//     },
//     {
//         id: 7,
//         name: 'Английский',
//         icon: english.src,
//     },
//     {
//         id: 8,
//         name: 'МХК',
//         icon: mxk.src,
//     },
//     {
//         id: 9,
//         name: 'Обществознание',
//         icon: socialStudies.src,
//     },
//     {
//         id: 10,
//         name: 'Право',
//         icon: law.src,
//     },
//     {
//         id: 11,
//         name: 'Экономика',
//         icon: economics.src,
//     },
//     {
//         id: 12,
//         name: 'Химия',
//         icon: chemistry.src,
//     },
//     {
//         id: 13,
//         name: 'Биология',
//         icon: biology.src,
//     },
//     {
//         id: 14,
//         name: 'Экология',
//         icon: ecology.src,
//     },
//     {
//         id: 15,
//         name: 'Астрономия',
//         icon: astranomics.src,
//     },
//     {
//         id: 16,
//         name: 'Технология',
//         icon: technology.src,
//     },
// ];

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
                    <img src={myOlimpIcon.src} alt={'myOlimpIcon'} className={styles.myOlimpIcon} />
                    {/*<Logo />*/}
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
                {/*<Stack spacing={2} sx={{ width: 300 }}>*/}
                {/*    <Autocomplete*/}
                {/*        freeSolo*/}
                {/*        id="free-solo-2-demo"*/}
                {/*        disableClearable*/}
                {/*        options={disciplines.map((option) => option.name)}*/}
                {/*        value={inputValue}*/}
                {/*        onChange={(_, newValue) => setInputValue(newValue)}*/}
                {/*        inputValue={inputValue}*/}
                {/*        onInputChange={handleInputChange}*/}
                {/*        renderInput={(params) => (*/}
                {/*            <TextField*/}
                {/*                {...params}*/}
                {/*                label="Найти..."*/}
                {/*                InputProps={{*/}
                {/*                    ...params.InputProps,*/}
                {/*                    type: 'search',*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        )}*/}
                {/*    />*/}
                {/*</Stack>*/}
                <div className={styles.disciplesContainer}>
                    {disciplines?.map((discipline: Discipline) => (
                        <div
                            className={`${styles.disciplineContainer} ${
                                disciplineState[discipline.name] ? styles.selected : ''
                            }`}
                            key={discipline.id}
                            onClick={() => handleDisciplineClick(discipline.name)}>
                            {/* <img
                                // src={discipline.icon}
                                alt={discipline.name}
                                className={`${styles.disciplesIcon} ${
                                    disciplineState[discipline.name] ? styles.selected : ''
                                }`}
                            /> */}
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
