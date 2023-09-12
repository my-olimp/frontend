import Logo from '@/entities/Logo/ui/ui';
import { useAppSelector } from '@/hooks/useAppSelector';
import { City, GetRegions, Region, School } from '@/store/features/auth-slice';
import { RootState } from '@/store/store';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Button, MenuItem, Select } from '@mui/material';
import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import styles from './ui.module.scss';

interface props {
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
}

export const SecondAdditionalDataForm: FC<props> = ({ progress, setProgress }) => {
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const [region, setRegion] = useState<string>('Регион');
    const [city, setCity] = useState<string>('Населенный пункт');
    const [school, setSchool] = useState<string>('Школа');
    const [grade, setGrade] = useState<string>('Класс');

    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

    const { regions, cities, schools } = useAppSelector((state) => state.auth);

    useEffect(() => {
        dispatch(GetRegions());
    }, []);

    const handleRegionSelect = (event) => {
        setRegion((event.target as HTMLSelectElement).value);
        console.log(event.target);
    };

    const handleCitySelect = (event) => {
        setCity((event.target as HTMLSelectElement).value);
        console.log(event.target);
    };

    const handleSchoolSelect = (event) => {
        setSchool((event.target as HTMLSelectElement).value);
        console.log(event.target);
    };

    return (
        <div className={styles.form}>
            <form>
                <div className={styles.logoRow}>
                    <ArrowBackOutlinedIcon className={styles.arrowIcon} />
                    <Logo />
                    <CloseIcon />
                </div>
                <div className={styles.titleRow}>
                    <h1>Образование</h1>
                    <p>{progress} из 4</p>
                </div>
                <Select
                    className={styles.select}
                    onChange={(event) => handleRegionSelect(event)}
                    value={region}>
                    <MenuItem value={'Субъект'} disabled selected>
                        <span style={{ color: 'gray' }}>Субъект</span>
                    </MenuItem>
                    {regions?.map((item: Region) => {
                        return (
                            <MenuItem key={item.number} value={item.number}>
                                {item.name}
                            </MenuItem>
                        );
                    })}
                </Select>

                <Select
                    className={styles.select}
                    onChange={(event) => handleCitySelect(event)}
                    value={city}>
                    <MenuItem value={'Населенный пункт'} disabled selected>
                        <span style={{ color: 'gray' }}>Населенный пункт</span>
                    </MenuItem>
                    {cities?.map((item: City) => {
                        return (
                            <MenuItem key={item.id} value={item.region}>
                                {item.name}
                            </MenuItem>
                        );
                    })}
                </Select>

                <Select
                    className={styles.select}
                    onChange={(event) => handleSchoolSelect(event)}
                    value={school}>
                    <MenuItem value={'Школа'} disabled selected>
                        <span style={{ color: 'gray' }}>Школа</span>
                    </MenuItem>
                    {schools?.map((item: School) => {
                        return (
                            <MenuItem key={item.id} value={item.region}>
                                {item.name}
                            </MenuItem>
                        );
                    })}
                </Select>

                <Select
                    className={styles.select}
                    onChange={(event) => setGrade((event.target as HTMLSelectElement).value)}
                    value={grade}>
                    <MenuItem value={'Класс'} disabled selected>
                        <span style={{ color: 'gray' }}>Класс</span>
                    </MenuItem>
                    {['5', '6', '7', '8', '9', '10', '11'].map((grade: string) => (
                        <MenuItem key={grade} value={grade}>
                            {grade}
                        </MenuItem>
                    ))}
                </Select>
                <Button variant="contained" disabled={isButtonDisabled} className={styles.button}>
                    Дальше
                </Button>
            </form>
        </div>
    );
};
