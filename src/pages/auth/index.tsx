import { AuthInputLabel } from "@/features/Landing/authInputLabel";
import { useState } from "react";
import styles from "./index.module.scss";

const Auth = () => {
  const [color, setColor] = useState<string>('white')
  async function handleClick () {
    const result = await fetch("http://localhost:5000/");
    const data = await result.text();
    setColor(data)
  }
  const style = {
    div: {
      backgroundColor: color,
    },
  };
  return (
    <div style={style.div} className={styles.wrap}>
      <button className={styles.button} onClick={() => handleClick()}>Цвет</button>
      <AuthInputLabel inputName="Номер телефона" number={true}/>
      <AuthInputLabel inputName="Почта" mail={true}/>
      <AuthInputLabel inputName="Пароль" eye={true} password={true} passwordSignInMode={false}/>
    </div>
  );
};

export default Auth;
