import { ReactNode } from "react";

import styles from "./styles.module.scss";
import { SvgSwitcher } from "@components";
import { useStore } from "@mobx";
import Link from "next/link";

type DropdownVariantType = "green" | "white";

type DropdownProps = {
  variant: DropdownVariantType;
  children: ReactNode;
  option: {
    name: string;
    href: string;
    svg?: string;
  }[];
  onClick?: () => void;
};

export const Dropdown = ({
  children,
  variant,
  option,
  onClick,
}: DropdownProps) => {
  const handlerClick = (value: string) => {
    switch (value) {
      case "logout": {
        return onClick && onClick();
      }
    }
  };

  return (
    <div className={`${styles.dropdown} ${styles[variant]}`}>
      <button className={`${styles.radius} ${styles.bttn} ${styles[variant]}`}>
        {children}
      </button>
      <div className={`${styles.dropdownMenu} ${styles[variant]}`}>
        {option.map(({ name, href, svg }) => {
          return (
            <Link
              className={styles[name.toLowerCase()]}
              onClick={() => handlerClick(name.toLowerCase())}
              href={href}
              key={name}
            >
              <SvgSwitcher variant={svg || name.toLowerCase()} />
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
