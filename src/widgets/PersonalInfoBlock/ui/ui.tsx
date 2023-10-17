import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
<<<<<<< HEAD
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contact' | 'teacher'>>;
    userdata?: any;
    tag?: any;
=======
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'avatar' | 'contacts'>>;
>>>>>>> ef387c18459c1d2cf890a077d37a2f490c29a44e
}

export const PersonalInfoBlock: FC<props> = ({ setMode, userdata, tag }) => {
    const getValue = (value: any) => {
        if (value == 'undefined' || value == null) return 'Не указано'
        return value
    }

    const getName = (value: any) => {
        if (value.first_name == null && value.second_name == null) return 'Не указано'
        return `${value.first_name} ${value.second_name} ${value.third_name == null ? '-' : value.third_name}`
    }

    return (
        <>
            {tag == 's' && (
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
                                    `${userdata.gender === 'm'
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
<<<<<<< HEAD
            )}
            {tag == 't' || 'c' && (
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
                                    `${userdata.gender === 'm'
                                        ? 'Мужской'
                                        : userdata.gender === 'f'
                                            ? 'Женский'
                                            : 'Не указано'
                                    }`}
                            </h2>
                        </li>
                    </ul>
                </div>
            )}

        </>
=======
            </div>
            <ul className={styles.infoWrap}>
                <li>
                    <h4>ID</h4>
                    <h5>{getValue(user?.id)}</h5>
                </li>
                <li>
                    <h4>ФИО</h4>
                    <h5>{user && `${user.first_name} ${user.second_name} ${user.third_name}`}</h5>
                </li>
                <li>
                    <h4>Дата рождения</h4>
                    <h5>{getValue(user?.data_of_birth)}</h5>
                </li>
                <li>
                    <h4>Пол</h4>
                    <h5>
                        {user &&
                            `${
                                user.gender === 'm'
                                    ? 'Мужской'
                                    : user.gender === 'f'
                                    ? 'Женский'
                                    : 'Не указано'
                            }`}
                    </h5>
                </li>
                <li>
                    <h4>СНИЛС</h4>
                    <h5>{getValue(user?.SNILS)}</h5>
                </li>
            </ul>
        </div>
>>>>>>> ef387c18459c1d2cf890a077d37a2f490c29a44e
    );
};
