import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contact' | 'teacher'>>;
    userdata?: any;
}

export const PersonalInfoBlock: FC<props> = ({ setMode, userdata }) => {
    const getValue = (value: any) => {
        if (value == 'undefined' || value == null) return 'Не указано'
        return value
    }

    const getName = (value: any) => {
        if (value.first_name == null && value.second_name == null) return 'Не указано'
        return `${value.first_name} ${value.second_name} ${value.third_name == null ? '-' : value.third_name}`
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.titleWrap}>
                <h1>Личная информация</h1>
                <div onClick={() => setMode('personal')}>
                    <DriveFileRenameOutlineOutlinedIcon />
                </div>
            </div>
            <ul className={styles.infoWrap}>
                <li>
                    <h1>ID</h1>
                    <h2>{getValue(userdata?.id)}</h2>
                </li>
                <li>
                    <h1>ФИО</h1>
                    <h2>{userdata && getName(userdata)}</h2>
                </li>
                <li>
                    <h1>Дата рождения</h1>
                    <h2>{getValue(userdata?.data_of_birth)}</h2>
                </li>
                <li>
                    <h1>Пол</h1>
                    <h2>
                        {userdata &&
                            `${
                                userdata.gender === 'm'
                                    ? 'Мужской'
                                    : userdata.gender === 'f'
                                    ? 'Женский'
                                    : 'Не указано'
                            }`}
                    </h2>
                </li>
                <li>
                    <h1>СНИЛС</h1>
                    <h2>{userdata && getValue(userdata?.SNILS)}</h2>
                </li>
            </ul>
        </div>
    );
};
