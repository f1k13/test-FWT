import { useSelector } from "react-redux";
import styles from "../../../widgets/cards-list/ui/styles/cards.module.scss";
import { RootState } from "@/entities/redux/store";
import { CardType } from "@/widgets/cards-list/lib/service/cards-fetch";

const CardItem = ({ item }: { item: CardType }) => {
  const imgUrl = import.meta.env.VITE_API_URL + item.imageUrl;

  const { authrorsItems } = useSelector((state: RootState) => state.authors);

  const { locationsItems } = useSelector((state: RootState) => state.location);

  const authorsName = authrorsItems.find(
    (author) => author.id === item.authorId
  );

  const locationsName = locationsItems.find(
    (location) => location.id === item.locationId
  );

  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
      className={styles.item}
    >
      <div className={styles.content}>
        <p className={styles.text}>{item.name}</p>
        <div className={styles.hover}>
          <h3 className={styles.textHoverTitle}>
            Author:
            <p className={styles.textHoverSubTitle}>{authorsName?.name}</p>
          </h3>
          <h3 className={styles.textHoverTitle}>
            Creater: <p className={styles.textHoverSubTitle}>{item.created}</p>
          </h3>
          <h3 className={styles.textHoverTitle}>
            Location:
            <p className={styles.textHoverSubTitle}>
              {locationsName?.location}
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
