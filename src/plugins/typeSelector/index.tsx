import classNames from "classnames";
import styles from "./typeselector.module.scss";
interface TypeSelectorItem {
  value: any;
  label: string;
}
interface TypeSelectorProps {
  selectdeValue: any;
  items?: TypeSelectorItem[];
  onChange?(value: any): void;
}

export default ({
  selectdeValue,
  items = [],
  onChange = () => {},
}: TypeSelectorProps) => {
  return (
    <ul className={styles["type-selector"]}>
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={classNames(
              item.value === selectdeValue ? styles.selected : undefined
            )}
          >
            <a
              href="#"
              onClick={(ev) => {
                ev.preventDefault();
                if (selectdeValue !== item.value) onChange(item.value);
              }}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
