import { RootState, UseAppDispatch } from "@/entities/redux/store";
import styles from "./styles/pagination.module.scss";
import { setCurrentPage } from "@/features/filters-panel/lib/slices/filters-slice";
import { ArrowOneIcon, ArrowTwoIcon } from "../icons";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { generatePageCount } from "./lib/generate-page-counts";
import { itemsCountsFetch } from "@/widgets/cards-list/lib/service/cards-fetch";

const Pagination = () => {
  const dispatch = UseAppDispatch();
  const { page } = useSelector((state: RootState) => state.filter);

  const { itemsPerPage, totalCount } = useSelector(
    (state: RootState) => state.cards
  );

  const data = generatePageCount(totalCount, itemsPerPage);

  useEffect(() => {
    dispatch(itemsCountsFetch());
  }, []);

  return (
    <div className={styles.root}>
      <button
        disabled={page === 1}
        onClick={() => dispatch(setCurrentPage(page - 2))}
        className={clsx(styles.buttonPrev, styles.buttonPrevBorder)}
      >
        <ArrowTwoIcon />
      </button>
      <button
        disabled={page === 1}
        onClick={() => dispatch(setCurrentPage(page - 1))}
        className={styles.buttonPrev}
      >
        <ArrowOneIcon />
      </button>
      {data?.map((item) => (
        <ul key={item} className={styles.list}>
          <li
            onClick={() => dispatch(setCurrentPage(item))}
            className={clsx(styles.item, item === page && styles.active)}
          >
            {item}
          </li>
        </ul>
      ))}
      <button
        disabled={page === data?.[data.length - 1]}
        onClick={() => dispatch(setCurrentPage(page + 1))}
        className={styles.buttonNext}
      >
        <ArrowOneIcon />
      </button>
      <button
        disabled={page === data?.[data.length - 1]}
        onClick={() => dispatch(setCurrentPage(page + 2))}
        className={clsx(styles.buttonNext, styles.buttonNextBorder)}
      >
        <ArrowTwoIcon />
      </button>
    </div>
  );
};

export default Pagination;
