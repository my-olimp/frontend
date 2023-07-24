"use client"; // ставится, когда используются хуки из React
import eyeCloseIconRed from "../../../../public/auth/eyeCloseRed.svg";
import eyeCloseIcon from "../../../../public/auth/eyeClose.svg";
import eyeOpenIconRed from "../../../../public/auth/eyeOpenRed.svg";
import eyeOpenIcon from "../../../../public/auth/eyeOpen.svg";
import { FC, FormEvent, useState, ChangeEvent, FocusEvent } from "react";
import validateEmail from "../lib/validateEmail";
import validatePassword from "../lib/validatePassword";
import styles from "./ui.module.scss";

import { MaskedInput } from "@/shared/MaskedInput/ui/ui";

interface props {
  eye?: boolean;
  maxLength?: number;
  inputName: string;
  password: boolean;
  mail: boolean;
  number: boolean;
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
          ? `1px solid #F54135`
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
    if (true) { // здесь ошибка, если ставить условие textLength < maxLength
      setText(text);
    } else {
      setErrorMessage(`Максимальная длина - ${maxLength} символов`);
    }

    if (password && setSecure) {
      setSecure(validatePassword(text));
    }

    if (textLength === 0 && setSecure) {
      setSecure("");
    }
    if (textLength === 0) {
      setErrorMessage("notError");
    }
  };

  const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
    if (text === "") {
      setErrorMessage(
        `${event.target.name} не может быть пуст${
          event.target.name === "Почта" ? "ой" : "ым"
        }!`
      );
    } else if (mail) {
      const validated = validateEmail(text);
      if (validated) {
        setErrorMessage("notError");
      } else {
        setText(text);
        setErrorMessage("Неверный формат почты! Пример: test@example.com");
      }
    }
  };
  const handleFocus = () => {
    if (errorMessage.match(/^Максимальная/)) {
    } else {
      setErrorMessage("notError");
    }
  };


  return (
    <div className={styles.wrap}>
      {number ? (
        <MaskedInput
          mask="+7(999) 999-99-99"
          value={text}
          onBlur={(e: FocusEvent<HTMLInputElement>) => blurHandler(e)}
          onFocus={() => handleFocus()}
          style={style.input}
        >
          <input
            style={style.input}
            className={styles.input}
            name={inputName}
            value={text}
            type="tel"
            onInput={(event: FormEvent<HTMLInputElement>) => handleInput(event)}
          />
        </MaskedInput>
      ) : (
        <input
          style={style.input}
          className={styles.input}
          name={inputName}
          value={text}
          type={inputType}
          onInput={(event: FormEvent<HTMLInputElement>) => handleInput(event)}
          onBlur={(event: FocusEvent<HTMLInputElement>) => blurHandler(event)}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setText(event.target.value)
          }
          onFocus={() => handleFocus()}
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
