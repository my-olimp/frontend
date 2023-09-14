import { SexRadio } from '@/entities/SexRadio';
import { useAppSelector } from '@/hooks/useAppSelector';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { Dispatch, EventHandler, FC, MouseEvent, SetStateAction, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work'>>;
}

type Inputs = {
    firstName: string;
    familyName: string;
    additionalName: string;
};

export const EditWorkDataModal: FC<props> = ({ setMode }) => {
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

    const onFormSubmit: SubmitHandler<Inputs> = () => {};

    return (
        <div
            className={styles.screen}
            ref={modalRef}
            onClick={(event) => handleClickOutSide(event)}>
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
        </div>
    );
};
