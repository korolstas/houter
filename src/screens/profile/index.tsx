"use client";

import { Button, ConfigProvider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";

import { Card, FormProfile } from "@components";
import { cards } from "@screens/home/config";

import styles from "./styles.module.scss";

const ProfileComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Your Data</h1>
        <FormProfile />
      </div>
      <div className={styles.propeties}>
        <h1 className={styles.title}>Your Last Propeties</h1>
        <div className={styles.propeties_items}>
          {cards.map(({ image, price, title }) => {
            return (
              <Card
                isYour
                width={250}
                height={200}
                image={image}
                price={price}
                title={title}
                key={title + price}
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
            <Button className={`${styles.avatar} ${styles.center}`}>
              <div className={`${styles.avatar_box}`}>
                <PlusOutlined />
                Add Item
              </div>
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export const Profile = observer(ProfileComponent);
