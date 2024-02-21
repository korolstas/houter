import Image from "next/image";

import { User } from "@types";

import styles from "./styles.module.scss";

import { SvgSwitcher } from "../../SvgSwitcher";
import { Button } from "../../buttons";

type UserCardProps = {
  user: User;
  isContactNow?: boolean;
  isWho?: boolean;
  size?: number;
};

export const UserCard = ({
  user,
  size,
  isContactNow,
  isWho,
}: UserCardProps) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.container_image}
        src={user.image}
        alt={user.name}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
      <div className={styles.container_description}>
        <h4>{user.name}</h4>
        <label>{isWho ? user.work : user.location}</label>
      </div>
      {isContactNow && (
        <Button variant={"common"}>
          <SvgSwitcher variant={"call"} />
          Contact Now
        </Button>
      )}
    </div>
  );
};
