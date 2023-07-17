import styles from "./index.module.scss";

const Auth = () => {
  return (
    <div className={styles.wrap}>
      <button className={styles.button}>Цвет</button>
    </div>
  );
};

export async function getServerSideProps(context) {
  const result = await fetch("");
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
}

export default Auth;
