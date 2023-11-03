import { useEffect, useRef } from "react";
import { SelectArrowIcon } from "../icons";
import styles from "./styles/select.module.scss";

type options = {
  id: number;
  name: string;
  location: string;
};
const Select = ({
  select,
  options,
  onChange,
  isOpen,
  setIsOpen,
}: {
  select: string;
  options: options[];
  onChange: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const sortRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  if (select.length > 20) {
    select = select.slice(0, 20) + "...";
  }

  return (
    <div
      ref={sortRef}
      onClick={() => setIsOpen(!isOpen)}
      className={isOpen === true ? styles.isActive : styles.isNotActive}
    >
      <div className={styles.select}>
        <p className={styles.title}>{select}</p>
        <div className={styles.icons}>
          <SelectArrowIcon />
        </div>
      </div>
      {isOpen && (
        <ul
          className={
            isOpen === true ? styles.listIsActive : styles.listNotIsActive
          }
        >
          {options.map((option) => (
            <li
              className={styles.item}
              onClick={() => onChange(option.name || option.location)}
              key={option.id}
            >
              {option.name || option.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
