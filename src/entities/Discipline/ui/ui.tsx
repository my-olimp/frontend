import { FC } from 'react';
import styles from './ui.module.scss';
import { Tdiscipline } from '@/store/features/auth-slice';
import useDisciplineColor from '@/hooks/useDisciplineColor';


interface PropsDiscipline {
    type: Tdiscipline
    image: string;
}


export const Discipline: FC<PropsDiscipline> = ({ type, image }) => {
    const color = useDisciplineColor(type)

    return (
        <div className={styles.container} style={{ background: `${color}` }}>
            <h4 className={styles.title}>{type}</h4>
            <div className={styles.icon} style={{ backgroundImage: `url(${image})` }}></div>
        </div>
    )
}
