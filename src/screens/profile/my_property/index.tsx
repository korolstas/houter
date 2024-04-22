"use client";

import { Button, ConfigProvider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";

import { Card, ProfileLayout } from "@components";

import { cards } from "@screens/home/config";

import styles from "./styles.module.scss";

export const MyProperty = () => {
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
              cardWidth={"50%"}
              height={200}
              width={"100%"}
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
