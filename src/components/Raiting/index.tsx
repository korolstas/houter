import { useState } from "react";
import { Rate } from "antd";

import { User } from "@types";

import { ModalRaiting } from "../modals/raiting";

import styles from "./styles.module.scss";

type RaitingProps = {
  user: User;
  value: number;
  isLink?: boolean;
};

export const Raiting = ({ user, isLink, value }: RaitingProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRate = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalRaiting open={isOpen} client={user} onCancel={handleRate} />

      <div className={styles.rate}>
        <span className={styles.rate_span}>{user.average_mark}</span>
        <Rate value={user.average_mark} disabled allowHalf />
        {isLink && (
          <span className={styles.rate_link} onClick={handleRate}>
            Raiting {user.assessed_count}
          </span>
        )}
      </div>
    </>
  );
};
