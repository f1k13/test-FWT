import Select from "@/shared/ui/select/select";
import styles from "../../../widgets/filters/styles/filters.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, UseAppDispatch } from "@/entities/redux/store";
import {
  setAuthor,
  setCreated,
  setLocation,
} from "../lib/slices/filters-slice";
import { fetchAuthors } from "../lib/service/authors-fetch";
import { fetchLocation } from "../lib/service/location-fetch";

const SortingPanel = () => {
  const options = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
    { id: "1", name: "1" },
    { id: "2", name: "2" },
  ];

  const dispatch = UseAppDispatch();

  const { author, location, created } = useSelector(
    (state: RootState) => state.filter
  );

  const [isOpenAuthor, setIsOpenAuthor] = useState<boolean>(false);

  const [isOpenLocation, setIsOpenLocation] = useState<boolean>(false);

  const [isOpenCreated, setIsOpenCreated] = useState<boolean>(false);

  const handleChange = (value: string, select: string) => {
    if (select === "Author") {
      dispatch(setAuthor(value));
    } else if (select === "Location") {
      dispatch(setLocation(value));
    } else if (select === "Created") {
      dispatch(setCreated(value));
    }
  };

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchLocation());
  }, []);

  const { authrorsItems, status } = useSelector(
    (state: RootState) => state.authors
  );

  const { locationsItems } = useSelector((state: RootState) => state.location);

  console.log(authrorsItems);



  return (
    <div className={styles.line}>
      <input className={styles.input} type="text" placeholder="Name" />
      <Select
        select={author}
        options={authrorsItems}
        isOpen={isOpenAuthor}
        onChange={(value) => handleChange(value, "Author")}
        setIsOpen={setIsOpenAuthor}
      />
      <Select
        select={location}
        options={locationsItems}
        isOpen={isOpenLocation}
        onChange={(value) => handleChange(value, "Location")}
        setIsOpen={setIsOpenLocation}
      />
      <Select
        select={created}
        options={options}
        isOpen={isOpenCreated}
        onChange={(value) => handleChange(value, "Created")}
        setIsOpen={setIsOpenCreated}
      />
    </div>
  );
};

export default SortingPanel;
