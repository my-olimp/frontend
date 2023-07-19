import { FC, useState } from "react";
import styles from "./ui.module.scss";
import { AuthInputLabel } from "@/features/authInputLabel";
import { AuthTypeBlock } from "@/features/authTypeBlock";
import { AuthLoginHelp } from "@/features/authLoginHelp";
import { AuthHelp } from "@/features/authHelp";
import { AuthButton } from "@/entities/buttons/authButton";

interface props {
  signIn: boolean;
}
export const AuthForm: FC<props> = ({ signIn }) => {
  const [mailOrNumber, setMailOrNumber] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [type, setType] = useState<"mail" | "number">("mail");
  const handleSubmit = () => {};

  return (
    <div className={styles.screen}>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.headerWrap}>
            <h1 className={styles.header}>MyOlymp</h1>
            <h4 className={styles.text}>Вход в сервис</h4>
          </div>
          <AuthTypeBlock type={type} setType={setType} />
          <div className={styles.inputWrap}>
            <AuthInputLabel
                mail={true}
                inputName={"Почта"}
                text={mailOrNumber}
                setText={setMailOrNumber}
            />
            <AuthInputLabel
              password={true}
              passwordSignInMode={signIn}
              inputName={"Пароль"}
              eye={true}
              text={passwordValue}
              setText={setPasswordValue}
            />
          </div>
          <AuthLoginHelp />
          <AuthButton
              type="register"
              width="medium"
              height="medium"
              use={mailOrNumber.length !== 0 && passwordValue.length !== 0 ? 'active' : 'disabled'}
          >
            Зарегистрироваться
          </AuthButton>
        </div>
      </div>
      <AuthHelp />
    </div>
  );
};
