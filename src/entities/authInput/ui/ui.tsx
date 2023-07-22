"use client"; // ставится, когда используются хуки из React

import eyeCloseIcon from "../../../../public/auth/eyeClose.svg";
import eyeCloseIconRed from "../../../../public/auth/eyeCloseRed.svg";
import eyeOpenIconRed from "../../../../public/auth/eyeOpenRed.svg";
import eyeOpenIcon from "../../../../public/auth/eyeOpen.svg";
import { FC, FormEvent, useState } from "react";
import validateEmail from "../lib/validateEmail";
import validatePassword from "../lib/validatePassword";
import styles from "./ui.module.scss";
import ReactInputMask from "react-input-mask";
interface props {
  eye?: boolean;
  maxLength?: number;
  inputName: string;
  password: boolean;
  mail: boolean;
  number: boolean;
  confirm: boolean;
  errorMessage: string;
  text: string;
  setText: (text: string) => void;
  setErrorMessage: (message: string) => void;
  setSecure?: (secure: string) => void;
}

export const AuthInput: FC<props> = ({
  eye = false,
  maxLength = 26,
  inputName,
  password,
  errorMessage,
  mail,
  number,
  setErrorMessage,
  setSecure,
  text,
  setText,
}) => {
  const [isEyeOpen, setEyeOpen] = useState<boolean>(false);
  const [inputType, setInputType] = useState<"text" | "password">(
    password ? "password" : "text"
  );

  const style: any = {
    input: {
      borderLeft:
        errorMessage !== "notError"
          ? `1px solid #F5Ё4135`
          : `1px solid lightgray`,
      borderTop:
        errorMessage !== "notError"
          ? `1px solid #F54135`
          : `1px solid lightgray`,
      borderBottom:
        errorMessage !== "notError"
          ? `1px solid #F54135`
          : `1px solid lightgray`,
      borderRight: eye
        ? "none"
        : `1px solid ${errorMessage !== "notError" ? "#F54135" : "lightgray"}`,
      borderTopRightRadius: eye ? "0" : "8px",
      borderBottomRightRadius: eye ? "0" : "8px",
    },
    icon: {
      backgroundImage: !isEyeOpen
        ? errorMessage !== "notError"
          ? `url(${eyeOpenIconRed.src})`
          : `url(${eyeOpenIcon.src})`
        : errorMessage !== "notError"
        ? `url(${eyeCloseIconRed.src})`
        : `url(${eyeCloseIcon.src})`,
    },
    iconWrap: {
      display: eye ? "flex" : "none",
      borderRight: eye
        ? `1px solid ${errorMessage !== "notError" ? "#F54135" : "lightgray"}`
        : "none",
      borderTop: eye
        ? `1px solid ${errorMessage !== "notError" ? "#F54135" : "lightgray"}`
        : "none",
      borderBottom: eye
        ? `1px solid ${errorMessage !== "notError" ? "#F54135" : "lightgray"}`
        : "none",
    },
  };
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const text = (event.target as HTMLInputElement).value;
    const textLength = text.length;
    if (!number && !mail) {
      if (textLength <= maxLength) {
        setText(text);
        setErrorMessage("notError");
      } else if (textLength > maxLength) {
        setErrorMessage("Максимальная длина - " + maxLength);
      }
    }
    if (password && setSecure) {
      setSecure(validatePassword(text));
    }
    if (number) {
      setText(text);
      setErrorMessage("notError");
    }
    if (mail) {
      const validated = validateEmail(text);
      if (textLength <= maxLength) {
        if (validated) {
          setText(text);
          setErrorMessage("notError");
          console.info(`length ${text.length}`);
        } else {
          setText(text);
          setErrorMessage("Неверный формат почты! Пример: test@example.com");
        }
      } else if (textLength > maxLength) {
        if (validated) {
          setText(text);
          setErrorMessage("notError");
        } else {
          setText(text);
          setErrorMessage("Неверный формат почты! Пример: test@example.com");
        }
      }
    }
    if (textLength === 0 && setSecure) {
      setSecure("");
    }
    if (textLength === 0) {
      setErrorMessage("notError");
    }
  };
  const bluerHandler = (e: any) => {
    if (e.target.name === "Почта" && text !== "") {
      setErrorMessage("Поле заполнено неверно");
    }
    /*    if (e.target.name === "Номер телефона" && text !== "") {
      setErrorMessage("Поле заполнено неверно");

    }*/
    // нужен более умный if
  };

  return (
    <div className={styles.wrap}>
      {inputName === "Номер телефона" ? (
        <ReactInputMask
          mask="+7 999 999-99-99"
          value={text}
          onBlur={(e: any) => bluerHandler(e)}
        >
          {
            <input
              style={style.input}
              className={styles.input}
              name={inputName}
              value={text}
              onInput={(event) => handleInput(event)}
              type="text"
            />
          }
        </ReactInputMask>
      ) : (
        <input
          style={style.input}
          className={styles.input}
          name={inputName}
          value={text}
          type={inputType}
          onInput={(event) => handleInput(event)}
          onBlur={(e: any) => bluerHandler(e)}
        />
      )}

      <div
        style={style.iconWrap}
        className={styles.iconWrap}
        onClick={() => {
          setInputType(inputType === "text" ? "password" : "text");
          setEyeOpen(!isEyeOpen);
        }}
      >
        <i style={style.icon} className={styles.icon} draggable="false" />
      </div>
    </div>
  );
};
