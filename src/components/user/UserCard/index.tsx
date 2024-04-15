import { Button, Dropdown, type MenuProps } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";

import { AntdProvider } from "@components";
import { User } from "@types";

import styles from "./styles.module.scss";

type UserCardProps = {
  user: User;
  isContactNow?: boolean;
  isWho?: boolean;
  size?: number;
};

export const UserCard = ({
  user,
  isContactNow,
  isWho,
  size,
}: UserCardProps) => {
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: <label>{user?.phone}</label>,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container_box}>
        <Image
          className={styles.container_box_image}
          src={user?.imgUrl ? user?.imgUrl : ""}
          alt={user?.firstName + user?.lastName}
          style={{ width: `${size}px`, height: `${size}px` }}
        />
        <div className={styles.container_box_description}>
          <h4>{user?.title}</h4>
          <label>{isWho ? user?.work : user?.location}</label>
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
                gap: "10px",
                borderRadius: "50px",
                width: "max-content",
                padding: "22px",
                fontFamily: "Lexend",
                fontWeight: 500,
                fontSize: "14px",
              }}
              icon={<PhoneOutlined style={{ fontSize: "20px" }} />}
            >
              Contact Now
            </Button>
          </Dropdown>
        </AntdProvider>
      )}
    </div>
  );
};
