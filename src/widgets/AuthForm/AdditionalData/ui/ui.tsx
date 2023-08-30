'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './ui.module.scss';
import Logo from '@/entities/Logo/ui/ui';
import { Button, MenuItem, Radio, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

interface props {}
export const AdditionalDataForm: FC<props> = ({}) => {
    const [progress, setProgress] = useState<number>(1);
    const [sex, setSex] = useState<'male' | 'female' | 'parquet'>('male');
    const [date, setDate] = useState<Dayjs>();
    const [role, setRole] = useState<string>('Вид деятельности');
    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        if (date !== undefined && role !== 'Вид деятельности' && value !== '') {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [date, role, value, sex]);

    return (
        <div className={styles.screen}>
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
                        onChange={(event) => setValue(event.target.value as string)}
                        placeholder="ФИО"
                        className={styles.input}
                    />
                    <div className={styles.sexWrap}>
                        <h2>Пол: </h2>
                        <div className={styles.sex} onChange={() => setSex('male')}>
                            <h3>Мужской</h3>
                            <Radio checked={sex === 'male'} value="male" name="radio-buttons" />
                        </div>
                        <div className={styles.sex} onChange={() => setSex('female')}>
                            <h3>Женский</h3>
                            <Radio checked={sex === 'female'} value="female" name="radio-buttons" />
                        </div>
                        <div className={styles.sex} onChange={() => setSex('parquet')}>
                            <h3>Паркет</h3>
                            <Radio
                                checked={sex === 'parquet'}
                                value="parquet"
                                name="radio-buttons"
                            />
                        </div>
                    </div>

                    <DatePicker
                        onChange={(newDate) => setDate(dayjs(newDate as any))}
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
                        className={styles.button}>
                        Продолжить
                    </Button>
                </form>
            </div>
        </div>
    );
};
