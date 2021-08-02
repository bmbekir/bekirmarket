import { useState } from "react";
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
  all?: string;
  allExtra?: string;
  search?: boolean;
  placeholder?: string;
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
  all,
  allExtra,
  search = false,
  placeholder = "search",
  onChange = () => {},
}: CheckListProps) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className={styles["check-list"]}>
      {search ? (
        <input
          className={styles["check-search"]}
          value={searchText}
          placeholder={placeholder}
          onChange={(ev) => setSearchText(ev.target.value)}
        />
      ) : undefined}
      <ul>
        {all ? (
          <li>
            <CheckBox
              value={all}
              label="All"
              extra={allExtra}
              checked={checkedValues.includes(all)}
              onClick={() => onChange(checkItem(checkedValues, "*"), -1)}
            />
          </li>
        ) : undefined}
        {items
          .filter((item) =>
            item.label
              .toLocaleLowerCase()
              .startsWith(searchText.toLocaleLowerCase())
          )
          .map((item, index) => {
            return (
              <li key={index}>
                <CheckBox
                  value={item.value}
                  label={item.label}
                  extra={item.extra}
                  checked={checkedValues.includes(item.value)}
                  onClick={(value) =>
                    onChange(checkItem(checkedValues, value), index)
                  }
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
