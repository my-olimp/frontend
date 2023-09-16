import { useAppSelector } from '@/hooks/useAppSelector';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work'>>;
}

export const WorkBlock: FC<props> = ({ setMode }) => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div className={styles.wrap}>
            <div className={styles.titleWrap}>
                <h1>Образование</h1>
                <div onClick={() => setMode('work')}>
                    <DriveFileRenameOutlineOutlinedIcon />
                </div>
            </div>

            <ul className={styles.infoWrap}>
                <li>
                    <h1>Регион</h1>
                    <h2>Регионкакойто</h2>
                    {/* {user && `${user.region.name}`} */}
                </li>
                <li>
                    <h1>Город</h1>
                    <h2>Алматы</h2>
                    {/* {user && `${user.city.name}`} */}
                </li>
                <li>
                    <h1>Учебное заведение</h1>
                    <h2>МБОУ СОШ АХВАХ</h2>
                    {/* {user && `${user.school.name}`} */}
                </li>
            </ul>
        </div>
    );
};
