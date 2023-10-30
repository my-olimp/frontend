import { Dispatch, EventHandler, FC, MouseEvent, SetStateAction, useRef, useEffect, useState } from 'react';
import styles from './ui.module.scss';
import { MenuItem, Select, ListItemIcon, FormControl } from '@mui/material';
import dayjs from 'dayjs';


// ICONS
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ListIcon from '@mui/icons-material/List';
import { LocalizationProvider, MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import useIsMobile from '@/hooks/UseIsMobile';
import { nanoid } from 'nanoid';
import { days, month } from '@/store/features/auth-slice';


interface props {
    setMode: Dispatch<SetStateAction<string>>;
    event: any;
    editEvent: Function;
    colors: { color: string; text: string; }[];
    subjects: string[];
    getAntiColor: Function;
}


export const EditEvent: FC<props> = ({ setMode, event, editEvent, colors, subjects, getAntiColor }) => {
    const isMobile = useIsMobile(600)
    const [editEventName, setEditEventName] = useState<string>('')
    const [isDisabled, setIsDisabled] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const [isFavorite, setIsFavorite] = useState(false)
    const [subject, setSubject] = useState('Математика');
    const [color, setColor] = useState('Математика');
    const [type, setType] = useState<"event" | "task">("event")
    const [startTime, setStartTime] = useState<any>(dayjs('2022-04-17T14:30'));
    const [endTime, setEndTime] = useState<any>(dayjs('2022-04-17T15:30'));
    const [date, setDate] = useState<any>(dayjs(Date.now()))
    const [errorDate, setErrorDate] = useState<boolean>(false)
    const [files, setFiles] = useState<any[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null);

    const subjectHandler = (event: any) => {
        setSubject((event.target as HTMLSelectElement).value)
    }

    const colorHandler = (event: any) => {
        setColor((event.target as HTMLSelectElement).value)
    }

    const inputHandler = (text: string) => {
        if (text.length > 0 && !errorDate) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
        setEditEventName(text);
    }

    const clearAll = () => {
        setMode('')
        setIsFavorite(false)
        setEditEventName('')
        setStartTime(dayjs('2022-04-17T14:30'))
        setEndTime(dayjs('2022-04-17T15:30'))
        setDate(dayjs(Date.now()))
        setType('event')
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
        setType(event.type)
        setIsFavorite(event.favorite)
        setColor(getAntiColor(event.color))
        setFiles(event.files)
        console.log(event.files)
        setStartTime(dayjs(event.start))
        setEndTime(dayjs(event.end))
        setDate(dayjs(event.start))
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

    const handleChangeTimeEnd = (value) => {
        setEndTime(value)
        if (startTime.diff(value) > 0) {
            setErrorDate(true);
            setIsDisabled(true)
        } else if (editEventName.length > 3) {
            setErrorDate(false)
            setIsDisabled(false)
        } else {
            setErrorDate(false)
            setIsDisabled(true)
        }
    }

    const handleChangeTimeStart = (value) => {
        setStartTime(value)
        if (value.diff(endTime) > 0) {
            setErrorDate(true);
            setIsDisabled(true)
        } else if (editEventName.length > 3) {
            setErrorDate(false)
            setIsDisabled(false)
        } else {
            setErrorDate(false)
            setIsDisabled(true)
        }
    }


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const array = e.target.files
        // const narray = array && (array as []).map((item) => item.fileLink = URL.createObjectURL(item))
        const fileEls = array?.length ? [...files, ...(array)]?.slice(0, 5) : [];

        if (fileEls.length) {
            setFiles(fileEls)
        }
    };


    const deleteFile = (index) => {
        const array = [...files]
        array.splice(index, 1)
        setFiles(array)
    }


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
                    maxLength={80}
                    value={editEventName}
                    onChange={e => inputHandler(e.target.value)}
                />
                <div className={`${styles.mid} df jcsb aic`}>
                    <div className={`${styles.midleft} df aic`}>
                        <div onClick={() => setType('event')} className={`${type === 'event' ? styles.tagChecked : styles.tag} df jcc aic`}>Событие</div>
                        <div onClick={() => setType('task')} className={`${type === 'task' ? styles.tagChecked : styles.tag} df jcc aic`}>Задача</div>
                    </div>
                    <div onClick={() => setIsFavorite(prev => !prev)} className={`${styles.midright} df aic jcc`}>
                        {!isFavorite ?
                            <BookmarkBorderOutlinedIcon style={{ fontSize: `${isMobile ? '25px' : '32px'}`, color: '#222222' }} className='cp' />
                            :
                            <BookmarkIcon style={{ fontSize: `${isMobile ? '25px' : '32px'}`, color: '#3579F8' }} className='cp' />
                        }
                    </div>
                </div>
                <div className={styles.settings}>
                    <div className={`${styles.time} df jcsb aic`}>
                        <div className={`${styles.timeleft} df aic`}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['MobileDatePicker']}>
                                    <MobileDatePicker
                                        className={styles.datepicker}
                                        value={date}
                                        onChange={(value) => setDate(value)}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <QueryBuilderIcon fontSize={isMobile ? 'small' : 'medium'} />
                            <span>{days[date.day()]}, {date.format('DD')} {month[date.month()]}</span>
                        </div>
                        <div className={`${styles.timeright} df aic`}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['MobileTimePicker']}>
                                    <MobileTimePicker
                                        onChange={(value) => handleChangeTimeStart(value)}
                                        defaultValue={dayjs('2022-04-17T14:30')}
                                        value={startTime}
                                        className={styles.timepicker}
                                        ampm={false}
                                    />
                                    <span> - </span>
                                    <MobileTimePicker
                                        onChange={(value) => handleChangeTimeEnd(value)}
                                        defaultValue={dayjs('2022-04-17T15:30')}
                                        value={endTime}
                                        className={styles.timepicker}
                                        ampm={false}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            {errorDate &&
                                <div className={styles.errorDate}>
                                    Начальное время не может быть больше конечного
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`${styles.files} df aic`}>
                        <AttachFileIcon fontSize={isMobile ? 'small' : 'medium'} />
                        <span>Добавить файлы</span>
                        <input
                            type="file"
                            multiple={true}
                            className={styles.fileInput}
                            onChange={handleFileChange}
                            ref={fileInputRef}
                        />
                    </div>
                    {files?.length > 0 &&
                        files.map((item, index) =>
                            <div key={nanoid(6)} className={styles.file}>
                                <div className={styles.block}>
                                    <SaveOutlinedIcon className={styles.saveIcon} fontSize={isMobile ? 'small' : 'medium'} />
                                    {/* <a title={item.name} target='_blank' href={URL.createObjectURL(new File([item.name], item.name, {type: `${item.type}`, lastModified : item.lastModified }))}>{item.name}</a> */}
                                </div>
                                <DeleteForeverOutlined onClick={() => deleteFile(index)} className={styles.deleteFile} fontSize={isMobile ? 'small' : 'medium'} />
                            </div>
                        )
                    }
                    <div className={`${styles.selectdiv} df aic`}>
                        <ListIcon fontSize={isMobile ? 'small' : 'medium'} />
                        <Select
                            className={styles.selectSubject} onChange={event => subjectHandler(event)}
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
                            <MenuItem value={'Математика'} disabled>
                                <span className={styles.subjectText}>Предмет</span>
                            </MenuItem>
                            {subjects.map((item, index) => (
                                <MenuItem selected={index == 1 ? true : false} key={index} value={item}>{item}</MenuItem>
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
                        onClick={() => editEvent(event.id, editEventName, type, isFavorite, color, subject, startTime, endTime, date, files)}
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
