"use client";

import { ConfigProvider, Menu } from "antd";
import { observer } from "mobx-react-lite";
import Link from "next/link";

import { configMenuType } from "@/components/header/Header/config";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

const ProfileMenuComponent = () => {
  const { userStore, buttonStore } = useStore();
  const { menuType, setMenuType } = buttonStore;
  const { clearUser } = userStore;

  const items = configMenuType.map(({ label, key, href, icon, danger }) => {
    return {
      key: key,
      icon: icon,
      danger: danger,
      label: (
        <Link
          onClick={!danger ? () => setMenuType(key) : clearUser}
          href={href}
        >
          {label}
        </Link>
      ),
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
        defaultSelectedKeys={[menuType]}
        className={styles.menu}
        items={items}
        mode="inline"
      />
    </ConfigProvider>
  );
};

export const ProfileMenu = observer(ProfileMenuComponent);
