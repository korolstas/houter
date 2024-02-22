import { observer } from "mobx-react-lite";

import { useStore } from "@mobx";

import styles from "./styles.module.scss";

import { Dropdown, Button } from "../buttons";
import { SvgSwitcher } from "../SvgSwitcher";
import { UserProfileBttn } from "../user";
import { confMenu } from "./config";

const HeaderComponent = () => {
  const { modalStore, userStore } = useStore();
  const { setModalType } = modalStore;
  const { user } = userStore;

  const bttn_text = "Sign In!";

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SvgSwitcher variant={"logo"} />
        <div className={styles.container_box}>
          <div className={styles.container_box_menu}>
            {confMenu.map(({ label, option }) => {
              return option ? (
                <Dropdown variant={"white"} option={option}>
                  {label}
                  <SvgSwitcher variant={"arrow"} />
                </Dropdown>
              ) : (
                <Button variant={"white"}>{label}</Button>
              );
            })}
          </div>
          {user ? (
            <UserProfileBttn user={user} />
          ) : (
            <Button onClick={() => setModalType("login")} variant={"darkGreen"}>
              {bttn_text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Header = observer(HeaderComponent);
