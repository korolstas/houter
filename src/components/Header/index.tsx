import { useStore } from "@mobx";

import styles from "./styles.module.scss";

import { SvgSwitcher } from "../SvgSwitcher";
import { Dropdown, Button } from "../buttons";
import { UserProfileBttn } from "../user";
import { confMenu } from "./config";

export const Header = () => {
  const { modalStore, userStore } = useStore();
  const { user } = userStore;
  const { setModalProps } = modalStore;

  const bttn_text = "Sign In!";

  // change
  const userInfo = {
    firstName: "Super",
    lastName: "Admin",
    id: 99,
  };

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
          {userInfo ? (
            <UserProfileBttn user={userInfo} />
          ) : (
            <Button
              onClick={() => setModalProps("login")}
              variant={"darkGreen"}
            >
              {bttn_text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
