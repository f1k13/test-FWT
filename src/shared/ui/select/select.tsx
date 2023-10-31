type options = {
  id: string;
  name: string;
};
const Select = ({
  select,
  options,
  onChange,
  isOpen,
}: {
  select: string;
  options: options[];
  onChange: (value: string) => void;
  isOpen: boolean;
}) => {
  return (
    <div>
      {select}
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li onClick={() => onChange(option.name)} key={option.id}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
