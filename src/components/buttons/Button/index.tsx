import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { Button as AntdButton, ConfigProvider } from "antd";

import styles from "./styles.module.scss";

type ButtonVariant = "dark" | "darkGreen" | "common" | "secondary" | "arrow";

type ButtonProps = {
  children: ReactNode;
  variant: ButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  isActive?: boolean;
  icon?: ReactNode;
  href?: string;
};

export const Button = ({
  children,
  isActive,
  variant,
  onClick,
  style,
  icon,
  href,
}: ButtonProps) => {
  const classNames = isActive ? `${variant}_active` : variant;

  const color = {
    dark: "#1b1c57",
    darkGreen: "none",
    common: "none",
    secondary: "none",
    arrow: "none",
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimaryActive: variant ? color[variant] : "none",
          },
        },
      }}
    >
      <AntdButton
        icon={icon}
        type="primary"
        className={`${styles.radius} ${styles[classNames]}`}
        onClick={onClick}
        style={style}
        href={href}
      >
        {children}
      </AntdButton>
    </ConfigProvider>
  );
};
