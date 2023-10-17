import { useEffect } from 'react'
import { useAppSelector } from '@/hooks/useAppSelector';
import { Select, TextField, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { Dispatch, EventHandler, FC, MouseEvent, SetStateAction, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { useDispatch } from 'react-redux';
import { PutUserdata } from '@/store/features/auth-slice';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contact' | 'teacher'>>;
    userdata?: any;
    tag?: string;
}

type Inputs = {
    firstName: string;
    familyName: string;
    additionalName: string;
};

export const EditWorkDataModal: FC<props> = ({ setMode, tag, userdata }) => {
    const [city, setCity] = useState(userdata?.city?.name || '');
    const [region, setRegion] = useState(userdata?.region?.name || '');
    const [grade, setGrade] = useState(userdata?.grade || 'Не указано');
    const [subject, setSubject]: any = useState(userdata?.school?.name || 'Не указано');
    const [items, setItems] = useState('Математика, физика, астрономия');

    const modalRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const handleClickOutSide: EventHandler<MouseEvent<HTMLDivElement>> = (event) => {
        if (event.target === modalRef.current) setMode('')
    };

    const onFormSubmit: SubmitHandler<Inputs> = () => { };

    const subjectData = [
        { id: 0, text: 'МБОУ СШ #1', where: ['Ивановская обл', 'Тейковский р-н', 'г. Тейково'] },
        { id: 1, text: 'МБОУ СШ #2', where: ['Ивановская обл', 'Тейковский р-н', 'г. Тейково'] },
        { id: 2, text: 'МБОУ СШ #3', where: ['Ивановская обл', 'Тейковский р-н', 'г. Тейково'] },
        { id: 3, text: 'Лицей № 153', where: ['Ивановская обл', 'Тейковский р-н', 'г. Тейково'] },
    ]
    const gradeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const regionHandler = (e: string) => !/^[a-zA-Zа-яА-Я\s]*$/.test(e) ? null : setRegion(e)
    const cityHandler = (e: string) => !/^[a-zA-Zа-яА-Я\s]*$/.test(e) ? null : setCity(e)
    const checkState = (e: string) => e == '' ? null : e

    async function sendData() {
        const obj: any = {
            "grade": grade == '' ? null : parseInt(grade),
            "region": 1,
            "city": 1,
            "school": 1,
        }
        await dispatch(PutUserdata(obj))
        setMode('')
    }

    return (
        <div
            className={styles.screen}
            ref={modalRef}
            onClick={(event) => handleClickOutSide(event)}
        >
            {tag === 'teacher' ? (
                <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
                    <h6>Работа</h6>
                    <span className={styles.inputs}>
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Регион"
                            onChange={(e) => regionHandler(e.target.value)}
                            value={region ? region.name : ''}
                            className={styles.input}
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Город/населенный пункт"
                            onChange={(e) => cityHandler(e.target.value)}
                            value={city ? city.name : ''}
                            className={styles.input}
                        />
                        {/* <Select
                            className={styles.select}
                            onChange={(event) => setSubject(event.target.value)}
                            value={subject.name}
                        >
                            <MenuItem value={subject.name} disabled>{subject.name}</MenuItem>
                            {subjectData.length > 0 ? (
                                subjectData.map((item: any) => (
                                    <MenuItem key={item.id} value={item.text}>
                                        {item.text}
                                    </MenuItem>
                                ))
                            ) : (
                                <MenuItem disabled>Loading...</MenuItem>
                            )}
                        </Select> */}
                        <Select
                            className={styles.select}
                            onChange={(event) => setItems(event.target.value)}
                            value={items}>
                            <MenuItem value={'Математика, физика, астрономия'} disabled selected>
                                <span style={{ color: 'gray' }}>Математика, физика, астрономия</span>
                            </MenuItem>
                        </Select>
                    </span>
                    <span className={styles.buttons}>
                        <button className={styles.cancel} onClick={() => setMode('')}>
                            Отменить
                        </button>
                        <button className={styles.submit}>Сохранить</button>
                    </span>
                </form>
            ) : (
                <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
                    <h6>Образование</h6>
                    <span className={styles.inputs}>
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Регион"
                            onChange={(e) => regionHandler(e.target.value)}
                            value={region}
                            className={styles.input}
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Город/населенный пункт"
                            onChange={(e) => cityHandler(e.target.value)}
                            value={city}
                            className={styles.input}
                        />
                        <Select
                            className={styles.select}
                            onChange={(event) => setSubject(event.target.value)}
                            value={subject || "Не указано"}
                        >
                            <MenuItem value={"Не указано"} disabled>Не указано</MenuItem>
                            {subjectData.map((item: any) => (
                                <MenuItem key={item.id} value={item.text}>
                                    {item.text}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            className={styles.select}
                            onChange={(event) => setGrade(event.target.value)}
                            value={grade}
                        >
                            <MenuItem value={'Не указано'} disabled>Не указано</MenuItem>
                            {gradeData.map((item: any) => (
                                <MenuItem key={item} value={`${item} класс`}>
                                    {`${item} класс`}
                                </MenuItem>
                            ))}
                        </Select>
                    </span>
                    <span className={styles.buttons}>
                        <button className={styles.cancel} onClick={() => setMode('')}>
                            Отменить
                        </button>
                        <button className={styles.submit} onClick={() => sendData()}>Сохранить</button>
                    </span>
                </form>
            )}
        </div>
    );
};
