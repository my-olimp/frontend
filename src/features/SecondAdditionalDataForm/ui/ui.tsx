import React, { Dispatch, FC, FormEvent, SetStateAction, useEffect, useState } from 'react';
import styles from './ui.module.scss';
import Logo from '@/entities/Logo/ui/ui';
import { Button, MenuItem, Select } from '@mui/material';
import { GetRegions, GetSubjects, GetSchools } from '@/store/features/second-auth';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CloseIcon from '@mui/icons-material/Close';

interface props { // @nics57
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
}

interface regions {
    number: number;
    name: string;
}

interface subjecttype {
    id: number;
    name: string;
}

export const SecondAdditionalDataForm: FC<props> = ({ progress, setProgress }) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [subjects, setSubjects] = useState([]);
    const [regions, setRegions] = useState([]);
    const [schools, setSchools] = useState([]);
    
    const [subject, setSubject] = useState<string>('Субъект');
    const [region, setRegion] = useState<string>('Населенный пункт');
    const [school, setSchool] = useState<string>('Учебное заведение');
    const [grade, setGrade] = useState<string>('Класс');
    const [grades] = useState([5,6,7,8,9,10,11])

    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

    function checkSelect() {
        console.log("ПРОВЕРКА")
        console.log(subject !== 'Субъект')
        if (subject !== 'Субъект' && region !== 'Населенный пункт' && school !== 'Учебное заведение' && grade !== 'Класс') setButtonDisabled(false)
    }

    useEffect(() => {
        async function getApi() {
            try {
                await dispatch(GetSubjects());
                setIsLoading1(false);
                await dispatch(GetRegions());
                setIsLoading2(false);
            } catch (error) {
                console.log(error)
            }
        }
    
        getApi();
    }, [dispatch]);
    
    const mySubjects = useSelector((state: any) => state.forsubjects.subjects)
    const myRegions = useSelector((state: any) => state.user.regions);
    const mySchools = useSelector((state: any) => state.forschools.schools);
    
    useEffect(() => {
        if (mySubjects && mySubjects.length > 0) setSubjects(mySubjects);
        if (myRegions && myRegions.length > 0) setRegions(myRegions);
        if (mySchools && mySchools.length > 0) setSchools(mySchools)
    }, [myRegions, mySubjects, mySchools]);

    const subjectHandler = (event: any) => {
        setSubject(event.target.value as string)
        checkSelect();
    }

    const regionHandler = async (e: any) => {
        setButtonDisabled(true)
        setRegion(e.target.value as string)
        setSchool('Учебное заведение')
        const object: any = regions.find((city: regions) => city.name === e.target.value);
        const regionValue = object ? object.number.toString() : "";
        console.log(object)
        console.log(regionValue)
        const sch = await dispatch(GetSchools(regionValue));
        setSchools(sch.payload.data)
        setIsLoading3(false);
        checkSelect();
    }

    const schoolHandler = (event: any) => {
        setSchool(event.target.value as string)
        checkSelect();
    }

    const gradeHandler = (event: any) => {
        setGrade(event.target.value as string)
        checkSelect();
    }

    const handleClick = () => {setProgress(progress + 1)}
    
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
                    onChange={(event) => subjectHandler(event)}
                    value={subject}
                >
                    <MenuItem value={'Субъект'} disabled selected>
                        <span style={{ color: 'gray' }}>Субъект</span>
                    </MenuItem>
                    {isLoading1 ? (
                        <MenuItem value={''}></MenuItem>
                    ) : (
                        subjects.map((item: subjecttype) => (
                            <MenuItem key={item.id} value={item.name}>
                                {item.name}
                            </MenuItem>
                        ))
                    )}
                </Select>

                <Select
                    className={styles.select}
                    onChange={(event) => regionHandler(event)}
                    value={region}
                >
                    <MenuItem value={'Населенный пункт'} disabled selected>
                        <span style={{ color: 'gray' }}>Населенный пункт</span>
                    </MenuItem>
                    {isLoading2 ? (
                        <MenuItem value={''}></MenuItem>
                    ) : (
                        regions.map((item: regions) => (
                            <MenuItem key={item.number} value={item.name}>
                                {item.name}
                            </MenuItem>
                        ))
                    )}
                </Select>
                <Select
                    className={styles.select}
                    onChange={(event) => schoolHandler(event)}
                    value={school}
                >
                    <MenuItem value={'Учебное заведение'} disabled selected>
                        <span style={{ color: 'gray' }}>Учебное заведение</span>
                    </MenuItem>
                    {isLoading3 ? (
                        <MenuItem value={''}></MenuItem>
                    ) : (
                        schools.map((item: any) => (
                            <MenuItem key={item.id} value={item.name}>
                                {item.name}
                            </MenuItem>
                        ))
                    )}
                </Select>
                <Select
                    className={styles.select}
                    onChange={(event) => gradeHandler(event)}
                    value={grade}
                >
                    <MenuItem value={'Класс'} disabled selected>
                        <span style={{ color: 'gray' }}>Класс</span>
                    </MenuItem>
                        {grades.map((item: any, index: number) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                </Select>
                <Button
                    variant="contained"
                    disabled={isButtonDisabled}
                    className={styles.button}
                    onClick={() => handleClick()}
                >
                    Дальше
                </Button>
            </form>
        </div>
    );
};
