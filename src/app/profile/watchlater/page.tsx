import React, { useEffect } from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss'
import { IMaterial, Materials } from '@/widgets/Materials';
import material from '../../../../public/materials/Materials.svg'
import materialIcon from '../../../../public/materials/materialIcon.svg';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Image from 'next/image';
import { nanoid } from 'nanoid';

const WatchLater: NextPage = () => {

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
            <span className={styles.title}>Хочу посмотреть</span>
            <Materials materialList={materialList} title={'student'} libMode={true} overflow={true} />
            <span className={styles.title}>Материалы</span>
            <div className={`${styles.materials} df aic`}>
                <div className={`${styles.left} df jcc aic`}>
                    <Image src={material} alt='materials' />
                </div>
                <div className={styles.right}>
                    {tag == 'teacher' ? (
                        <div className='df aic'>
                            <span>Статья</span>
                            <div className='cp' style={{marginTop: '7px', marginLeft: '5px'}}>
                                <DriveFileRenameOutlineOutlinedIcon style={{color: 'gray'}}/>
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
                    <Image src={material} alt='materials' />
                </div>
                <div className={styles.right}>
                    <span>Статья</span>
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

export default WatchLater;