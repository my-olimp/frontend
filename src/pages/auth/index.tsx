import { AuthInputLabel } from "@/features/Landing/authInputLabel";
import { useState } from "react";
import styles from "./index.module.scss";
import RootLayout from "@/app/layout";

const Auth = () => {
  const [color, setColor] = useState<string>('aqua')
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
    <RootLayout>
      <>
        <div style={style.div} className={styles.wrap}>
          <button className={styles.button} onClick={() => handleClick()}>Цвет</button>
        </div>
      </>
    </RootLayout>
  );
};

export async function getServerSideProps(context: any) {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
}

export default Auth;
