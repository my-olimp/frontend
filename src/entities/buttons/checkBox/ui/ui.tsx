import { useState, FC } from "react";
import styles from "./ui.module.scss";

const TrueCheckBox:FC = () => {

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.43597 4.18404C2 5.03969 2 6.15979 2 8.4V15.6C2 17.8402 2 18.9603 2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C5.03969 22 6.15979 22 8.4 22H15.6C17.8402 22 18.9603 22 19.816 21.564C20.5686 21.1805 21.1805 20.5686 21.564 19.816C22 18.9603 22 17.8402 22 15.6V8.4C22 6.15979 22 5.03969 21.564 4.18404C21.1805 3.43139 20.5686 2.81947 19.816 2.43597C18.9603 2 17.8402 2 15.6 2H8.4C6.15979 2 5.03969 2 4.18404 2.43597C3.43139 2.81947 2.81947 3.43139 2.43597 4.18404ZM18.2071 9.20711C18.5976 8.81658 18.5976 8.18342 18.2071 7.79289C17.8166 7.40237 17.1834 7.40237 16.7929 7.79289L10 14.5858L7.20711 11.7929C6.81658 11.4024 6.18342 11.4024 5.79289 11.7929C5.40237 12.1834 5.40237 12.8166 5.79289 13.2071L9.29289 16.7071C9.68342 17.0976 10.3166 17.0976 10.7071 16.7071L18.2071 9.20711Z"
          fill="#3579F8"
        />
      </svg>
    </>
  );
}

interface falseBoxProps {
    isHover: boolean
}
const FalseCheckBox:FC<falseBoxProps> = ({isHover}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.8722 2C18.6553 2 19.3018 2.18565 19.9537 2.53427C20.6055 2.88288 21.1171 3.39446 21.4657 4.04631C21.8143 4.69816 22 5.34473 22 7.12777V16.8722C22 18.6553 21.8143 19.3018 21.4657 19.9537C21.1171 20.6055 20.6055 21.1171 19.9537 21.4657C19.3018 21.8143 18.6553 22 16.8722 22H7.12777C5.34473 22 4.69816 21.8143 4.04631 21.4657C3.39446 21.1171 2.88288 20.6055 2.53427 19.9537C2.18565 19.3018 2 18.6553 2 16.8722V7.12777C2 5.34473 2.18565 4.69816 2.53427 4.04631C2.88288 3.39446 3.39446 2.88288 4.04631 2.53427C4.69816 2.18565 5.34473 2 7.12777 2H16.8722ZM17.4361 4H6.56389C5.67237 4 5.34908 4.09283 5.02315 4.26713C4.69723 4.44144 4.44144 4.69723 4.26713 5.02315C4.09283 5.34908 4 5.67237 4 6.56389V17.4361C4 18.3276 4.09283 18.6509 4.26713 18.9768C4.44144 19.3028 4.69723 19.5586 5.02315 19.7329C5.34908 19.9072 5.67237 20 6.56389 20H17.4361C18.3276 20 18.6509 19.9072 18.9768 19.7329C19.3028 19.5586 19.5586 19.3028 19.7329 18.9768C19.9072 18.6509 20 18.3276 20 17.4361V6.56389C20 5.67237 19.9072 5.34908 19.7329 5.02315C19.5586 4.69723 19.3028 4.44144 18.9768 4.26713C18.6509 4.09283 18.3276 4 17.4361 4Z"
          fill={isHover ? "#3579F8" : '#B8C1CC'}
        />
      </svg>
    </>
  );
}

interface PropsType {
  children?: string;
  isText?: boolean;
  textSize?: string;
}

export const CheckBox: FC<PropsType> = ({
  children,
  isText = false,
  textSize,
}) => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState<boolean>(false);
  const style = {
    textStyle: {
      display: isText ? "block" : "none",
      fontSize: textSize ? textSize : "14px",
      color: hover ? "#3579F8" : "#222"
    },
  };
  return (
    <div className={styles.wrap} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <span className={styles.checkBox} onClick={() => setClick(!click)}>
        {" "}
        {click ? <TrueCheckBox /> : <FalseCheckBox isHover={hover}/>}
      </span>
      <span
        onClick={() => setClick(!click)}
        className={styles.checkBoxText}
        style={style.textStyle}
      >
        {children}
      </span>
    </div>
  );
};
