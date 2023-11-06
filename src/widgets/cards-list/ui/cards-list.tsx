import { RootState, UseAppDispatch } from "@/entities/redux/store";
import { CardType, cardsFetch } from "../lib/service/cards-fetch";
import { useSelector } from "react-redux";

import styles from "./styles/cards.module.scss";
import { CardItem } from "@/features/card-item/ui";
import { useQuery } from "react-query";

const CardsList = () => {
  const dispatch = UseAppDispatch();

  const {
    page,
    authorId,
    locationId,
    valueSearch,
    createdFromValue,
    createdBeforeValue,
  } = useSelector((state: RootState) => state.filter);


  const { data } = useQuery(
    [
      "cards",
      page,
      authorId,
      locationId,
      valueSearch,
      createdFromValue,
      createdBeforeValue,
    ],
    () =>
      dispatch(
        cardsFetch({
          page,
          authorId,
          locationId,
          valueSearch,
          createdFromValue,
          createdBeforeValue,
        })
      ),
    {
      keepPreviousData: true,
    }
  );
  return (
    <div className={styles.root}>
      {((data as unknown as CardType)?.payload || []).map((item, index) => (
        <CardItem item={item} key={index} />
      ))}
      {((data as unknown as CardType)?.payload || []).length === 0 && (
        <p className={styles.textEmpty}>No data</p>
      )}
    </div>
  );
};

export default CardsList;
