import RadioButton from "../radioButton";
import styles from "./radiolist.module.scss";
interface RadioListItem {
  value: any;
  label: string;
}
interface RadioListPros {
  items: RadioListItem[];
  checkedValue: any;
  onChange?(value: any, index: number): void;
}

export default ({
  checkedValue,
  items,
  onChange = () => {},
}: RadioListPros) => {
  return (
    <ul className={styles["radio-list"]}>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <RadioButton
              value={item.value}
              label={item.label}
              checked={item.value === checkedValue}
              onClick={(value) => onChange(value, index)}
            />
          </li>
        );
      })}
    </ul>
  );
};
