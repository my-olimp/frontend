import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work'>>;
}

export const PersonalInfoBlock: FC<props> = ({ setMode }) => {
    const { user } = useAppSelector((state) => state.auth);

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
                    <h2>{user && `${user.id}`}</h2>
                </li>
                <li>
                    <h1>ФИО</h1>
                    <h2>{user && `${user.first_name} ${user.second_name} ${user.third_name}`}</h2>
                </li>
                <li>
                    <h1>Дата рождения</h1>
                    <h2>{user && `${user.data_of_birth}`}</h2>
                </li>
                <li>
                    <h1>Пол</h1>
                    <h2>{user && `${user.gender === 'm' ? 'Мужской' : 'Женский'}`}</h2>
                </li>
                <li>
                    <h1>Почта</h1>
                    <h2>{user && `${user.email}`}</h2>
                </li>
            </ul>
        </div>
    );
};
