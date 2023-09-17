import Logo from '@/entities/Logo/ui/ui';
import { useAppSelector } from '@/hooks/useAppSelector';
import { City, GetCity, GetRegions, GetSchools, Region, School } from '@/store/features/auth-slice';
import { RootState } from '@/store/store';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Button, MenuItem, Select } from '@mui/material';
import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import styles from './ui.module.scss';

interface props { // nics57 :D
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
}

export const SecondAdditionalDataForm: FC<props> = ({ progress, setProgress }) => {
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const [region, setRegion] = useState<string>('Субъект');
    const [city, setCity] = useState<string>('Населенный пункт');
    const [school, setSchool] = useState<string>('Школа');
    const [grade, setGrade] = useState<string>('Класс');

    // apidata
    const [regions, setRegions] = useState([]);
    const [cities, setCities] = useState([]);
    const [schools, setSchools] = useState([]);

    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        async function getData() {
            const regionsdata = await dispatch(GetRegions())
            setRegions(regionsdata.payload.data)
        }
        getData()
    }, [setRegion]);

    useEffect(() => {
        region !== 'Субъект' && city !== 'Населенный пункт' && school !== 'Школа' && grade !== 'Класс' ?
        setButtonDisabled(false) :
        setButtonDisabled(true)
    }, [region, city, school, grade]);

    const handleRegionSelect = (event: any) => {
        setRegion((event.target as HTMLSelectElement).value);
        dispatch(GetCity(''+event.target.value)).then(res => setCities(res.payload.data))
    };

    const handleCitySelect = (event: any) => {
        setCity((event.target as HTMLSelectElement).value);
        dispatch(GetSchools(''+event.target.value)).then(res => setSchools(res.payload.data))
    };

    const handleSchoolSelect = (event: any) => {
        setSchool((event.target as HTMLSelectElement).value);
    };

    return (
        <div className={styles.form}>
            <form>
                <div className={styles.logoRow}>
                    <ArrowBackOutlinedIcon className={styles.arrowIcon} />
                    <Logo />
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
                    {regions.length > 0 ? (
                        regions.map((item: Region) => (
                            <MenuItem key={item.number} value={item.number}>
                                {item.name}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>Loading...</MenuItem>
                    )}
                </Select>

                <Select
                    className={styles.select}
                    onChange={(event) => handleCitySelect(event)}
                    value={city}>
                    <MenuItem value={'Населенный пункт'} disabled selected>
                        <span style={{ color: 'gray' }}>Населенный пункт</span>
                    </MenuItem>
                    {cities.length > 0 ? (
                        cities.map((item: City) => {
                            return (
                                <MenuItem key={item.id} value={item.region}>
                                    {item.name}
                                </MenuItem>
                            );
                        })
                    ) : (
                        <MenuItem disabled>Loading...</MenuItem>
                    )}
                </Select>

                <Select
                    className={styles.select}
                    onChange={(event) => handleSchoolSelect(event)}
                    value={school}>
                    <MenuItem value={'Школа'} disabled selected>
                        <span style={{ color: 'gray' }}>Школа</span>
                    </MenuItem>
                    {schools.length > 0 ? (
                        schools.map((item: School) => {
                            return (
                                <MenuItem key={item.id} value={item.region}>
                                    {item.name}
                                </MenuItem>
                            );
                        })
                    ) : (
                        <MenuItem disabled>Loading...</MenuItem>
                    )}
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
                <Button
                    variant="contained"
                    disabled={isButtonDisabled}
                    className={styles.button}
                    onClick={() => setProgress(progress+1)}
                >
                    Дальше
                </Button>
            </form>
        </div>
    );
};
