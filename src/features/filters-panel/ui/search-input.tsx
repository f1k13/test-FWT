import { UseAppDispatch } from "@/entities/redux/store";
import { ChangeEvent, useCallback, useState } from "react";
import debounce from "lodash.debounce";
import styles from "../../../widgets/filters/styles/filters.module.scss";
import { setSearch } from "../lib/slices/filters-slice";

const Search = () => {
  const dispatch = UseAppDispatch();
  const [value, setValue] = useState<string>("");
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearch(str));
    }, 2000),
    []
  );
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };
  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => onChangeInput(e)}
        placeholder="Name"
      />
    </>
  );
};

export default Search;
