import styles from "./index.module.scss";

const Auth = () => {
  const style = {
    div: {
      'backgroundColor':'red'
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
