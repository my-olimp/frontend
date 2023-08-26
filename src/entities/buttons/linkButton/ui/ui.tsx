import Link from 'next/link';
import styles from './ui.module.scss';
import React, { FC, MouseEventHandler, ReactElement, useState } from 'react';
import Image from 'next/image';

interface PropsType {
    children: string | ReactElement;
    color?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    textSize?: string;
    icon?: any; // объект / ссылка
    iconIsHover?: any; // объект / ссылка
    link?: string; // example: "/home"
    iconWidth?: number; // обязательно, если есть иконка | SafeNumber - специальный тип
    iconHeight?: number; // обязательно, если есть иконка | SafeNumber - специальный тип
    hoverColor?: string;
    transition?: string; // CSSProperty
    buttonClassName?: string;
}

export const LinkButton: FC<PropsType> = ({
    children,
    color,
    hoverColor,
    textSize,
    onClick,
    icon = false,
    iconIsHover,
    link,
    iconWidth,
    transition,
    iconHeight,
    buttonClassName,
}) => {
    const [hover, setHover] = useState<boolean>(false);
    const style = {
        buttonStyle: {
            color:
                hover && !hoverColor
                    ? '#3579F8'
                    : hover && hoverColor
                    ? hoverColor
                    : color && !hover
                    ? color
                    : '#222',
            fontSize: textSize ? textSize : '14px',
            transition: transition ? transition : '0',
        },
        imgStyle: {
            transition: transition ? transition : '0',
            color:
                hover && !hoverColor
                    ? '#3579F8'
                    : hover && hoverColor
                    ? hoverColor
                    : color && !hover
                    ? color
                    : '#222',
        },
    };

    return (
        <>
            <Link
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                style={style.buttonStyle}
                className={styles.wrap}
                href={link ? link : ''}>
                <button
                    type="button"
                    className={`${styles.button}  ${buttonClassName}`}
                    style={style.buttonStyle}
                    onClick={onClick}>
                    {children}
                </button>
                {icon ? (
                    <Image
                        className={styles.icon}
                        src={hover ? iconIsHover : icon}
                        alt="icon"
                        width={iconWidth}
                        height={iconHeight}
                        style={style.imgStyle}
                    />
                ) : null}
            </Link>
        </>
    );
};
