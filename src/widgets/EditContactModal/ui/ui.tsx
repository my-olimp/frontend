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
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { useDispatch } from 'react-redux';
import { PutUserdata } from '@/store/features/auth-slice';
import styles from './ui.module.scss';
import { ca } from 'date-fns/locale';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contact' | 'teacher'>>;
    userdata?: any;
}

type Inputs = {
    firstName: string;
    familyName: string;
    additionalName: string;
};

export const EditContactModal: FC<props> = ({ setMode, userdata }) => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const modalRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

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
            document.removeEventListener('keydown', () => { });
        };
    }, []);

    useEffect(() => {
        userdata?.email ? setEmail(userdata?.email) : null
        userdata?.number ? setNumber(userdata?.number) : null
    }, []);

    const onFormSubmit: SubmitHandler<Inputs> = () => { };

    const emailHandler = (e: string) => /^[A-Za-z.@]*$/.test(e) ? setEmail(e) : null
    const numberHandler = (e: string) => /^[0-9+]*$/.test(e) ? setNumber(e) : null

    const checkState = (e: string) => e == '' ? null : e
    async function sendData() {
        const obj: any = {
            "email": checkState(email),
            "phone_number": checkState(number)
        }
        await dispatch(PutUserdata(obj))
        setMode('')
    }

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
                        onChange={(e) => emailHandler(e.target.value)}
                        value={email ? email : ''}
                        autoCapitalize="email"
                    />
                    <TextField
                        type="text"
                        variant="outlined"
                        label="Телефон"
                        className={styles.input}
                        onChange={(e) => numberHandler(e.target.value)}
                        value={number ? number : ''}
                        autoCapitalize="number"
                    />
                </span>
                <span className={styles.buttons}>
                    <button className={styles.cancel} onClick={() => setMode('')}>
                        Отменить
                    </button>
                    <button className={styles.submit} onClick={() => sendData()}>Сохранить</button>
                </span>
            </form>
        </div>
    )
}