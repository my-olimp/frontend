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
                    <h4>Почта</h4>
                    <h5>{getValue(user?.email)}</h5>
                </li>
                {/* <li>
                    <h4>Номер телефона</h4>
                    <h5>{getValue(user?.phoneNumber)}</h5>
                </li> */}
            </ul>
        </div>
    );
};
