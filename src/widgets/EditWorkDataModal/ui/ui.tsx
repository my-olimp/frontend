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
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'avatar' | 'contacts'>>;
    tag?: string;
}

type Inputs = {
    firstName: string;
    familyName: string;
    additionalName: string;
};

export const EditWorkDataModal: FC<props> = ({ setMode, tag }) => {
    const [subject, setSubject] = useState('МБОУ СШ #1');
    const [items, setItems] = useState('Предмет');
    const [grade, setGrade] = useState('5');
    const [noMiddleName, setNoMiddleName] = useState<boolean>(false);
    const { user } = useAppSelector((state) => state.auth);

    const [date, setDate] = useState<Dayjs>();
    const [sex, setSex] = useState<'male' | 'female'>('male');

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

    const handleSubjectSelect = (event: any) => {
        setSubject((event.target as HTMLSelectElement).value);
    }

    const handleItemsSelect = (event: any) => {
        setItems((event.target as HTMLSelectElement).value);
    }

    const handleGradeSelect = (event: any) => {
        setGrade((event.target as HTMLSelectElement).value);
    }

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
                            <MenuItem value={'Предмет'} disabled selected>
                                <span style={{ color: 'gray' }}>Предмет</span>
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
                            className={styles.input}
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Город/населенный пункт"
                            className={styles.input}
                        />
                        <Select
                            className={styles.select}
                            onChange={(event) => handleSubjectSelect(event)}
                            value={subject}>
                            <MenuItem value={'МБОУ СШ #1'} disabled selected>
                                <span style={{ color: 'gray' }}>МБОУ СШ #1</span>
                            </MenuItem>
                            {subjectData.length > 0 ? (
                                subjectData.map((item: any) => (
                                    <MenuItem key={item.id} value={item.text}>
                                        {item.text}
                                    </MenuItem>
                                ))
                            ) : (
                                <MenuItem disabled>Loading...</MenuItem>
                            )}
                        </Select>
                        <Select
                            className={styles.select}
                            onChange={(event) => handleGradeSelect(event)}
                            value={grade}>
                            <MenuItem value={'Grade'} disabled>
                                <span style={{ color: 'gray' }}>Класс</span>
                            </MenuItem>
                            <MenuItem value={'5'} selected>
                                <span>5</span>
                            </MenuItem>
                            <MenuItem value={'6'}>
                                <span>6</span>
                            </MenuItem>
                            <MenuItem value={'7'}>
                                <span>7</span>
                            </MenuItem>
                            <MenuItem value={'8'}>
                                <span>8</span>
                            </MenuItem>
                            <MenuItem value={'9'}>
                                <span>9</span>
                            </MenuItem>
                            <MenuItem value={'10'}>
                                <span>10</span>
                            </MenuItem>
                            <MenuItem value={'11'}>
                                <span>11</span>
                            </MenuItem>
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
