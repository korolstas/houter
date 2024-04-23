"use client";

import { PlusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Link from "next/link";

import { AntdProvider, Card, ProfileLayout } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

const MyPropertyComponent = () => {
  const { userStore } = useStore();
  const { userProfile, cards, user } = userStore;

  useEffect(() => {
    userProfile();
  }, []);

  return (
    <ProfileLayout>
      <div>
        <h1 className={styles.title}>Your Last Propeties</h1>
        <AntdProvider>
          <Link href={"/property/ad/create"}>
            <Button
              type="primary"
              style={{
                width: "150px",
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                fontFamily: "Lexend",
              }}
              className={`${styles.avatar} ${styles.center}`}
            >
              <div className={`${styles.avatar_box}`}>Add Ad</div>
            </Button>
          </Link>
        </AntdProvider>
      </div>
      <div className={styles.propeties_items}>
        {cards.map(({ image, price, title, id }) => {
          return (
            <Card
              isYour
              title={title}
              price={price}
              image={image}
              user={user}
              width={250}
              height={"100%"}
              widthImg={250}
              heightImg={200}
              key={id}
              id={id}
            />
          );
        })}
      </div>
    </ProfileLayout>
  );
};

export const MyProperty = observer(MyPropertyComponent);
