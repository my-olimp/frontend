import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'avatar' | 'contacts'>>;
}

export const ProfileContacts: FC<props> = ({ setMode }) => {
    const { user } = useAppSelector((state) => state.auth);

    const getValue = (value) => {
        return value ? `${value}` : 'Не указано';
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.titleWrap}>
                <h1>Контакты</h1>
                <div onClick={() => setMode('contacts')}>
                    <DriveFileRenameOutlineOutlinedIcon />
                </div>
            </div>

            <ul className={styles.infoWrap}>
                <li>
                    <h1>Почта</h1>
                    <h2>{getValue(user?.email)}</h2>
                </li>
                <li>
                    <h1>Номер телефона</h1>
                    <h2>{getValue(user?.phoneNumber)}</h2>
                </li>
            </ul>
        </div>
    );
};
