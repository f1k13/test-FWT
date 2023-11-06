import Select from "@/shared/ui/select/select";
import styles from "../../../widgets/filters/styles/filters.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, UseAppDispatch } from "@/entities/redux/store";
import {
  setAuthor,
  setCreatedBeforeValue,
  setCreatedFromValue,
  setLocation,
  setSearch,
} from "../lib/slices/filters-slice";
import { fetchAuthors } from "../lib/service/authors-fetch";
import { fetchLocation } from "../lib/service/location-fetch";

const SortingPanel = () => {

  const [firstValue, setFirstValue] = useState<string>("");

  const [secondValue, setSecondValue] = useState<string>("");

  const [searchValue, setSearchValue] = useState<string>("");

  const [isOpenAuthor, setIsOpenAuthor] = useState<boolean>(false);

  const [isOpenLocation, setIsOpenLocation] = useState<boolean>(false);

  const [isOpenCreated, setIsOpenCreated] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchLocation());
  }, []);
  

  useEffect(() => {
    dispatch(setCreatedFromValue(firstValue));
    dispatch(setCreatedBeforeValue(secondValue));
    dispatch(setSearch(searchValue));
  }, [firstValue, secondValue, searchValue]);

  const { authrorsItems } = useSelector((state: RootState) => state.authors);

  const { locationsItems } = useSelector((state: RootState) => state.location);

  const { author, location } = useSelector((state: RootState) => state.filter);

  const dispatch = UseAppDispatch();

  const handleChange = (value: string, select: string, id: number) => {
    if (select === "Author") {
      dispatch(setAuthor({ id, name: value }));
    } else if (select === "Location") {
      dispatch(setLocation({ id, location: value }));
    }
  };
  return (
    <div className={styles.line}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Name"
      />
      <Select
        select={author}
        options={authrorsItems}
        isOpen={isOpenAuthor}
        onChange={(value, id) => handleChange(value, "Author", id)}
        setIsOpen={setIsOpenAuthor}
      />
      <Select
        select={location}
        options={locationsItems}
        isOpen={isOpenLocation}
        onChange={(value, id) => handleChange(value, "Location", id)}
        setIsOpen={setIsOpenLocation}
      />
      <Select
        select={"Created"}
        valueInput={firstValue}
        onChangeInput={setFirstValue}
        valueInputSecond={secondValue}
        onChangeInputSecond={setSecondValue}
        isOpen={isOpenCreated}
        setIsOpen={setIsOpenCreated}
      />
    </div>
  );
};

export default SortingPanel;
