import { Button, Dropdown as AntdDropdown, ConfigProvider } from "antd";
import { ReactNode } from "react";

import "./styles.scss";

type DropdownVariantType = "green" | "dark";

type DropdownProps = {
  variant: DropdownVariantType;
  children: ReactNode;
  items: any;
  icon?: ReactNode;
  overlayClassName?: DropdownVariantType;
};

export const Dropdown = ({
  children,
  variant,
  items,
  icon,
  overlayClassName,
}: DropdownProps) => {
  const color = {
    dark: "#1b1c57",
    green: "none",
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {
            colorPrimaryActive: variant ? color[variant] : "none",
          },
        },
      }}
    >
      <AntdDropdown
        className={`radius bttn ${variant}`}
        placement="bottom"
        menu={{ items }}
        overlayClassName={overlayClassName}
      >
        <Button icon={icon}>{children}</Button>
      </AntdDropdown>
    </ConfigProvider>
  );
};
