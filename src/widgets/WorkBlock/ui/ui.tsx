import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contact' | 'avatar'>>;
    tag?: string;
    userdata?: any;
}

export const WorkBlock: FC<props> = ({ setMode, userdata, tag }) => {
    const getValue = (value: any) => {
        if (value == 'undefined' || value == null) return 'Не указано'
        return value
    }

    return (
        <div className={styles.wrap}>
            {tag == 't' && (
                <>
                    <div className={styles.titleWrap}>
                        <h1>Работа</h1>
                        <div onClick={() => setMode('work')}>
                            <DriveFileRenameOutlineOutlinedIcon />
                        </div>
                    </div>

                    <ul className={styles.infoWrap}>
                        <li>
                            <h4>Регион</h4>
                            <h5>{userdata && `${getValue(userdata?.region?.name)}`}</h5>
                        </li>
                        <li>
                            <h4>Город</h4>
                            <h5>{userdata && `${getValue(userdata?.city?.name)}`}</h5>
                        </li>
                        <li>
                            <h4>Учебное заведение</h4>
                            <h5>{userdata && `${getValue(userdata?.school?.name)}`}</h5>
                        </li>
                        <li>
                            <h4>Должность</h4>
                            <h5>{userdata && `${getValue(userdata?.work)}`}</h5>
                        </li>
                        <li>
                            <h4>Предметы</h4>
                            <h5>{userdata && `${getValue(userdata?.subjects)}`}</h5>
                        </li>
                    </ul>
                </>
            )}
            {tag == 's' && (
                <>
                    <div className={styles.titleWrap}>
                        <h1>Образование</h1>
                        <div onClick={() => setMode('work')}>
                            <DriveFileRenameOutlineOutlinedIcon />
                        </div>
                    </div>

                    <ul className={styles.infoWrap}>
                        <li>
                            <h4>Регион</h4>
                            {/* <h5>{userdata && `${getValue(userdata?.region?.name)}`}</h5> */}
                            <h5>Москва</h5>
                        </li>
                        <li>
                            <h4>Город</h4>
                            {/* <h5>{userdata && `${getValue(userdata?.city?.name)}`}</h5> */}
                            <h5>Москва</h5>
                        </li>
                        <li>
                            <h4>Учебное заведение</h4>
                            {/* <h5>{userdata && `${getValue(userdata?.school?.name)}`}</h5> */}
                            <h5>ГБОУ Цифровая школа</h5>

                        </li>
                        <li>
                            <h4>Класс</h4>
                            {/* <h5>{userdata && `${getValue(userdata?.grade)}`}</h5> */}
                            <h5>11 класс</h5>
                        </li>
                    </ul>
                </>
            )}
            {tag == 'c' && (
                <>
                    <div className={styles.titleWrap}>
                        <h1>Работа</h1>
                        <div onClick={() => setMode('work')}>
                            <DriveFileRenameOutlineOutlinedIcon />
                        </div>
                    </div>

                    <ul className={styles.infoWrap}>
                        <li>
                            <h4>Регион</h4>
                            <h5>{userdata && `${getValue(userdata?.region?.name)}`}</h5>
                        </li>
                        <li>
                            <h4>Город</h4>
                            <h5>{userdata && `${getValue(userdata?.city?.name)}`}</h5>
                        </li>
                        <li>
                            <h4>Организация</h4>
                            <h5>{userdata && `${getValue(userdata?.organization?.name)}`}</h5>
                        </li>
                        <li>
                            <h4>Должность</h4>
                            <h5>{userdata && `${getValue(userdata?.work)}`}</h5>
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
};
