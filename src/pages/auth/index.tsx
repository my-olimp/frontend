import { AuthButton } from "@/entities/buttons/authButton";
import { AuthInputLabel } from "@/features/authInputLabel";
import { useState } from "react";
import styles from "./index.module.scss";
import {AuthForm} from '@/widgets/AuthForm';

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
      {/* <button className={styles.button} onClick={() => handleClick()}>Цвет</button> */}
        <AuthForm signIn={true}/>
    </div>
  );
};

export default Auth;