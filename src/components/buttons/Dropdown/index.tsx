import { Button, Dropdown as AntdDropdown } from "antd";
import { ReactNode } from "react";

import "./styles.scss";

type DropdownVariantType = "green" | "white";

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
  return (
    <AntdDropdown
      className={`radius bttn ${variant}`}
      placement="bottom"
      menu={{ items }}
      overlayClassName={overlayClassName}
    >
      <Button icon={icon}>{children}</Button>
    </AntdDropdown>
  );
};
