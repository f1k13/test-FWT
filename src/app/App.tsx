import styles from "./styles/main.module.scss";
import "./styles/global.scss";
import { HomePage } from "@/pages/home-page";
import Navbar from "@/widgets/navbar/ui/navbar";

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
};

export default App;
