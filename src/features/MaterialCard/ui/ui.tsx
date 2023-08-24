import { MaterialChip } from '@/entities/Chips/MaterialChip';
import { Button } from '@/entities/buttons/button';
import { ProgressCounter } from '@/entities/progressCounter';
import styles from './ui.module.scss';
import { FC } from 'react';
import { IMaterial } from '@/widgets/Materials';

interface Props {
    material: IMaterial;
}
export const MaterialCard: FC<Props> = ({ material }) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.tagWrap}>
                {material.tags.map((tag) => {
                    return <MaterialChip key={tag.id} text={tag.text} />;
                })}
            </div>
            <div
                className={styles.icon}
                style={{ backgroundImage: "url('/materials/materialIcon.svg')" }}></div>
            <div className={styles.bottomWrap}>
                <h1 className={styles.title}>{material.title}</h1>
                <div className={styles.startWrap}>
                    <Button onClick={(event) => console.log(event.target)}>Пройти</Button>
                    <ProgressCounter
                        current={material.currentProgress}
                        max={material.maxProgress}
                    />
                </div>
            </div>
        </div>
    );
};
