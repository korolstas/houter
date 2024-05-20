"use client";

import { observer } from "mobx-react-lite";
import { Button, Empty } from "antd";
import { useEffect } from "react";
import Link from "next/link";

import { AntdProvider, Card, LoaderLayout, ProfileLayout } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

const MyPropertyComponent = () => {
  const { userStore } = useStore();
  const { userProfile, cards, user, isLoadingUser } = userStore;

  const isLoading = isLoadingUser;

  useEffect(() => {
    userProfile(user?.id);
  }, []);

  return (
    <ProfileLayout>
      <LoaderLayout height={200}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className={styles.title}>Your propeties</h1>
          <AntdProvider>
            <Link href={"/property/ad/create"}>
              <Button
                type="primary"
                style={{
                  width: "150px",
                  padding: 20,
                  display: "flex",
                  fontSize: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Lexend",
                }}
                className={`${styles.avatar} ${styles.center}`}
              >
                Create Ad
              </Button>
            </Link>
          </AntdProvider>
        </div>
        <div
          className={styles.propeties_items}
          style={{ justifyContent: !cards.length ? "center" : "none" }}
        >
          {cards.length ? (
            cards?.map(
              ({ image, price, title, id, is_favorite, favorite_id }) => {
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
                    isFavorite={is_favorite}
                    favoriteId={favorite_id}
                  />
                );
              }
            )
          ) : (
            <Empty style={{ fontFamily: "Lexend", margin: 60 }} />
          )}
        </div>
      </LoaderLayout>
    </ProfileLayout>
  );
};

export const MyProperty = observer(MyPropertyComponent);
