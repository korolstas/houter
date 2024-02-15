import styles from "./styles.module.scss";
import { SvgSwitcher } from "../SvgSwitcher";

interface Props {
  label: string;
  option: {
    name: string;
    href: string;
  }[];
}

export const Dropdown = ({ label, option }: Props) => {
  return (
    <div className={styles.dropdown}>
      <button className={`${styles.radius} ${styles.bttn}`}>
        {label}
        <SvgSwitcher variant={"arrow"} />
      </button>
      <div className={styles.dropdownMenu}>
        {option.map(({ name, href }) => {
          return (
            <a key={name} href={href}>
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
