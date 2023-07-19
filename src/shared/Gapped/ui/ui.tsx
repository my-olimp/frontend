import styles from "./ui.module.scss";
import { CSSProperties, FC } from "react";

interface Props {
  children?: any;
  className?: string | undefined;
  gap?: string | undefined; // example: "16px" | Расстояние между элементами в пикселях
  style?: CSSProperties | undefined;
  vertical?: boolean | undefined; // Расположение элементов по вертикали
  verticalAlign?: "top" | "middle" | "baseline" | "bottom" | undefined; // Вертикальное выравнивание
  wrap?: boolean | undefined; // Перенос элементов на новую строку при горизонтальном расположении
  alignItems?: string | undefined;
}

export const Gapped: FC<Props> = ({
  children,
  className,
  gap,
  style,
  vertical,
  verticalAlign = "baseline",
  wrap = "false",
  alignItems 
}) => {
  const classNameVariant = `gapped ${className}`;
  const gappedStyle: any = {
    gappedStyle: {
      gap: gap ? gap : "8px",
      ...style,
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      verticalAlign: verticalAlign ? verticalAlign : "baseline",
      flexWrap: wrap ? "wrap" : "nowrap",
      alignItems: alignItems ? alignItems : "",
    },
  };
  return (
    <>
      <div style={gappedStyle.gappedStyle} className={classNameVariant}>
        {children}
      </div>
    </>
  );
};
