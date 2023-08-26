import { FC } from 'react';
import Link from 'next/link';
import styles from './ui.module.scss';

interface MainNavBarElementsProps {
    propsData: Array<{ id: number; title: string; link: string }>;
}

export const MainNavBarElements: FC<MainNavBarElementsProps> = ({ propsData }) => {
    return (
        <>
            <div className={styles.wrap}>
                {propsData.map((data) => (
                    <Link className={styles.element} key={data.id} href={data.link}>
                        {data.title}
                    </Link>
                ))}
            </div>
        </>
    );
};
