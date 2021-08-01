import CheckBox from "../checkbox";
import styles from "./checkboxlist.module.scss";
interface CheckListItem {
  value: any;
  label: string;
  extra?: string;
}
interface CheckListProps {
  items: CheckListItem[];
  checkedValues?: any[];
  onChange?(values: any[], index: number): void;
}

const checkItem = (values: any[], value: any) => {
  let v = [...values];
  const index = v.indexOf(value);
  if (index >= 0) v.splice(index, 1);
  else v.push(value);
  return v;
};

export default ({
  checkedValues = [],
  items,
  onChange = () => {},
}: CheckListProps) => {
  return (
    <ul className={styles["check-list"]}>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <CheckBox
              value={item.value}
              label={item.label}
              extra={item.extra}
              checked={checkedValues.indexOf(item.value) >= 0}
              onClick={(value) =>
                onChange(checkItem(checkedValues, value), index)
              }
            />
          </li>
        );
      })}
    </ul>
  );
};
