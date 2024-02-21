import { ReactNode } from "react";

import styles from "./styles.module.scss";
import { SvgSwitcher } from "@components";

type DropdownVariantType = "green" | "white";

type DropdownProps = {
  variant: DropdownVariantType;
  children: ReactNode;
  option: {
    name: string;
    href: string;
    svg?: string;
  }[];
};

export const Dropdown = ({ option, children, variant }: DropdownProps) => {
  return (
    <div className={`${styles.dropdown} ${styles[variant]}`}>
      <button className={`${styles.radius} ${styles.bttn} ${styles[variant]}`}>
        {children}
      </button>
      <div className={`${styles.dropdownMenu} ${styles[variant]}`}>
        {option.map(({ name, href, svg }) => {
          return (
            <a key={name} href={href} className={styles[name.toLowerCase()]}>
              <SvgSwitcher variant={svg || name.toLowerCase()} />
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
