import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contact' | 'avatar'>>;
    userdata?: any;
    tag?: any;
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
                            <h4>ID</h4>
                            <h5>{getValue(userdata?.id)}</h5>
                        </li>
                        <li>
                            <h4>ФИО</h4>
                            <h5>{userdata && getName(userdata)}</h5>
                        </li>
                        <li>
                            <h4>Дата рождения</h4>
                            <h5>{getValue(userdata?.data_of_birth)}</h5>
                        </li>
                        <li>
                            <h4>Пол</h4>
                            <h5>
                                {userdata &&
                                    `${userdata.gender === 'm'
                                        ? 'Мужской'
                                        : userdata.gender === 'f'
                                            ? 'Женский'
                                            : 'Не указано'
                                    }`}
                            </h5>
                        </li>
                        <li>
                            <h4>СНИЛС</h4>
                            <h5>{userdata && getValue(userdata?.SNILS)}</h5>
                        </li>
                    </ul>
                </div>
            )}
            {tag == 't' || 'c' && (
                <div className={`${styles.wrap} ${tag == 'c' ? `${styles.wrap_c}` : ''}`}>
                    <div className={styles.titleWrap}>
                        <h1>{tag == 't' ? "Личная информация" : "Данные"}</h1>
                        <div onClick={() => setMode('personal')}>
                            <DriveFileRenameOutlineOutlinedIcon />
                        </div>
                    </div>
                    <ul className={styles.infoWrap}>
                        <li>
                            <h4>ID</h4>
                            <h5>{getValue(userdata?.id)}</h5>
                        </li>
                        <li>
                            <h4>ФИО</h4>
                            <h5>{userdata && getName(userdata)}</h5>
                        </li>
                        <li>
                            <h4>Дата рождения</h4>
                            <h5>{getValue(userdata?.data_of_birth)}</h5>
                        </li>
                        <li>
                            <h4>Пол</h4>
                            <h5>
                                {userdata &&
                                    `${userdata.gender === 'm'
                                        ? 'Мужской'
                                        : userdata.gender === 'f'
                                            ? 'Женский'
                                            : 'Не указано'
                                    }`}
                            </h5>
                        </li>
                    </ul>
                </div>
            )}

        </>
    );
};
