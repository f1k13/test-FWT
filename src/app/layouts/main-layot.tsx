import styles from "./main.module.scss";

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return <div className={styles.root}>{children}</div>;
};

export default MainLayout;
