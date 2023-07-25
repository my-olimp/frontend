import { Slide } from '@/shared/Landing/card/ui';
import styles from './ui.module.scss';
import { FC } from 'react';
import { sliderDataType } from '@/widgets/Landing/team/data/data'; // нельзя юзать компоненты, которые выше по уровню архитектуры. Надо переделать

interface props {
    data: sliderDataType[];
    handleClick: (id: number) => void;
}

export const Slider: FC<props> = ({ data, handleClick }) => {
    return (
        <div className={styles.wrap}>
            {data.map((data: sliderDataType) => {
                return (
                    <Slide
                        key={data.id}
                        id={data.id}
                        handleClick={handleClick}
                        bgLink={data.bgLink}
                        text={data.text}
                        active={data.isActive}
                        title={data.title}
                    />
                );
            })}
        </div>
    );
};
