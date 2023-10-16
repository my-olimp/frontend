import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'contacts' | 'avatar'>>;
    tag?: string;
    userdata?: any;
}

export const WorkBlock: FC<props> = ({ setMode, tag, userdata }) => {
    const getValue = (value: any) => {
        if (value == 'undefined' || value == null) return 'Не указано'
        return value
    }
    const {user } = useAppSelector(user => user.auth)

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
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
};
