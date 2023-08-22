import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myOlimpLogo from '../../../../public/logo/myOlimpLogo.svg';
import styles from './ui.module.scss';

const Logo: FC = () => {
    return (
        <>
            <Link href={'/'} className={styles.link}>
                <Image
                    src={myOlimpLogo.src}
                    alt={'MyOlimp'}
                    width={115}
                    className={styles.svg}
                    height={28}
                    priority={true}
                />
            </Link>
        </>
    );
};

export default Logo;
