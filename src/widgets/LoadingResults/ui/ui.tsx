import {
    Dispatch,
    EventHandler,
    FC,
    MouseEvent,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react';
import styles from './ui.module.scss';
import { MenuItem, Select } from '@mui/material';

interface props {
    setMode: Dispatch<SetStateAction<boolean>>;
}

export const LoadingResults: FC<props> = ({ setMode }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [subject, setSubject] = useState<string>("Не указано")
    const [subjects, setSubjects] = useState<string[]>(['Информатика', 'Математика', 'Русский язык', 'Русская литература', 'История', 'Физика'])


    const handleClickOutSide: EventHandler<MouseEvent<HTMLDivElement>> = (event) => {
        if (event.target === modalRef.current) {
            setMode(false);
        }
    };

    const downloadResults = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setMode(false)
        }, 1000)
    }

    useEffect(() => {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMode(false);
            }
        });
        return () => {
            document.removeEventListener('keydown', () => { });
        };
    }, []);


    return (
        <div>
            <div
                className={styles.screen}
                ref={modalRef}
                onClick={(event) => handleClickOutSide(event)}
            >
                <div className={styles.form}>
                    <h6>Загрузка результатов</h6>
                    <span className={styles.inputs}>
                        <Select
                            className={styles.select}
                            onChange={(event) => {setSubject(event.target.value); setIsDisabled(false)}}
                            value={subject}
                        >
                            <MenuItem value={"Не указано"} selected disabled>Предмет</MenuItem>
                            {subjects.map((item: any, index: number) => (
                                <MenuItem key={index} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </Select>
                    </span>
                    <span className={styles.buttons}>
                        <button disabled={isDisabled} className={styles.submit} onClick={() => downloadResults()}>
                            {loading && <div className={styles.customLoader}></div>}
                            <span>Загрузить</span>
                        </button>
                        <button className={styles.cancel} onClick={() => setMode(false)}>
                            Отменить
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};
