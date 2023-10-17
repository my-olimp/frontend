import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contacts' | 'avatar'>>;
    tag?: string;
    userdata?: any;
}

<<<<<<< HEAD
export const WorkBlock: FC<props> = ({ setMode, userdata, tag }) => {
=======
export const WorkBlock: FC<props> = ({ setMode, tag, userdata }) => {
>>>>>>> ef387c18459c1d2cf890a077d37a2f490c29a44e
    const getValue = (value: any) => {
        if (value == 'undefined' || value == null) return 'Не указано'
        return value
    }
<<<<<<< HEAD
=======
    const {user } = useAppSelector(user => user.auth)
>>>>>>> ef387c18459c1d2cf890a077d37a2f490c29a44e

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
<<<<<<< HEAD
                            <h1>Регион</h1>
                            {/* {user && `${user?.region?.name}`} */}
                        </li>
                        <li>
                            <h1>Город</h1>
                            {/* {user && `${user?.city?.name}`} */}
                        </li>
                        <li>
                            <h1>Учебное заведение</h1>
                            {/* <h2>{getValue(user?.school?.name)}</h2> */}
                        </li>
                        <li>
                            <h1>Должность</h1>
                            {/* <h2>{getValue(user?.city?.name)}</h2> */}
                        </li>
                        <li>
                            <h1>Предметы</h1>
                            {/* <h2>{getValue(user?.school?.name)}</h2> */}
=======
                            <h4>Регион</h4>
                            <h5>{getValue(user?.city?.name)}</h5>
                        </li>
                        <li>
                            <h4>Город</h4>
                            <h5>{getValue(user?.city?.name)}</h5>
                        </li>
                        <li>
                            <h4>Учебное заведение</h4>
                            <h5>{getValue(user?.school?.name)}</h5>
                        </li>
                        <li>
                            <h4>Должность</h4>
                            <h5>{getValue(user?.city?.name)}</h5>
                        </li>
                        <li>
                            <h4>Предметы</h4>
                            <h5>{getValue(user?.school?.name)}</h5>
>>>>>>> ef387c18459c1d2cf890a077d37a2f490c29a44e
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
<<<<<<< HEAD
                            <h1>Регион</h1>
                            <h2>{userdata && `${getValue(userdata?.region?.name)}`}</h2>
                        </li>
                        <li>
                            <h1>Город</h1>
                            <h2>{userdata && `${getValue(userdata?.city?.name)}`}</h2>
                        </li>
                        <li>
                            <h1>Учебное заведение</h1>
                            <h2>{getValue(userdata?.school?.name)}</h2>
                        </li>
                        <li>
                            <h1>Класс</h1>
                            <h2>{getValue(userdata?.grade)}</h2>
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
                            <h1>Регион</h1>
                            <h2>{userdata && `${getValue(userdata?.region?.name)}`}</h2>
                        </li>
                        <li>
                            <h1>Город</h1>
                            <h2>{userdata && `${getValue(userdata?.city?.name)}`}</h2>
                        </li>
                        <li>
                            <h1>Организация</h1>
                            <h2>{getValue(userdata?.organization?.name)}</h2>
                        </li>
                        <li>
                            <h1>Должность</h1>
                            <h2>{getValue(userdata?.work)}</h2>
=======
                            <h4>Регион</h4>
                            <h5>{userdata && `${getValue(userdata?.region?.name)}`}</h5>
                        </li>
                        <li>
                            <h4>Город</h4>
                            <h5>{userdata && `${getValue(userdata?.city?.name)}`}</h5>
                        </li>
                        <li>
                            <h4>Учебное заведение</h4>
                            <h5>{getValue(userdata?.school?.name)}</h5>
                        </li>
                        <li>
                            <h4>Класс</h4>
                            <h5>{getValue(userdata?.grade)}</h5>
>>>>>>> ef387c18459c1d2cf890a077d37a2f490c29a44e
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
};
