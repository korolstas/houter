import { useStore } from "@mobx";

import styles from "./styles.module.scss";

import { confMenu } from "./config";

import { SvgSwitcher } from "../SvgSwitcher";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";

export const Header = () => {
  const { modalStore } = useStore();
  const { setModalType } = modalStore;

  const bttn_text = "Sign In!";

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SvgSwitcher variant={"logo"} />
        <div className={styles.container_box}>
          <div className={styles.container_box_menu}>
            {confMenu.map(({ label, option }) => {
              return option ? (
                <Dropdown label={label} option={option} />
              ) : (
                <Button variant={"white"}>{label}</Button>
              );
            })}
          </div>
          <Button onClick={() => setModalType("login")} variant={"darkGreen"}>
            {bttn_text}
          </Button>
        </div>
      </div>
    </div>
  );
};
