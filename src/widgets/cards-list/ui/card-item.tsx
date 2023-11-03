import { CardType } from "../lib/service/cards-fetch";
import styles from "./styles/cards.module.scss";

const CardItem = ({ item, index }: { item: CardType; index: number }) => {
  const imgUrl = import.meta.env.VITE_API_URL + item.imageUrl;
  console.log(index);
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
      className={styles.item}
    >
      <div className={styles.content}>
        <p className={styles.text}>{item.name}</p>
      </div>
    </div>
  );
};

export default CardItem;
