import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contact' | 'teacher'>>;
    tag?: string;
    userdata?: any;
}

export const WorkBlock: FC<props> = ({ setMode, tag, userdata }) => {
    const getValue = (value: any) => {
        if (value == 'undefined' || value == null) return 'Не указано'
        return value
    }

    return (
        <div className={styles.wrap}>
            {tag === 'teacher' ? (
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
                        </li>
                    </ul>
                </>
            ) : (
                <>
                    <div className={styles.titleWrap}>
                        <h1>Образование</h1>
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
        </div>
    );
};
