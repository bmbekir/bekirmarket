import radioImg from "./radio.svg";
import radioCheckedImg from "./radio-tick.svg";
import styles from "./radio.module.scss";
interface RadioButtonProps {
  value: any;
  label: string;
  checked?: boolean;
  onClick?(value: any): void;
}

export default ({
  value,
  label,
  checked = false,
  onClick = (value: any) => {},
}: RadioButtonProps) => {
  return (
    <div className={styles["radio-row"]}>
      <img
        src={checked ? radioCheckedImg : radioImg}
        onClick={() => onClick(value)}
      />
      <label onClick={() => onClick(value)}>{label}</label>
    </div>
  );
};
