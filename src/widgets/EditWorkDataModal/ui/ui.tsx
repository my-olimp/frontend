import { SexRadio } from '@/entities/SexRadio';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Select, TextField, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { Dispatch, EventHandler, FC, MouseEvent, SetStateAction, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'avatar' | 'contacts'>>;
}

type Inputs = {
    firstName: string;
    familyName: string;
    additionalName: string;
};

export const EditWorkDataModal: FC<props> = ({ setMode, tag }) => {
    const [subject, setSubject] = useState('МБОУ СШ #1');
    const [items, setItems] = useState('Математика, физика, астрономия');
    const [noMiddleName, setNoMiddleName] = useState<boolean>(false);
    const { user } = useAppSelector((state) => state.auth);

    const [date, setDate] = useState<Dayjs>();
    const [sex, setSex] = useState<'male' | 'female'>('male');

    const modalRef = useRef<HTMLDivElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const handleClickOutSide: EventHandler<MouseEvent<HTMLDivElement>> = (event) => {
        if (event.target === modalRef.current) {
            setMode('');
        }
    };

    const onFormSubmit: SubmitHandler<Inputs> = () => { };

    const handleSubjectSelect = (event: any) => {
        setSubject((event.target as HTMLSelectElement).value);
    }

    const handleItemsSelect = (event: any) => {
        setItems((event.target as HTMLSelectElement).value);
    }

    const subjectData = [
        {id: 0, text: 'МБОУ СШ #1', where: ['Ивановская обл', 'Тейковский р-н', 'г. Тейково']},
        {id: 1, text: 'МБОУ СШ #2', where: ['Ивановская обл', 'Тейковский р-н', 'г. Тейково']},
        {id: 2, text: 'МБОУ СШ #3', where: ['Ивановская обл', 'Тейковский р-н', 'г. Тейково']},
    ]

    return (
        <div
            className={styles.screen}
            ref={modalRef}
            onClick={(event) => handleClickOutSide(event)}>
            {tag === 'teacher' ? (
                <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
                    <h6>Работа</h6>
                    <span className={styles.inputs}>
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Регион"
                            className={styles.input}
                            autoComplete="given-name"
                            autoCapitalize="word"
                            {...register('firstName')}
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Город/населенный пункт"
                            className={styles.input}
                            autoComplete="family-name"
                            autoCapitalize="word"
                            {...register('familyName')}
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
                            onChange={(event) => handleItemsSelect(event)}
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
                            label="Имя"
                            className={styles.input}
                            autoComplete="given-name"
                            autoCapitalize="word"
                            {...register('firstName')}
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Фамилия"
                            className={styles.input}
                            autoComplete="family-name"
                            autoCapitalize="word"
                            {...register('familyName')}
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Отчество"
                            autoComplete="additional-name"
                            autoCapitalize="word"
                            className={styles.input}
                            {...register('additionalName')}
                        />
                        <DatePicker
                            onChange={(newDate) => setDate(dayjs(newDate as Dayjs))}
                            className={styles.calendar}
                            format={'DD/MM/YYYY'}
                            label="Дата рождения"
                        />
                        <SexRadio sex={sex} setSex={setSex} />
                    </span>
                    <span className={styles.buttons}>
                        <button className={styles.cancel} onClick={() => setMode('')}>
                            Отменить
                        </button>
                        <button className={styles.submit}>Сохранить</button>
                    </span>
                </form>
            )}
        </div>
    );
};
