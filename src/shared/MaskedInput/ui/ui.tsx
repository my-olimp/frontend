import React, {
    CSSProperties,
    FC,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
    ReactElement,
} from 'react';
import InputMask from 'react-input-mask';
import styles from './ui.module.scss';

/*https://github.com/sanniassin/react-input-mask - Документация для Props*/

interface MaskProps {
    mask: string | string[] | RegExp[];
    children: ReactElement;
    maskPlaceholder?: string;
    alwaysShowMask?: boolean;
    value: any;
    onBlur?: ((event: FocusEvent<HTMLInputElement>) => void) | (() => void);
    onFocus?: ((event: FocusEvent<HTMLInputElement>) => void) | (() => void);
    onChange?: ((event: FocusEvent<HTMLInputElement>) => void) | (() => void);
    onKeyDown?: ((event: KeyboardEvent<HTMLInputElement>) => void) | (() => void);
    onMouseUp?: ((event: MouseEvent<HTMLInputElement>) => void) | (() => void);
    style?: CSSProperties;
}

export const MaskedInput: FC<MaskProps> = ({
    mask,
    children,
    maskPlaceholder = '_',
    alwaysShowMask = false,
    value,
    onBlur,
    onFocus,
    onChange,
    onKeyDown,
    onMouseUp,
    style,
}) => {
    const beforeMaskedStateChange = ({ nextState }) => {
        let { value } = nextState;
        if (value.endsWith(')', '-', ' ')) {
            value = value.slice(0, -1);
        }

        return {
            ...nextState,
            value,
        };
    };

    return (
        <span className={styles.wrap}>
            <InputMask
                alwaysShowMask={alwaysShowMask}
                maskPlaceholder={maskPlaceholder}
                mask={mask}
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                style={style}
                onKeyDown={onKeyDown}
                onMouseUp={onMouseUp}
                beforeMaskedStateChange={beforeMaskedStateChange}>
                {children}
            </InputMask>
        </span>
    );
};

/*Examples*/
// Will be rendered as 12/--/--
//<InputMask mask="99/99/99" maskPlaceholder="-" value="12" />

// Will be rendered as 12/mm/yy
//<InputMask mask="99/99/99" maskPlaceholder="dd/mm/yy" value="12" />

// Will be rendered as 12/
//<InputMask mask="99/99/99" maskPlaceholder={null} value="12" />
