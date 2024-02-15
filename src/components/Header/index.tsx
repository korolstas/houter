import styles from "./styles.module.scss";

import { confMenu } from "./config";

import { SvgSwitcher } from "../SvgSwitcher";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";

export const Header = () => {
  const bttn_text = "Sign Up!";

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
          <Button variant={"darkGreen"}>{bttn_text}</Button>
        </div>
      </div>
    </div>
  );
};
