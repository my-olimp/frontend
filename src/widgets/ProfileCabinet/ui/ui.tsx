import React, { FC } from 'react';
import styles from './ui.module.scss'
import { ProfileAvatar } from '@/widgets/ProfileAvatar/ui/ui';
import { Achievments } from '@/widgets/Achievments/ui/ui';
import { PersonalInfoBlock } from '@/widgets/PersonalInfoBlock/ui/ui';
import { WorkBlock } from '@/widgets/WorkBlock/ui/ui';
import { ContactsInfo } from '@/widgets/ContactsInfo/ui/ui';
import { EditPersonalDataModal } from '@/widgets/EditPersonalDataModal/ui/ui';
import { EditWorkDataModal } from '@/widgets/EditWorkDataModal/ui/ui';
import { EditContactModal } from '@/widgets/EditContactModal/ui/ui';

interface props {
    setMode: any;
    editMode: any;
    userdata: any;
}

export const ProfileCabinet: FC<props> = ({ setMode, editMode, userdata }) => {
    const tag: string = 'c'
    return (
        <>
            {/* IF TEACHER */}
            {tag=='t'&&(
                <>
                    <div className={`${styles.left} df fdc`}>
                        <ProfileAvatar />
                        <Achievments setMode={setMode} tag={'teacher'} />
                    </div>
                    <div className={styles.personalData}>
                        <PersonalInfoBlock setMode={setMode} userdata={userdata} />
                        <WorkBlock setMode={setMode} tag={'teacher'} />
                        <ContactsInfo setMode={setMode} />
                        {editMode !== '' &&
                            <>
                                {editMode === 'personal' ? <EditPersonalDataModal setMode={setMode} tag={tag}/> : null}
                                {editMode === 'work' ? <EditWorkDataModal setMode={setMode} tag={'teacher'} /> : null}
                                {editMode === 'contact' ? <EditContactModal setMode={setMode} tag={tag}/> : null}
                            </>
                        }
                    </div>
                </>
            )}
            {/* IF SCHOOLGAY */}
            {tag=='s'&&(
                <>
                    <div className={`${styles.left} df fdc`}>
                        <ProfileAvatar />
                        <Achievments />
                    </div>
                    <div className={styles.personalData}>
                        <PersonalInfoBlock setMode={setMode} userdata={userdata} />
                        <WorkBlock setMode={setMode} userdata={userdata} />
                        <ContactsInfo setMode={setMode} userdata={userdata} />
                        {editMode !== '' &&
                            <>
                                {editMode === 'personal' ? <EditPersonalDataModal setMode={setMode} userdata={userdata} /> : null}
                                {editMode === 'work' ? <EditWorkDataModal setMode={setMode} userdata={userdata} /> : null}
                                {editMode === 'contact' ? <EditContactModal setMode={setMode} userdata={userdata} /> : null}
                            </>
                        }
                    </div>
                </>
            )}
            {/* IF KOMITET */}
            {tag=='c'&&(
                <>
                    <div className={`${styles.left} df fdc`}>
                        <ProfileAvatar />
                    </div>
                    <div className={styles.personalData}>
                        <PersonalInfoBlock setMode={setMode} userdata={userdata} tag={tag}/>
                        <WorkBlock setMode={setMode} userdata={userdata} tag={tag}/>
                        <ContactsInfo setMode={setMode} userdata={userdata} />
                        {editMode !== '' &&
                            <>
                                {editMode === 'personal' ? <EditPersonalDataModal setMode={setMode} userdata={userdata} tag={tag} /> : null}
                                {editMode === 'work' ? <EditWorkDataModal setMode={setMode} userdata={userdata} tag={tag}/> : null}
                                {editMode === 'contact' ? <EditContactModal setMode={setMode} userdata={userdata} tag={tag}/> : null}
                            </>
                        }
                    </div>
                </>
            )}
        </>
    )
}