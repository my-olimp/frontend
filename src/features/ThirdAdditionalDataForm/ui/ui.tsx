import styles from '@/features/FourAdditionalDataForm/ui/ui.module.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import myOlimpIcon from '../../../../public/logo/myOlimpLogo.svg';
import avatarLink from '../../../../public/social/empty-avatar.svg';
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Button } from '@mui/material';

interface props {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
}

export const ThirdAdditionalDataForm: FC<props> = ({ progress, setProgress }) => {
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);
  const handleClick = () => {
        if (progress !== 3) {
            setProgress(progress + 1);
        }
    };

    return (
        <div className={styles.form}>
            <form>
                <div className={styles.logoRow}>
                    <ArrowBackOutlinedIcon className={styles.arrowIcon} />
                    <img src={myOlimpIcon.src} alt={'myOlimpIcon'} className={styles.myOlimpIcon} />
                    {/*<Logo />*/}
                </div>
                <div className={styles.titleRow}>
                    <h1>Дисциплины</h1>
                    <p>{progress} из 4</p>
                </div>
              
                <Button
                    variant="contained"
                    disabled={isButtonDisabled}
                    className={styles.button}
                    onClick={() => handleClick()}>
                    Дальше
                </Button>
            </form>
        </div>
    );
};

{/*<input*/}
{/*    type="file"*/}
{/*    accept="image/*"*/}
{/*    defaultValue={avatarLink.src}*/}
{/*    style={{ display: 'none' }}*/}
{/*    onChange={handleImageChange}*/}
{/*    ref={fileInputRef}*/}
{/*/>*/}
{/*<img*/}
{/*    src={selectedImage || avatarLink.src}*/}
{/*    alt={'avatarUser'}*/}
{/*    className={styles.avatar}*/}
{/*    onClick={handleImageClick}*/}
{/*/>*/}
{/*<input*/}
{/*    value={value}*/}
{/*    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>*/}
{/*        setValue(e.target.value as string)*/}
{/*    }*/}
{/*    placeholder="СНИЛС*"*/}
{/*    className={styles.input}*/}
{/*/>*/}