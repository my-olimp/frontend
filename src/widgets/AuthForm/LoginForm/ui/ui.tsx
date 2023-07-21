import { FC, useEffect, useState } from "react";
import styles from "./ui.module.scss";
import { AuthInputLabel } from "@/features/authInputLabel";
import { AuthTypeBlock } from "@/features/authTypeBlock";
import { AuthLoginHelp } from "@/features/authLoginHelp";
import { LoginHelp } from "@/features/authHelp/LoginHelp";
import { AuthButton } from "@/entities/buttons/authButton";
import Image from "next/image";
import {Gapped} from '@/shared/Gapped/ui/ui';

interface props {
}
export const LoginForm: FC<props> = ({  }) => {
  const [errorMailOrNumberMessage, setErrorMailOrNumberMessage] =
    useState<string>("notError");
  const [errorPasswordMessage, setErrorPasswordMessage] =
    useState<string>("notError");

  const [mailOrNumber, setMailOrNumber] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const [isButtonDisabled, setButtonDisabled] = useState<"active" | "disabled">(
    "disabled"
  );

  const [type, setType] = useState<"mail" | "number">("mail");

  useEffect(() => {
    if (
        mailOrNumber.length !== 0 &&
        passwordValue.length !== 0 &&
        !(errorPasswordMessage !== "notError") &&
        !(errorMailOrNumberMessage !== "notError")
    ) {
      setButtonDisabled("active");
    } else {
      setButtonDisabled("disabled");
    }
  }, [
    mailOrNumber,
    passwordValue,
  ]);

  const handleSubmit = () => {
    console.log(mailOrNumber);
    console.log(passwordValue);
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.headerWrap}>
            <h1 className={styles.header}>
              <Image
                src="/logo/myOlimpLogo.svg"
                alt="logo"
                width={115}
                height={28}
              />
            </h1>
            <h4 className={styles.text}>Вход в сервис</h4>
          </div>
          <AuthTypeBlock type={type} setType={setType} />
          <div className={styles.inputWrap}>
            <AuthInputLabel
              mail={type === "mail"}
              number={type === "number"}
              inputName={type === "mail" ? "Почта" : "Номер телефона"}
              text={mailOrNumber}
              setText={setMailOrNumber}
              errorMessage={errorMailOrNumberMessage}
              setErrorMessage={setErrorMailOrNumberMessage}
            />
            <AuthInputLabel
              password={true}
              passwordSignInMode={true}
              inputName={"Пароль"}
              eye={true}
              text={passwordValue}
              setText={setPasswordValue}
              errorMessage={errorPasswordMessage}
              setErrorMessage={setErrorPasswordMessage}
            />
          </div>
          <AuthLoginHelp />
          <AuthButton
            type="register"
            width="medium"
            height="medium"
            use={isButtonDisabled}
            onClick={handleSubmit}
          >
            Войти
          </AuthButton>
        </div>
      </div>
      <LoginHelp />
    </>
  );
};
