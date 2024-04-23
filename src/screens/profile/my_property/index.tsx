"use client";

import { PlusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Link from "next/link";

import { Card, ProfileLayout } from "@components";
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
      <h1 className={styles.title}>Your Last Propeties</h1>
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

        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: "#1b1c57",
                colorPrimaryActive: "#1b1c57",
                colorPrimaryHover: "#1b1c57",
              },
            },
          }}
        >
          <Link href={"/property/ad/create"}>
            <Button className={`${styles.avatar} ${styles.center}`}>
              <div className={`${styles.avatar_box}`}>
                <PlusOutlined />
                Add Item
              </div>
            </Button>
          </Link>
        </ConfigProvider>
      </div>
    </ProfileLayout>
  );
};

export const MyProperty = observer(MyPropertyComponent);
