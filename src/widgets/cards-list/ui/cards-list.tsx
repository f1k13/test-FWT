import { RootState, UseAppDispatch } from "@/entities/redux/store";
import { useEffect } from "react";
import { cardsFetch } from "../lib/service/cards-fetch";
import { useSelector } from "react-redux";
import CardItem from "./card-item";
import styles from "./styles/cards.module.scss";

const CardsList = () => {
  const dispatch = UseAppDispatch();

  useEffect(() => {
    dispatch(cardsFetch());
  }, []);

  const array = useSelector((state: RootState) => state.cards);

  const items = array.items.map((item) => item);

  console.log(items);

  return (
    <div className={styles.root}>
      {items.map((item, index) => (
        <CardItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default CardsList;
