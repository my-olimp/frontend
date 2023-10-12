import { FC, Dispatch, SetStateAction } from 'react';
import styles from './ui.module.scss';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import { EditEvent } from '@/widgets/EditEvent';


interface PropsEventToday {
    event: any;
    mode: string;
    setMode: Dispatch<SetStateAction<string>>
    deleteEvent: Function;
    editEvent: Function;
    colors: { color: string; text: string; }[];
    subjects: string[];
    getAntiColor: Function;
}

export const EventToday: FC<PropsEventToday> = ({ event, mode, setMode, deleteEvent, editEvent, colors, subjects, getAntiColor }) => {


    return (
        <>
            <div className={`${styles.eventtoday} df jcsb aic`} key={Math.random()}>
                <div className={`${styles.eventtodayleft} df aic w50`}>
                    <div
                        style={{
                            height: '15px',
                            width: '15px',
                            backgroundColor: event.color,
                            borderRadius: '50%',
                        }}
                    ></div>
                    <p>{event.title}</p>
                </div>
                <div className={`${styles.eventtodayright} df aic`}>
                    <span>{moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}</span>
                    <button title='edit' onClick={() => setMode(`edit${event.id}`)} className={`${styles.editButton} ${styles.button}`}>
                        <EditIcon style={{ fontSize: '20px' }} />
                    </button>
                    <button title='delete' onClick={() => deleteEvent(event)} className={`${styles.deleteButton} ${styles.button}`}>
                        <DeleteForeverOutlinedIcon style={{ fontSize: '26px' }} />
                    </button>
                </div>
            </div>
            {(mode === `edit${event.id}`) ?
                (<EditEvent setMode={setMode} event={event} editEvent={editEvent} colors={colors} subjects={subjects} getAntiColor={getAntiColor}/>)
                : ''
            }
        </>
    )
}
