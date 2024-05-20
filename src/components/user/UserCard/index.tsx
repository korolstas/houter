import { PhoneFilled } from "@ant-design/icons";
import { Button, Dropdown, Rate } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AntdProvider, CustomAvatar } from "@components";
import { User } from "@types";

import styles from "./styles.module.scss";
import { Raiting } from "@/components/Raiting";

type UserCardProps = {
  user: User;
  isContactNow?: boolean;
  isEdit?: boolean;
  isCube?: boolean;
  isRate?: boolean;
  isClick?: boolean;
  size?: number;
};

export const UserCard = ({
  user,
  isContactNow,
  isEdit,
  isCube,
  isRate,
  size,
  isClick,
}: UserCardProps) => {
  const router = useRouter();

  const items = [
    {
      key: 1,
      label: <label>{user?.phone}</label>,
    },
  ];

  const handleClick = () => {
    router.push(`/customer?id=${user.id}`);
  };

  return (
    <div
      className={styles.container}
      style={{ cursor: isClick ? "pointer" : "auto" }}
      onClick={isClick ? handleClick : () => {}}
    >
      <div className={styles.container_box}>
        <CustomAvatar
          isEdit={isEdit}
          isCube={isCube}
          firstName={user?.firstName}
          lastName={user?.lastName}
          imgUrl={user?.image ? user?.image : null}
          id={user?.id}
          size={size}
        />

        <div className={styles.container_box_description}>
          <h4>{`${user?.firstName} ${user?.lastName}`}</h4>
          <label>{user?.location}</label>
          {isRate && <Raiting value={3.5} isLink user={user} />}
        </div>
      </div>

      {isContactNow && user?.phone && (
        <AntdProvider>
          <Dropdown menu={{ items }}>
            <Button
              type="primary"
              style={{
                borderRadius: "50px",
                width: "max-content",
                fontFamily: "Lexend",
                fontSize: "14px",
                fontWeight: 500,
                padding: "22px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
