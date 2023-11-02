import { SortingPanel } from "@/features/sortings-panel/ui";
import styles from "../styles/sortings.module.scss";
const Sortings = () => {
  return (
    <div className={styles.root}>
      <SortingPanel/>
    </div>
  );
};

export default Sortings;
