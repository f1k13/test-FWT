import styles from "../styles/filters.module.scss";
import { FilterPanel } from "@/features/filters-panel/ui";
const Sortings = () => {
  return (
    <div className={styles.root}>
      <FilterPanel/>
    </div>
  );
};

export default Sortings;
