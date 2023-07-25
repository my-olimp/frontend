"use client"; // ставится, когда используются хуки из React
import eyeCloseIconRed from "../../../../public/auth/eyeCloseRed.svg";
import eyeCloseIcon from "../../../../public/auth/eyeClose.svg";
import eyeOpenIconRed from "../../../../public/auth/eyeOpenRed.svg";
import eyeOpenIcon from "../../../../public/auth/eyeOpen.svg";
import React, {
  FC,
  FormEvent,
  useState,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
} from "react";
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
  passwordSignInMode: boolean;
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
  passwordSignInMode,
}) => {
  const [isEyeOpen, setEyeOpen] = useState<boolean>(false);
  const [inputType, setInputType] = useState<"text" | "password">(
    password ? "password" : "text"
  );

  const style = {
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
    const input = event.target as HTMLInputElement;
    const text = input.value;
    const textLength = text.length;

    input.setSelectionRange(textLength + 2, textLength + 2);

    if (!password) {
      setText(text);
      const input = event.target as HTMLInputElement;

      setText(text);
    }

    if (password && setSecure) {
      setText(text);
      setSecure(validatePassword(text));
    }
    if (passwordSignInMode) {
      const tested = text.match(/^[!@#$%^\w]+$/);
      if (tested) {
        setText(text);
      } else {
        setErrorMessage(
          "Пароль может состоять только из букв английского алфавита верхнего или нижнего регистра, цифр, специальных символов(!@$%^)"
        );
      }
    }
    if (password && setSecure) {
      setText(text);
      setSecure(validatePassword(text));
    }
    if (passwordSignInMode) {
      const tested = text.match(/^[!@#$%^\w]+$/);
      if (tested) {
        setText(text);
      } else {
        setErrorMessage(
          "Пароль может состоять только из букв английского алфавита верхнего или нижнего регистра, цифр, специальных символов(!@$%^)"
        );
      }
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
    if (
      errorMessage.match(/^Максимальная/) ||
      errorMessage.match(/^Пароль может/)
    ) {
    } else {
      setErrorMessage("notError");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    const selectionStart = input.selectionStart as number;
    if (event.key === "ArrowLeft" && selectionStart === 4) {
      event.preventDefault();
    } else if (selectionStart < 4) {
      input.setSelectionRange(5,5);
    }

    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      const input = event.target as HTMLInputElement;
      const selectionEnd = input.selectionEnd as number;
      const selectionStart = input.selectionStart as number;

      if (selectionStart !== selectionEnd) {
        setText(text.slice(0, selectionStart) + text.slice(selectionEnd));
        setTimeout(() => {
          input.setSelectionRange(selectionEnd, selectionEnd);
        });
        return;
      }

      if (
        text === "" ||
        text === "+" ||
        text === "+7" ||
        text === "+7 " ||
        text === "+7 ("
      ) {
        return;
      }
      if (/^\s*$/.test(text.slice(-1))) {
        setText(text.slice(0, -3));
        return;
      }
      if (!/^\d$/.test(text.slice(-1))) {
        setText(text.slice(0, -2));
        return;
      }
      setText(text.slice(0, -1));
    }
  };

  return (
    <div className={styles.wrap}>
      {number ? (
        <MaskedInput
          mask={"+7 (999) 999-99-99"}
          maskPlaceholder={""}
          value={text}
          onBlur={(event: FocusEvent<HTMLInputElement>) => blurHandler(event)}
          onFocus={() => handleFocus()}
          style={style.input}
          onKeyDown={(event) => handleKeyDown(event)}
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
