import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myOlimpLogo from '../../../../public/logo/myOlimpLogo.svg';
import styles from './ui.module.scss';

interface props {
    small?: Boolean;
    main?: Boolean;
}

const Logo: FC<props> = ({small, main}) => {
    return (
        <Link href={main ? '/main' : '/'} className={styles.link} tabIndex={-1}>
            <Image
                src={myOlimpLogo.src}
                alt={'MyOlimp'}
                width={small ? 83 : 115}
                className={styles.svg}
                height={small ? 19 : 28}
                priority={true}
            />
        </Link>
    );
};

export default Logo;
