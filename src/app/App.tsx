import styles from "./styles/main.module.scss";
import MainLayout from "./layouts/main-layot";
import "./styles/global.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <MainLayout />
    </div>
  );
};

export default App;
