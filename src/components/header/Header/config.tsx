import {
  AppstoreOutlined,
  SettingOutlined,
  // HeartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export const confMenu = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Article",
    href: "/",
  },
  {
    label: "Property",
    href: "/",
  },
];

export const dropDownMenu = [
  {
    id: 1,
    href: "/property?realty=",
    value: "House",
  },
  {
    id: 2,
    href: "/property?realty=",
    value: "Villa",
  },
  {
    id: 3,
    href: "/property?realty=",
    value: "Apartment",
  },
];

export const configMenuType = [
  {
    key: "1",
    label: "My property",
    href: "/profile/my_property",
    icon: <AppstoreOutlined style={{ fontSize: "20px" }} />,
  },
  // {
  //   key: "2",
  //   label: "Favorites",
  //   href: "/profile/favorites",
  //   icon: <HeartOutlined style={{ fontSize: "20px" }} />,
  // },
  {
    key: "3",
    label: "Profile setting",
    href: "/profile/account",
    icon: <SettingOutlined style={{ fontSize: "20px" }} />,
  },
  {
    key: "4",
    label: "Logout",
    href: "/",
    icon: <LogoutOutlined style={{ fontSize: "20px" }} />,
    danger: true,
  },
];
