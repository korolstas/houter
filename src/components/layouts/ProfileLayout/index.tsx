import { ReactNode } from "react";

import { ProfileMenu } from "../../user";

import styles from "./styles.module.scss";

type ProfileLayoutProps = {
  children: ReactNode;
};

export const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_menu}>
        <ProfileMenu />
      </div>
      <div className={styles.container_box}>{children}</div>
    </div>
  );
};
