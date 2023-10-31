import Navbar from "@/widgets/navbar/ui/navbar";
import styles from "../styles/main.module.scss";
import { HomePage } from "@/pages/home-page";

const MainLayout = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <HomePage/>
    </div>
  );
};

export default MainLayout;
