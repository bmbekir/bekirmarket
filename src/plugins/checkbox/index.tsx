import checkImg from "./check.svg";
import checkCheckedImg from "./check-tick.svg";
import styles from "./check.module.scss";
interface CheckboxProps {
  value: any;
  label: string;
  extra?: string;
  checked?: boolean;
  onClick?(value: any): void;
}

export default ({
  value,
  label,
  checked = false,
  extra,
  onClick = (value: any) => {},
}: CheckboxProps) => {
  return (
    <div className={styles["check-row"]}>
      <img
        src={checked ? checkCheckedImg : checkImg}
        onClick={() => onClick(value)}
      />
      <label onClick={() => onClick(value)}>
        {label}{" "}
        {extra ? <span className={styles["label-extra"]}>{extra}</span> : ""}
      </label>
    </div>
  );
};
