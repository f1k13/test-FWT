import { CardType } from "../lib/service/cards-fetch";

const CardItem = ({ item, index }: { item: CardType; index: number }) => {
  console.log(index);
  return <div>{item.name}</div>;
};

export default CardItem;
