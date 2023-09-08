import styles from './ui.module.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import myOlimpIcon from '../../../../public/logo/myOlimpLogo.svg';
import avatarLink from '../../../../public/social/empty-avatar.svg';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Button } from '@mui/material';
import math from '../../../../public/discipline-icons/math.svg';
import physics from '../../../../public/discipline-icons/physics.svg';
import informatics from '../../../../public/discipline-icons/informatics.svg';
import history from '../../../../public/discipline-icons/history.svg';
import literature from '../../../../public/discipline-icons/literature.svg';
import russian from '../../../../public/discipline-icons/russian.svg';
import english from '../../../../public/discipline-icons/english.svg';
import mxk from '../../../../public/discipline-icons/mxk.svg';
import socialStudies from '../../../../public/discipline-icons/socialStudies.svg';
import law from '../../../../public/discipline-icons/law.svg';
import economics from '../../../../public/discipline-icons/economics.svg';
import chemistry from '../../../../public/discipline-icons/chemistry.svg';
import biology from '../../../../public/discipline-icons/biology.svg';
import ecology from '../../../../public/discipline-icons/ecology.svg';
import astranomics from '../../../../public/discipline-icons/astranomics.svg';
import technology from '../../../../public/discipline-icons/technology.svg';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

interface props {
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
}

interface IDiscipline {
    id: number;
    name: string;
    icon: string;
}

const disciplines: IDiscipline[] = [
    {
        id: 1,
        name: 'Математика',
        icon: math.src,
    },
    {
        id: 2,
        name: 'Физика',
        icon: physics.src,
    },
    {
        id: 3,
        name: 'Информатика',
        icon: informatics.src,
    },
    {
        id: 4,
        name: 'История',
        icon: history.src,
    },
    {
        id: 5,
        name: 'Литература',
        icon: literature.src,
    },
    {
        id: 6,
        name: 'Русский язык',
        icon: russian.src,
    },
    {
        id: 7,
        name: 'Английский',
        icon: english.src,
    },
    {
        id: 8,
        name: 'МХК',
        icon: mxk.src,
    },
    {
        id: 9,
        name: 'Обществознание',
        icon: socialStudies.src,
    },
    {
        id: 10,
        name: 'Право',
        icon: law.src,
    },
    {
        id: 11,
        name: 'Экономика',
        icon: economics.src,
    },
    {
        id: 12,
        name: 'Химия',
        icon: chemistry.src,
    },
    {
        id: 13,
        name: 'Биология',
        icon: biology.src,
    },
    {
        id: 14,
        name: 'Экология',
        icon: ecology.src,
    },
    {
        id: 15,
        name: 'Астрономия',
        icon: astranomics.src,
    },
    {
        id: 16,
        name: 'Технология',
        icon: technology.src,
    },
];

interface ISelectedDisciplines {
    selectedDisciplines: number[];
    setSelectedDisciplines: React.Dispatch<React.SetStateAction<number[]>>;
}

export const ThirdAdditionalDataForm: FC<props> = ({ progress, setProgress }) => {
    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]); // Измените тип на string[]
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (_, newInputValue: string) => {
        setInputValue(newInputValue);
    };

    const handleSelectDiscipline = () => {
        if (inputValue.trim() !== '') {
            setSelectedDisciplines((prevSelected) => [...prevSelected, inputValue.trim()]);
            setInputValue('');
        }
    };

    const isDisciplineSelected = (name: string) => selectedDisciplines.includes(name);

    const handleClick = () => {
        if (progress !== 3) {
            setProgress(progress + 1);
        }
    };

    return (
        <div className={styles.form}>
            <form>
                <div className={styles.logoRow}>
                    <ArrowBackOutlinedIcon className={styles.arrowIcon} />
                    <img src={myOlimpIcon.src} alt={'myOlimpIcon'} className={styles.myOlimpIcon} />
                    {/*<Logo />*/}
                </div>
                <div className={styles.titleRow}>
                    <h1>Дисциплины</h1>
                    <p>{progress} из 4</p>
                </div>
                <Stack spacing={2} sx={{ width: 300 }}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        onChange={(_, selectedOption) => {
                            if (typeof selectedOption === 'string') {
                                handleSelectDiscipline();
                            }
                        }}
                        onInputChange={(_, newInputValue) => {
                            handleInputChange(_, newInputValue);
                        }}
                        options={disciplines.map((option) => option.name)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Найти..."
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                        renderOption={(props, option) => (
                            <li key={option} {...props}>
                                {option}
                            </li>
                        )}
                    />
                </Stack>
                <div className={styles.disciplesContainer}>
                    {disciplines.map((discipline: IDiscipline) => (
                        <div
                            className={`${styles.disciplineContainer} ${
                                isDisciplineSelected(discipline.name) ? styles.selected : ''
                            }`}
                            key={discipline.id}
                            onClick={() => handleSelectDiscipline()}>
                            <img
                                src={discipline.icon}
                                alt={discipline.name}
                                className={`${styles.disciplesIcon} ${
                                    isDisciplineSelected(discipline.name) ? styles.selected : ''
                                }`}
                            />
                            <h3
                                className={`${styles.disciplineName} ${
                                    isDisciplineSelected(discipline.name) ? styles.selected : ''
                                }`}>
                                {discipline.name}
                            </h3>
                        </div>
                    ))}
                </div>
                <Button
                    variant="contained"
                    disabled={selectedDisciplines.length === 0}
                    className={styles.button}
                    onClick={() => handleClick()}>
                    Дальше
                </Button>
            </form>
        </div>
    );
};

{
    /*<input*/
}
{
    /*    type="file"*/
}
{
    /*    accept="image/*"*/
}
{
    /*    defaultValue={avatarLink.src}*/
}
{
    /*    style={{ display: 'none' }}*/
}
{
    /*    onChange={handleImageChange}*/
}
{
    /*    ref={fileInputRef}*/
}
{
    /*/>*/
}
{
    /*<img*/
}
{
    /*    src={selectedImage || avatarLink.src}*/
}
{
    /*    alt={'avatarUser'}*/
}
{
    /*    className={styles.avatar}*/
}
{
    /*    onClick={handleImageClick}*/
}
{
    /*/>*/
}
{
    /*<input*/
}
{
    /*    value={value}*/
}
{
    /*    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>*/
}
{
    /*        setValue(e.target.value as string)*/
}
{
    /*    }*/
}
{
    /*    placeholder="СНИЛС*"*/
}
{
    /*    className={styles.input}*/
}
{
    /*/>*/
}
