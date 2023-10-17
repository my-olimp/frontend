import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'avatar' | 'contacts'>>;
}

export const PersonalInfoBlock: FC<props> = ({ setMode }) => {
    const { user } = useAppSelector((state) => state.auth);

    const getValue = (value) => {
        return value ? `${value}` : 'Не указано';
    };

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
    );
};
