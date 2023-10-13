import { TextField } from '@mui/material';
import {
    Dispatch,
    EventHandler,
    FC,
    MouseEvent,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contact' | 'teacher'>>;
}

type Inputs = {
    firstName: string;
    familyName: string;
    additionalName: string;
};

export const EditContactModal: FC<props> = ({ setMode }) => {

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

    useEffect(() => {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMode('');
            }
        });
        return () => {
            document.removeEventListener('keydown', () => {});
        };
    }, []);

    const onFormSubmit: SubmitHandler<Inputs> = () => {};

    return (
        <div
            className={styles.screen}
            ref={modalRef}
            onClick={(event) => handleClickOutSide(event)}>
            <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
                <h6>Контакты</h6>
                <span className={styles.inputs}>
                    <TextField
                        type="text"
                        variant="outlined"
                        label="Почта"
                        className={styles.input}
                        autoComplete="given-name"
                        autoCapitalize="email"
                        {...register('firstName')}
                    />
                    <TextField
                        type="text"
                        variant="outlined"
                        label="Телефон"
                        className={styles.input}
                        autoComplete="family-name"
                        autoCapitalize="number"
                        {...register('familyName')}
                    />
                </span>
                <span className={styles.buttons}>
                    <button className={styles.cancel} onClick={() => setMode('')}>
                        Отменить
                    </button>
                    <button className={styles.submit}>Сохранить</button>
                </span>
            </form>
        </div>
    )
}