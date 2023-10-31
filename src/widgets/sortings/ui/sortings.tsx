import styles from "../styles/sortings.module.scss";
const Sortings = () => {
  return (
    <div className={styles.root}>
      <input className={styles.input} type="text" placeholder="Name" />
    </div>
  );
};

export default Sortings;
