import { MenuProps } from "antd";
import {
  PoweroffOutlined,
  SolutionOutlined,
  ShopOutlined,
} from "@ant-design/icons";

import { Dropdown } from "@components";
import { useStore } from "@mobx";

import { CustomAvatar } from "../CustomAvatar";

type UserProfileBttnProps = {
  user: any;
};

export const UserProfileBttn = ({ user }: UserProfileBttnProps) => {
  const { userStore } = useStore();
  const { clearUser } = userStore;

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <a rel="profile" href="">
          Profile
        </a>
      ),
      icon: <SolutionOutlined style={{ fontSize: "20px" }} />,
    },
    {
      key: 2,
      label: (
        <a rel="my-properties" href="">
          My Properties
        </a>
      ),
      icon: <ShopOutlined style={{ fontSize: "20px" }} />,
    },
    {
      key: 3,
      label: (
        <a onClick={clearUser} rel="Logout" href="/">
          Logout
        </a>
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
