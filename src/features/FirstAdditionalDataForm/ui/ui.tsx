import React, { Dispatch, FC, FormEvent, SetStateAction, useEffect, useState } from 'react';
import styles from './ui.module.scss';
import Logo from '@/entities/Logo/ui/ui';
import { Button, MenuItem, Radio, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { SexRadio } from '@/entities/SexRadio';

interface props {
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
}
export const FirstAdditionalDataForm: FC<props> = ({ progress, setProgress }) => {
    const [namesArray, setNamesArray] = useState<string[]>([]);
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    const [sex, setSex] = useState<'male' | 'female'>('male');
    const [date, setDate] = useState<Dayjs>();
    const [role, setRole] = useState<string>('Вид деятельности');

    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

    const handleClick = () => {
        console.log(namesArray);
        setProgress(progress + 1);
    };

    const handleInput = (event: any) => {
        const text: string = event.target.value;
        if (text === '') {
            setError('')
            setValue('')
            return;
        }
        setValue(text);

        // валидация
        /^(?=.*[A-ZА-Я][a-zа-я]{2,}\s[A-ZА-Я][a-zа-я]{1,}(\s[A-ZА-Я][a-zа-я]{2,})?\s*$)(?=.*[a-zA-Zа-яА-Я]).*$/.test(text)
        ? setError("")
        : setError("ФИО должно содержать в себе как минимум имя и фамилию с заглавной буквы")
    };

    useEffect(() => {
        if (date !== undefined && role !== 'Вид деятельности' && value !== '' && error === '') {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [date, role, value, sex, error]);

    return (
        <div className={styles.form}>
            <form>
                <div className={styles.logoRow}>
                    <Logo />
                </div>
                <div className={styles.titleRow}>
                    <h1>Персональные данные</h1>
                    <p>{progress} из 4</p>
                </div>
                <input
                    value={value}
                    onChange={(event) => handleInput(event)}
                    placeholder="ФИО"
                    className={styles.input}
                />
                {error && <h3 className={styles.error}>{error}</h3>}
                <SexRadio sex={sex} setSex={setSex} />
                <DatePicker
                    onChange={(newDate) => setDate(dayjs(newDate as Dayjs))}
                    className={styles.calendar}
                    format={'DD/MM/YYYY'}
                    label="Дата рождения"
                />
                <Select
                    value={role}
                    onChange={(event) => setRole(event.target.value as string)}
                    className={styles.role}>
                    <MenuItem value={'Вид деятельности'} disabled selected>
                        <span style={{ color: 'gray' }}>Вид деятельности</span>
                    </MenuItem>
                    <MenuItem value={'Ученик'}>Ученик</MenuItem>
                    <MenuItem value={'Тренер/учитель'}>Тренер/учитель</MenuItem>
                    <MenuItem value={'Сотрудник школы'}>Сотрудник школы</MenuItem>
                    <MenuItem value={'Сотрудник вуза'}>Сотрудник вуза</MenuItem>
                    <MenuItem value={'Член комитета олимпиад'}>Член комитета олимпиад</MenuItem>
                    <MenuItem value={'Работодатель'}>Работодатель</MenuItem>
                </Select>
                <Button
                    variant="contained"
                    disabled={isButtonDisabled}
                    className={styles.button}
                    onClick={() => handleClick()}>
                    Продолжить
                </Button>
            </form>
        </div>
    );
};
