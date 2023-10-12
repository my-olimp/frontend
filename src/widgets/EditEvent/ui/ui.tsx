import { Dispatch, EventHandler, FC, MouseEvent, SetStateAction, useRef, useEffect, useState } from 'react';
import styles from './ui.module.scss';
import { MenuItem, Select, ListItemIcon, FormControl } from '@mui/material';


// ICONS
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ListIcon from '@mui/icons-material/List';


interface props {
    setMode: Dispatch<SetStateAction<string>>;
    event: any;
    editEvent: Function;
    colors: { color: string; text: string; }[];
    subjects: string[];
    getAntiColor: Function;
}


export const EditEvent: FC<props> = ({ setMode, event, editEvent, colors, subjects, getAntiColor }) => {
    const [editEventName, setEditEventName] = useState<string>('')
    const [isDisabled, setIsDisabled] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const [subject, setSubject] = useState('Математика');
    const [color, setColor] = useState('Математика');

    const subjectHandler = (event: any) => {
        setSubject((event.target as HTMLSelectElement).value)
    }

    const colorHandler = (event: any) => {
        setColor((event.target as HTMLSelectElement).value)
    }

    const inputHandler = (text: string) => {
        if (text.length > 3) { setIsDisabled(false) } else { setIsDisabled(true) };
        setEditEventName(text);
    }

    const clearAll = () => {
        setMode('')
        setEditEventName('')
        setSubject('Математика')
        setColor('Математика')
    }

    const handleClickOutSide: EventHandler<MouseEvent<HTMLDivElement>> = (event) => {
        if (event.target === modalRef.current) {
            clearAll()
        }
    };

    useEffect(() => {
        setEditEventName(event.title);
        setSubject(event.subject)
        setColor(getAntiColor(event.color))
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                clearAll();
            }
        });
        return () => {
            document.removeEventListener('keydown', (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    clearAll();
                }
            });
        };
    }, []);


    return (
        <div
            className={styles.screen}
            ref={modalRef}
            onClick={(event) => handleClickOutSide(event)}
        >
            <div className={styles.popup}>
                <h4 className={styles.popuptitle_edit}>Редактирование события</h4>
                <input
                    className={styles.popupinput}
                    type="text"
                    placeholder='Название'
                    maxLength={40}
                    value={editEventName}
                    onChange={e => inputHandler(e.target.value)}
                />
                <div className={`${styles.mid} df jcsb aic`}>
                    <div className={`${styles.midleft} df aic`}>
                        <div className={`${styles.tag} df jcc aic`}>Событие</div>
                        <div className={`${styles.tag} df jcc aic`}>Задача</div>
                    </div>
                    <div className={`${styles.midright} df aic jcc`}>
                        <BookmarkBorderOutlinedIcon className='cp' />
                    </div>
                </div>
                <div className={styles.settings}>
                    <div className={`${styles.time} df jcsb aic`}>
                        <div className={`${styles.timeleft} df aic`}>
                            <QueryBuilderIcon />
                            <span>Понедельник, 18 сентября</span>
                        </div>
                        <div className={`${styles.timeright} df aic`}>13:00 - 14:00</div>
                    </div>
                    <div className={`${styles.files} df aic`}>
                        <AttachFileIcon />
                        <span>Добавить файлы</span>
                    </div>
                    <div className={`${styles.selectdiv} df aic`}>
                        <ListIcon />
                        <Select
                            className={styles.select}
                            onChange={event => subjectHandler(event)}
                            value={subject}
                            sx={{
                                border: 'none',
                                '&& div': {
                                    padding: '0',
                                    minWidth: '100px',
                                },
                                '&& fieldset': {
                                    border: 'none',
                                },
                            }}
                        >
                            <MenuItem value={subject} disabled selected>
                                <span style={{ color: 'black' }}>{subject}</span>
                            </MenuItem>
                            {subjects.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                        <FormControl>
                            <Select
                                className={styles.select}
                                value={color}
                                onChange={event => colorHandler(event)}
                                sx={{
                                    border: 'none',
                                    '&& div': {
                                        padding: '0',
                                        minWidth: '0px',
                                        marginRight: '2px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '17.5px',
                                    },
                                    '&& fieldset': {
                                        border: 'none',
                                    },
                                }}
                            >
                                {colors.map((item, index) =>
                                (<MenuItem key={index} value={item.text} data-color={item.color}>
                                    <ListItemIcon>
                                        <div
                                            style={{
                                                width: '16px',
                                                height: '16px',
                                                backgroundColor: item.color,
                                                borderRadius: '50%',
                                            }}
                                        ></div>
                                    </ListItemIcon>
                                </MenuItem>)
                                )}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className={`${styles.btns} df jcsb aic`}>
                    <button
                        className={`${styles.createbtn} df jcc aic cp`}
                        onClick={() => editEvent(event.id, editEventName, color, subject, event.start, event.end)}
                        disabled={isDisabled}
                    >
                        Сохранить
                    </button>
                    <div className={`${styles.closebtn} df jcc aic cp`} onClick={() => clearAll()}>Отменить</div>
                </div>
            </div>
        </div>
    );
};
