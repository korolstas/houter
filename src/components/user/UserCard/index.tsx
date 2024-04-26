import { PhoneFilled } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import Image from "next/image";

import { AntdProvider, CustomAvatar } from "@components";
import { User } from "@types";

import styles from "./styles.module.scss";

type UserCardProps = {
  user: User;
  isContactNow?: boolean;
  size?: number;
};

export const UserCard = ({ user, isContactNow, size }: UserCardProps) => {
  const items = [
    {
      key: 1,
      label: <label>{user?.phone}</label>,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container_box}>
        {user?.imgUrl ? (
          <Image
            className={styles.container_box_image}
            src={user?.imgUrl}
            alt={user?.firstName + user?.lastName}
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        ) : (
          <CustomAvatar
            firstName={user?.firstName}
            lastName={user?.lastName}
            image={user?.imgUrl}
            id={user?.id}
          />
        )}
        <div className={styles.container_box_description}>
          <h4>{`${user?.firstName} ${user?.lastName}`}</h4>
          <label>{user?.location}</label>
        </div>
      </div>
      {isContactNow && user?.phone && (
        <AntdProvider>
          <Dropdown menu={{ items }}>
            <Button
              type="primary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "max-content",
                borderRadius: "50px",
                fontFamily: "Lexend",
                fontSize: "14px",
                padding: "22px",
                fontWeight: 500,
                gap: 10,
              }}
              icon={<PhoneFilled style={{ fontSize: "20px" }} />}
            >
              Contact Now
            </Button>
          </Dropdown>
        </AntdProvider>
      )}
    </div>
  );
};
