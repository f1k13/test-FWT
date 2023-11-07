import { Paginate } from "@/shared/ui/pagination";
import { CardsList } from "@/widgets/cards-list/ui";
import { Filters } from "@/widgets/filters/ui";

const HomePage = () => {

  return (
    <div>
      <Filters />
      <CardsList />
      <Paginate />
    </div>
  );
};

export default HomePage;
