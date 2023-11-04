import { RootState, UseAppDispatch } from "@/entities/redux/store";
import { useEffect } from "react";
import { cardsFetch } from "../lib/service/cards-fetch";
import { useSelector } from "react-redux";

import styles from "./styles/cards.module.scss";
import { CardItem } from "@/features/card-item/ui";

const CardsList = () => {
  const dispatch = UseAppDispatch();

  useEffect(() => {
    dispatch(cardsFetch());
  }, []);

  const { items } = useSelector((state: RootState) => state.cards);

  return (
    <div className={styles.root}>
      {items.map((item, index) => (
        <CardItem item={item} key={index} />
      ))}
    </div>
  );
};

export default CardsList;
