"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button } from "antd";
import Link from "next/link";

import { AntdProvider, Card, ProfileLayout } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

const MyPropertyComponent = () => {
  const { userStore } = useStore();
  const { userProfile, cards, user, isLoadingUser } = userStore;

  const isLoading = isLoadingUser;

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
              id={id}
              key={id}
              width={250}
              height={"100%"}
              title={title}
              price={price}
              image={image}
              widthImg={250}
              heightImg={200}
              userCard={user}
              isLoading={isLoading}
            />
          );
        })}
      </div>
    </ProfileLayout>
  );
};

export const MyProperty = observer(MyPropertyComponent);
