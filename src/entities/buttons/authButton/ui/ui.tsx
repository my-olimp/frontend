import ClipLoader from '@/shared/spinners/btnAuthSpinner/ui';
import { CSSProperties, FC, MouseEventHandler, useState } from 'react';
import styles from './ui.module.scss';
import { match } from 'ts-pattern';

interface props {
    children?: string;
    isLoading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    use?: 'active' | 'disabled';
    width: 'small' | 'medium' | 'large' | 'fit-content'; // 320px | 368px | 412px
    height: 'small' | 'medium' | 'large' | 'fit-content'; // 32 | 40 px | 44 px
    type?: 'auth' | 'register' | 'next'; // black | black | blue (colors)
    btnStyle?: CSSProperties | undefined;
}

export const AuthButton: FC<props> = ({
    children,
    onClick,
    use = 'active',
    isLoading,
    width = '100%',
    height = '40px',
    type,
    btnStyle,
}) => {
    const [hover, setHover] = useState<boolean>(false);
    const isDisable = (use: string): boolean => {
        return use === 'disabled';
    };
    const buttonClassNameVariant: string = `${styles.button} button-${use} ${
        hover && use === 'active' && type !== 'next'
            ? styles.isHover
            : hover && use && type === 'next' && !isDisable(use)
            ? styles.nextIsHover
            : null
    }`;
    const buttonWidth = match(width)
        .with('small', () => '320px')
        .with('medium', () => '368px')
        .with('large', () => '412px')
        .with('fit-content', () => '100%')
        .otherwise(() => '0px');
    const buttonHeight = match(height)
        .with('small', () => '32px')
        .with('medium', () => '40px')
        .with('large', () => '44px')
        .with('fit-content', () => '100%')
        .otherwise(() => '0px');
    const buttonBackground = match(type)
        .with('auth', () => (!isDisable(use) ? '#3D3D3D' : '#F2F2F2'))
        .with('register', () => (!isDisable(use) ? '#3D3D3D' : '#F2F2F2'))
        .with('next', () => (!isDisable(use) ? '#3579F8' : '#F2F2F2'))
        .otherwise(() => 'transparent');

    const buttonColor = match(use)
        .with('disabled', () => '#222')
        .with('active', () =>
            type === 'auth' || type === 'register' || type === 'next' ? '#FFF' : 'transparent',
        )
        .otherwise(() => 'transparent');

    const style: CSSProperties = {
        width: buttonWidth,
        height: buttonHeight,
        background: buttonBackground,
        color: buttonColor,
        cursor: isDisable(use) ? 'not-allowed' : 'pointer',
        ...btnStyle,
    };

    return (
        <>
            <button
                type="button"
                className={buttonClassNameVariant}
                onClick={onClick}
                disabled={isDisable(use)}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                style={style}
            >
                {isLoading ? <ClipLoader /> : children}
            </button>
        </>
    );
};
