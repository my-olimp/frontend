import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {Button} from '@mui/material'
import styles from './ui.module.scss'
import avatarLink from '../../../../public/social/empty-avatar.svg'
import myOlimpIcon from '../../../../public/logo/myOlimpLogo.svg'
import {ProgressCounter} from '@/entities/progressCounter'
import {TextField} from '@mui/material'
import Logo from "@/entities/Logo/ui/ui";

interface props {
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
}

export const FourAdditionalDataForm: FC<props> = ({progress, setProgress}) => {
    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [value, setValue] = useState<string>('');
    const handleClick = () => {

        if (progress !== 4) {
            setProgress(progress + 1);
        }
    };

    //TODO add future entities @habdevs #8 CHECK COUNTER @habdevs #8*
    return (
        <div className={styles.form}>
            <form>

                <div className={styles.logoRow}>
                    <ArrowBackOutlinedIcon className={styles.arrowIcon}/>
                    <img src={myOlimpIcon.src} alt={"myOlimpIcon"} className={styles.myOlimpIcon}/>
                    {/*<Logo />*/}
                </div>
                <div className={styles.titleRow}>
                    <h1>Последний штрих</h1>
                    <p>{progress} из 4</p>
                </div>
                <img src={avatarLink.src} alt={"avatarUser"} className={styles.avatar}/>
                {/*<div className={styles.title}>*/}
                {/*    <ArrowBackOutlinedIcon/>*/}
                {/*    <img src={myOlimpIcon.src} alt={"myOlimpIcon"} className={styles.myOlimpIcon}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h3 className={styles.finalTouch}>Последний штрих</h3>*/}

                {/*    <ProgressCounter current={4} max={4}></ProgressCounter>*/}
                {/*    <span className={styles.counter}>4 из 4</span>*/}
                {/*</div>*/}
                {/*<img src={avatarLink.src} alt={"avatarUser"} className={styles.avatar}/>*/}
                <input
                    value={value}
                    onChange={(event) => setValue(event.target.value as string)}
                    placeholder="СНИЛС*"
                    className={styles.input}
                />
                <Button
                    variant="contained"
                    disabled={isButtonDisabled}
                    className={styles.button}
                    onClick={() => handleClick()}>
                    Дальше
                </Button>
            </form>
        </div>
    )
}