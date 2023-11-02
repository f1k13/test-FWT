import { CardsList } from "@/widgets/cards-list/ui";
import { Filters } from "@/widgets/filters/ui";

const HomePage = () => {
  return (
    <div>
      <Filters />
      <CardsList />
    </div>
  );
};

export default HomePage;
