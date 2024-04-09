import { MenuProps } from "antd";
import Link from "next/link";
import {
  PoweroffOutlined,
  SolutionOutlined,
  ShopOutlined,
} from "@ant-design/icons";

import { Dropdown } from "@components";
import { useStore } from "@stores";

import { CustomAvatar } from "../CustomAvatar";

type UserDropdownProps = {
  user: any;
};

export const UserDropdown = ({ user }: UserDropdownProps) => {
  const { userStore } = useStore();
  const { clearUser } = userStore;

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: <Link href="/profile">Profile</Link>,
      icon: <SolutionOutlined style={{ fontSize: "20px" }} />,
    },
    {
      key: 2,
      label: <Link href="/properties">My Properties</Link>,
      icon: <ShopOutlined style={{ fontSize: "20px" }} />,
    },
    {
      key: 3,
      label: (
        <Link onClick={clearUser} href="/">
          Logout
        </Link>
      ),
      icon: <PoweroffOutlined style={{ fontSize: "20px" }} />,
      danger: true,
    },
  ];

  return (
    <Dropdown variant={"green"} items={items} overlayClassName={"green"}>
      <CustomAvatar
        firstName={user.firstName}
        lastName={user.lastName}
        image={user?.img}
        id={user.id}
      />
    </Dropdown>
  );
};
