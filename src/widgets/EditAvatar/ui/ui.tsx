import React, { Dispatch, EventHandler, FC, MouseEvent, SetStateAction, useRef, useState, useEffect } from 'react';
import styles from './ui.module.scss';
import avatarLink from '../../../../public/social/empty-avatar.svg';
import onHoverAvatar from '../../../../public/social/onHoverAvatar.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '@/hooks/useAppSelector';

type Inputs = {
    avatar: string | null
};

interface PropsEditAvatar {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'avatar' | 'contacts'>>;
}

export const EditAvatar: FC<PropsEditAvatar> = ( { setMode } ) => {
    const { user } = useAppSelector((state) => state.auth);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [hover, setHover] = useState<Boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMode('');
            }
        });
        return () => {
            document.removeEventListener('keydown', () => {});
        };
    }, []);

    const {
        handleSubmit,
    } = useForm<Inputs>();

    const handleClickOutSide: EventHandler<MouseEvent<HTMLDivElement>> = (event) => {
        if (event.target === modalRef.current) {
            setMode('');
        }
    };

    const onFormSubmit: SubmitHandler<Inputs> = () => {};

    //TODO add api method axios to save the avatar to the database #2 @habdevs
    //TODO add future entities @habdevs #8 CHECK COUNTER @habdevs #8*
    return (
        <div
            className={styles.screen}
            ref={modalRef}
            onClick={(event) => handleClickOutSide(event)}
        >
        <div className={styles.form}>
            <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
                <h6>Аватарка</h6>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                    ref={fileInputRef}
                />
                <div className={styles.avatarContainer}>
                    <img
                        src={hover ? onHoverAvatar.src : (selectedImage || avatarLink.src)}
                        alt={'avatarUser'}
                        className={styles.avatar}
                        onClick={handleImageClick}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    />
                </div>
                <span className={styles.buttons}>
                    <button className={styles.cancel} onClick={() => setMode('')}>
                        Отменить
                    </button>
                    <button className={styles.submit}>Сохранить</button>
                </span>
            </form>
        </div>
        </div>
    );
};
