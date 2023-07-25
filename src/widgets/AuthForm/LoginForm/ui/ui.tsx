import { FC, useEffect, useState } from "react";
import styles from "./ui.module.scss";
import { AuthInputLabel } from "@/features/authInputLabel";
import { AuthTypeBlock } from "@/features/authTypeBlock";
import { AuthLoginHelp } from "@/features/authLoginHelp";
import { LoginHelp } from "@/features/authHelp/LoginHelp";
import { AuthButton } from "@/entities/buttons/authButton";
import Image from "next/image";
import { Gapped } from "@/shared/Gapped/ui/ui";
import myOlimpLogo from "./../../../../../public/logo/myOlimpLogo.svg";
import adaptivMyOlimpLogo from "./../../../../../public/logo/adaptivMyOlimpLogo.svg";
interface props {}
export const LoginForm: FC<props> = ({}) => {
  const [errorMailOrNumberMessage, setErrorMailOrNumberMessage] =
    useState<string>("notError");
  const [errorPasswordMessage, setErrorPasswordMessage] =
    useState<string>("notError");
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [mailOrNumber, setMailOrNumber] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const [isButtonDisabled, setButtonDisabled] = useState<"active" | "disabled">(
    "disabled"
  );

  const [type, setType] = useState<"mail" | "number">("mail");

  useEffect(() => {
    setScreenWidth(global?.window.innerWidth);
  }, []);

  useEffect(() => {
    if (
      mailOrNumber.length !== 0 &&
      passwordValue.length !== 0 &&
      errorPasswordMessage === "notError" &&
      errorMailOrNumberMessage === "notError" &&
      !(type === "number" && mailOrNumber.length !== 18)
    ) {
      setButtonDisabled("active");
    } else {
      setButtonDisabled("disabled");
    }
  }, [
    mailOrNumber,
    passwordValue,
    errorPasswordMessage,
    errorMailOrNumberMessage,
    type,
  ]);
  useEffect(() => {
    setMailOrNumber("");
    setPasswordValue("");
    setErrorMailOrNumberMessage("notError");
    setErrorPasswordMessage("notError");
  }, [type]);

  const handleSubmit = () => {
    console.log(mailOrNumber);
    console.log(passwordValue);
  };

  return (
    <>
      <Gapped className={styles.screen} vertical verticalAlign="middle">
        <Gapped
          className={styles.center}
          gap="16px"
          vertical
          verticalAlign="middle"
        >
          <Gapped
            gap="0px"
            vertical
            verticalAlign="middle"
            style={{ display: "flex", width: "100%" }}
          >
            <Gapped
              className={styles.wrap}
              vertical
              gap="16px"
              verticalAlign="middle"
            >
              <Gapped
                className={styles.headerWrap}
                gap="24px"
                verticalAlign="middle"
                vertical
                style={{ display: "flex", width: "100%" }}
              >
                <Gapped
                  vertical
                  verticalAlign="middle"
                  alignItems="center"
                  gap="8px"
                >
                  <div className={styles.logo} style={{ textAlign: "center" }}>
                    <Image
                      src={myOlimpLogo}
                      alt="logo"
                      width={115}
                      height={28}
                      className={styles.logo}
                    />
                  </div>
                  <h4 className={styles.text}>Войти</h4>
                </Gapped>
                <AuthTypeBlock type={type} setType={setType} />
                <Gapped
                  vertical
                  verticalAlign="middle"
                  gap="24px"
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <Gapped
                    className={styles.inputWrap}
                    vertical
                    verticalAlign="middle"
                    gap="24px"
                    style={{ display: "flex", width: "100%" }}
                  >
                    <AuthInputLabel
                      mail={type === "mail"}
                      number={type === "number"}
                      inputName={type === "mail" ? "Почта" : "Номер телефона"}
                      text={mailOrNumber}
                      setText={setMailOrNumber}
                      errorMessage={errorMailOrNumberMessage}
                      setErrorMessage={setErrorMailOrNumberMessage}
                      maxLength={type === "number" ? 11 : 30}
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
                    <AuthLoginHelp />
                  </Gapped>
                  <AuthButton
                    type="register"
                    width="fit-content"
                    height="medium"
                    use={isButtonDisabled}
                    onClick={handleSubmit}
                  >
                    Войти
                  </AuthButton>
                </Gapped>
              </Gapped>
            </Gapped>
          </Gapped>
          <LoginHelp />
        </Gapped>
      </Gapped>
    </>
  );
};
