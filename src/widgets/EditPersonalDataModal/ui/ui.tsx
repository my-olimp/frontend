import { useAppSelector } from '@/hooks/useAppSelector';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
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
import { MenuItem, Select } from '@mui/material';
import { PutUserdata } from '@/store/features/auth-slice';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contact' | 'teacher'>>;
    userdata?: any;
    tag?: any;
}

type Inputs = {
    firstName: string;
    familyName: string;
    additionalName: string;
};

export const EditPersonalDataModal: FC<props> = ({ setMode, userdata }) => {
    const [firstname, setFirstname] = useState('');
    const [secondname, setSecondname] = useState('');
    const [thirdname, setThirdname] = useState('');
    const [snils, setSnils] = useState('');
    const [gender, setGender] = useState('Не указано');
    const [date, setDate] = useState<Dayjs>();
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
        setFirstname(userdata?.first_name || '')
        if (userdata?.gender == null) setGender('Не указано')
        if (userdata?.gender == 'm') setGender('Мужчина')
        if (userdata?.gender == 'f') setGender('Женщина')
    }, []);

    const onFormSubmit: SubmitHandler<Inputs> = () => { };

    const firstnameHandler = (e: string) => !/^[a-zA-Zа-яА-Я]*$/.test(e) ? null : setFirstname(e)
    const secondnameHandler = (e: string) => !/^[a-zA-Zа-яА-Я]*$/.test(e) ? null : setSecondname(e)
    const thirdnameHandler = (e: string) => !/^[a-zA-Zа-яА-Я]*$/.test(e) ? null : setThirdname(e)
    const snilsHandler = (e: string) => !/^[0-9-]*$/.test(e) ? null : setSnils(e)

    const genderSelect = (event: any) => {
        setGender(event.target.value)
    }

    const checkState = (e: string) => e == '' ? null : e

    const genderCheck = (e: string) => {
        if (e == '') return null
        if (e == 'Мужчина') return 'm'
        return 'f'
    }

    async function sendData() {
        const obj: any = {
            "first_name": checkState(firstname),
            "second_name": checkState(secondname),
            "third_name": checkState(thirdname),
            "SNILS": checkState(snils),
            "gender": genderCheck(gender),
            "data_of_birth": checkState(dayjs(date).format('YYYY-MM-DD')),
            "grade": userdata.grade ? userdata.grade : null,
            "account_type": userdata?.account_type,
        }
        await dispatch(PutUserdata(obj))
        setMode('')
    }

    return (
        {}
    );
};
