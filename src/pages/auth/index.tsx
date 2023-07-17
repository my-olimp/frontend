import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { AuthButton } from "@/entities/buttons/authButton/ui";

const Auth = () => {
  const [color, setColor] = useState<string>("aqua");
  const style = {
    div: {
      backgroundColor: color,
    },
  };
  return (
    <>
      <div style={style.div} className={styles.wrap}>
        <AuthButton>Войти</AuthButton>
      </div>
    </>
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
