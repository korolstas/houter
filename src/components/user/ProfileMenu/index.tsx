"use client";

import { ConfigProvider, Menu } from "antd";
import { observer } from "mobx-react-lite";
import Link from "next/link";

import { configMenuType } from "@/components/header/Header/config";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

const ProfileMenuComponent = () => {
  const { userStore } = useStore();
  const { menuType, setMenuType } = userStore;

  const items = configMenuType.map(({ label, key, href, icon, danger }) => {
    return {
      key: key,
      label: (
        <Link onClick={() => setMenuType(key)} href={href}>
          {label}
        </Link>
      ),
      icon: icon,
      danger: danger,
    };
  });

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedBg: "rgb(209, 250, 229)",
            itemSelectedColor: "#10b981",
            itemColor: "#1b1c57",
          },
        },
      }}
    >
      <Menu
        className={styles.menu}
        defaultSelectedKeys={[menuType]}
        mode="inline"
        items={items}
      />
    </ConfigProvider>
  );
};

export const ProfileMenu = observer(ProfileMenuComponent);
