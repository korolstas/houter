import { observer } from "mobx-react-lite";
import { type MenuProps } from "antd";
import Link from "next/link";

import { useStore } from "@mobx";

import styles from "./styles.module.scss";

import { Dropdown, Button } from "../buttons";
import { SvgSwitcher } from "../SvgSwitcher";
import { UserProfileBttn } from "../user";
import { confMenu } from "./config";

const HeaderComponent = () => {
  const { userStore } = useStore();
  const { user } = userStore;

  const bttn_text = "Sign Up!";

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <Link rel="houses" href="houses">
          <SvgSwitcher variant={"house"} />
          Houses
        </Link>
      ),
    },
    {
      key: 2,
      label: (
        <Link rel="villas" href="villas">
          <SvgSwitcher variant={"villa"} />
          Villas
        </Link>
      ),
    },
    {
      key: 3,
      label: (
        <Link rel="apartments" href="apartments">
          <SvgSwitcher variant={"apartment"} />
          Apartments
        </Link>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SvgSwitcher variant={"logo"} />
        <div className={styles.container_box}>
          <div className={styles.container_box_menu}>
            {confMenu.map(({ label }) => {
              return label.toLocaleLowerCase() === "property" ? (
                <Dropdown
                  icon={<SvgSwitcher variant={"arrow"} />}
                  variant={"white"}
                  items={items}
                  key={label}
                  overlayClassName={"white"}
                >
                  {label}
                </Dropdown>
              ) : (
                <Button key={label} variant={"white"}>
                  {label}
                </Button>
              );
            })}
          </div>
          {user ? (
            <UserProfileBttn user={user} />
          ) : (
            <Link href={"auth/signup"}>
              <Button variant={"darkGreen"}>{bttn_text}</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const Header = observer(HeaderComponent);
