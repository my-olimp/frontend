import {FC, useEffect, useState} from 'react';
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
  const [errorMailOrNumber, setErrorMailOrNumber] = useState<boolean>(false)
  const [errorPassword, setErrorPassword] = useState<boolean>(false)

  const [mailOrNumber, setMailOrNumber] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')

  const [isButtonDisabled, setButtonDisabled] = useState<'active' | 'disabled'>('disabled')

  const [type, setType] = useState<"mail" | "number">("mail");

  useEffect(() => {
    if (mailOrNumber.length !== 0 && passwordValue.length !== 0 && !errorPassword && !errorMailOrNumber) {
      setButtonDisabled('active')
    } else {
      setButtonDisabled('disabled')
    }
  }, [mailOrNumber, passwordValue, errorPassword, errorMailOrNumber]);

  const handleSubmit = () => {
    console.log(mailOrNumber);
    console.log(passwordValue);
  };

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
                mail={type === 'mail'}
                number={type === 'number'}
                inputName={type === 'mail' ? 'Почта' : 'Номер телефона'}
                text={mailOrNumber}
                setText={setMailOrNumber}
                error={errorMailOrNumber}
                setError={setErrorMailOrNumber}
            />
            <AuthInputLabel
              password={true}
              passwordSignInMode={signIn}
              inputName={"Пароль"}
              eye={true}
              text={passwordValue}
              setText={setPasswordValue}
              error={errorPassword}
              setError={setErrorPassword}
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
      <AuthHelp />
    </div>
  );
};
