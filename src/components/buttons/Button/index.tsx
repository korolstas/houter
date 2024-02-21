import { CSSProperties, MouseEventHandler, ReactNode } from "react";

import styles from "./styles.module.scss";

type ButtonVariant = "white" | "darkGreen" | "common" | "secondary" | "arrow";

type ButtonProps = {
  children: ReactNode;
  variant: ButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  isActive?: boolean;
};

export const Button = ({
  children,
  isActive,
  variant,
  onClick,
  style,
}: ButtonProps) => {
  const classNames = isActive ? `${variant}_active` : variant;

  return (
    <button
      className={`${styles.radius} ${styles[classNames]}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
