import React, { ReactElement, FC } from "react";
import InputMask from "react-input-mask";

/*https://github.com/sanniassin/react-input-mask - Документация для Props*/

interface MaskProps {
  mask: string | string[] | RegExp[];
  children: ReactElement;
  maskPlaceholder?: string;
  alwaysShowMask?: boolean;
  beforeMaskedStateChange?: Function;
  value: any;
  onBlur?: () => void;
  onFocus?: () => void;
  onChange?: () => void;
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
}) => {
  return (
    <span>
      <InputMask
        alwaysShowMask={alwaysShowMask}
        maskPlaceholder={maskPlaceholder}
        mask={mask}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
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
