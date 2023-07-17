import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Auth = () => {
  const [color, setColor] = useState<string>('aqua')
  async function handleClick () {
    const result = await fetch("http://localhost:5000/");
    const data = await result.text();
    setColor(data)
  }
  const style = {
    div: {
      'backgroundColor':color
    }
  }
  return (
    <div style={style.div} className={styles.wrap}>
      <button className={styles.button} onClick={() => handleClick()}>Цвет</button>
    </div>
  );
};

export default Auth;
