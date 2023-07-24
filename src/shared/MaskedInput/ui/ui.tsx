import React, { ReactElement, FC, CSSProperties, KeyboardEvent } from "react";
import InputMask from "react-input-mask";
import { FocusEvent } from "react";
import styles from "./ui.module.scss"

/*https://github.com/sanniassin/react-input-mask - Документация для Props*/

interface MaskProps {
  mask: string | string[] | RegExp[];
  children: ReactElement;
  maskPlaceholder?: string;
  alwaysShowMask?: boolean;
  beforeMaskedStateChange?: Function;
  value: any;
  onBlur?: ((event: FocusEvent<HTMLInputElement>) => void) | (() => void);
  onFocus?: ((event: FocusEvent<HTMLInputElement>) => void) | (() => void);
  onChange?: ((event: FocusEvent<HTMLInputElement>) => void) | (() => void);
  onKeyDown?: ((event: KeyboardEvent<HTMLInputElement>) => void) | (() => void)
  style?: CSSProperties
}

export const MaskedInput: FC<MaskProps> = ({
  mask,
  children,
  maskPlaceholder = "_",
  alwaysShowMask = false,
  value,
  onBlur,
  onFocus,
  onChange,
  onKeyDown,
  style
}) => {
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

        
        >
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
