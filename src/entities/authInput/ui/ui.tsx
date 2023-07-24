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
  useRef,
  useCallback,
  useEffect,
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

interface ref{
  current: HTMLInputElement
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
  const [shownValue, setShownValue] = useState("");
  const [position, setPosition] = useState(0);
  

  const inputRef = useRef(null);
  
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
    const input = event.target as HTMLInputElement;
    const text = input.value;
    const textLength = text.length;

    
      // возвращаем курсор на оригинальную позицию
      input.setSelectionRange(4, 15);
    
      console.log("position", position);
      console.log(inputRef.current)
    

    if (!password) {
      setText(text);
      const input = event.target as HTMLInputElement;

      if (input !== null) {
        // возвращаем курсор на оригинальную позицию
        input.selectionStart = position;
        input.selectionEnd = position;
        console.log("position", position);
      }
      if (true) {
        // здесь ошибка, если ставить условие textLength < maxLength
        setText(text);
      } else {
        setErrorMessage(`Максимальная длина - ${maxLength} символов`);
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

  const handleChange = useCallback((e: any) => {
    let value = e.target.value.replace(/_/g, "");
    let newValue = value.length <= 10 ? value + "_".repeat(10 - value.length) : value;
    setShownValue(newValue);
    setPosition(e.target.selectionStart);
  }, []);

  /*useEffect(() => {
    if ( inputRef.current !== null) {
      // возвращаем курсор на оригинальную позицию
      inputRef.current?.setSelectionRange(4, 15);
    
      console.log("position", position);
      console.log(inputRef.current)
    }
  }, [position]);*/

  return (
    <div className={styles.wrap}>
      {number ? (
        <MaskedInput
          mask={"+7 (999) 999-99-99"}
          maskPlaceholder={""}
          value={text}
          onBlur={(e: FocusEvent<HTMLInputElement>) => blurHandler(e)}
          onFocus={() => handleFocus()}
          style={style.input}
          onChange={(e) => handleChange(e)}
        >
          <input
            style={style.input}
            className={styles.input}
            name={inputName}
            value={text}
            type="tel"
            ref={inputRef}
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
