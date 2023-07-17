import { useState } from "react";
import styles from "./index.module.scss";

const Auth = () => {
  const [color, setColor] = useState<string>('aqua')
  const style = {
    div: {
      'backgroundColor':color
    }
  }
  return (
    <div style={style.div} className={styles.wrap}>
      <button className={styles.button}>Цвет</button>
    </div>
  );
};

export async function getServerSideProps(context:any) {
  const result = await fetch("");
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
}

export default Auth;
