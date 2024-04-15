import { observer } from "mobx-react-lite";
import { type MenuProps } from "antd";
import Link from "next/link";

import { useStore } from "@stores";

import styles from "./styles.module.scss";
import { confMenu } from "./config";

import { Dropdown, Button } from "../../buttons";
import { SvgSwitcher } from "../../SvgSwitcher";
import { ScrollHeader } from "../ScrollHeader";
import { UserDropdown } from "../../user";

const HeaderComponent = () => {
  const { userStore } = useStore();
  const { user } = userStore;

  const bttn_text = "Sign In!";

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <Link href="property?realty=house">
          <SvgSwitcher variant={"house"} />
          Houses
        </Link>
      ),
    },
    {
      key: 2,
      label: (
        <Link href="property?realty=villa">
          <SvgSwitcher variant={"villa"} />
          Villas
        </Link>
      ),
    },
    {
      key: 3,
      label: (
        <Link href="property?realty=apartment">
          <SvgSwitcher variant={"apartment"} />
          Apartments
        </Link>
      ),
    },
  ];

  return (
    <ScrollHeader>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.link}>
            <Link href={"/"}>
              <SvgSwitcher variant={"logo"} />
            </Link>
          </div>
          <div className={styles.container_box}>
            <div className={styles.container_box_menu}>
              {confMenu.map(({ label }) => {
                return label.toLocaleLowerCase() === "property" ? (
                  <Dropdown
                    icon={<SvgSwitcher variant={"arrow"} />}
                    overlayClassName={"dark"}
                    variant={"dark"}
                    items={items}
                    key={label}
                  >
                    {label}
                  </Dropdown>
                ) : (
                  <Button key={label} variant={"dark"}>
                    {label}
                  </Button>
                );
              })}
            </div>
            {user ? (
              <UserDropdown user={user} />
            ) : (
              <Link href={"auth/login"}>
                <Button variant={"darkGreen"}>{bttn_text}</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </ScrollHeader>
  );
};

export const Header = observer(HeaderComponent);
