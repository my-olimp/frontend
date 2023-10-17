'use client'
import React from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss'
import { IMaterial, Materials } from '@/widgets/Materials';
import material from '../../../../public/materials/Materials.svg'
import materialIcon from '../../../../public/materials/materialIcon.svg';
import ArrowIcon from '../../../../public/arrows/arrow-right.svg';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Image from 'next/image';
import { nanoid } from 'nanoid';
import Link from 'next/link'
import { MaterialCardMobile } from '@/features/MaterialCardMobile';
import useIsMobile from '@/hooks/UseIsMobile';

const Favourites: NextPage = () => {
    const isMobile = useIsMobile(800)


    const tag = 'teacher'

    const materialList: IMaterial[] = [
        {
            id: 1,
            title: 'Персонализированный вариант',
            currentProgress: 0,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'ВСОШ по математике' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 2,
            title: 'Теория приближений',
            currentProgress: 2,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'Высшая проба по физике' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 3,
            title: 'Подсчёты в графах',
            currentProgress: 6,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'Покори горы, Джейсон стэтхэм (c)' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 4,
            title: 'Полуинвариант',
            currentProgress: 8,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'ВСОШ по математике' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 2,
            title: 'Теория приближений',
            currentProgress: 2,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'Высшая проба по физике' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 3,
            title: 'Подсчёты в графах',
            currentProgress: 6,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'Покори горы, Джейсон стэтхэм (c)' },
            ],
            icon: materialIcon.src,
        },
    ];

    const tags = ['Математика', 'Планиметрия', 'Школьная программа']

    return (
        <div className={styles.wrap}>
            <div className={styles.blockText}>
                <span className={styles.title}>Хочу посмотреть</span>
                <Link href='/main'>
                    <div className={styles.all}>
                        <div className={styles.all__text}>Все</div>
                        <Image src={ArrowIcon.src} alt='arrow' width={20} height={20} />
                    </div>
                </Link>
            </div>
            {!isMobile ?
                (
                    <Materials materialList={materialList} title={'student'} profile={true} libMode={true} overflow={true} />
                )
                :
                (
                    <div className={styles.materialMobile}>
                        {materialList.slice(0, 4).map((item) =>
                            <MaterialCardMobile key={nanoid(6)} material={item} />
                        )}
                    </div>
                )
            }
            <div className={styles.blockText}>
                <span className={styles.title}>Материалы</span>
                <Link href='/main'>
                    <div className={styles.all}>
                        <div className={styles.all__text}>Все</div>
                        <Image src={ArrowIcon.src} alt='arrow' width={20} height={20} />
                    </div>
                </Link>
            </div>
            <div className={`${styles.materials} df aic`}>
                <div className={`${styles.left} df jcc aic`}>
                    <Image className={styles.image} src={material} alt='materials' />
                </div>
                <div className={styles.right}>
                    {tag == 'teacher' ? (
                        <div className='df aic'>
                            <span>Статья</span>
                            <div className='cp' style={{ marginTop: '7px', marginLeft: '5px' }}>
                                <DriveFileRenameOutlineOutlinedIcon style={{ color: 'gray' }} />
                            </div>
                        </div>
                    ) : <span>Статья</span>}
                    <p>Замечательные точки и прямые треугольника</p>
                    <div className={`${styles.righttags} df aic fww`}>
                        {tags.map((item: string) =>
                            <div className={`${styles.rightitem} dib cw`} key={nanoid(6)}>
                                {item}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={`${styles.materials} df aic`}>
                <div className={`${styles.left} df jcc aic`}>
                    <Image src={material} className={styles.image} alt='materials' />
                </div>
                <div className={styles.right}>
                    {tag == 'teacher' ? (
                        <div className='df aic'>
                            <span>Статья</span>
                            <div className='cp' style={{ marginTop: '7px', marginLeft: '5px' }}>
                                <DriveFileRenameOutlineOutlinedIcon style={{ color: 'gray' }} />
                            </div>
                        </div>
                    ) : <span>Статья</span>}
                    <p>Замечательные точки и прямые треугольника</p>
                    <div className={`${styles.righttags} df aic fww`}>
                        {tags.map((item: string) =>
                            <div className={`${styles.rightitem} dib cw`} key={nanoid(6)}>
                                {item}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favourites;