"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SettingOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { Button, Result } from "antd";

import { AntdProvider, Card, LoaderLayout, UserCard } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";
import { useEffect } from "react";

const CustomerComponent = () => {
  const { userStore, customerStore } = useStore();
  const { customer, cards, getCustomer, isLoadingCustomer } = customerStore;
  const { user, userProfile, isLoadingUser } = userStore;
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  useEffect(() => {
    getCustomer(Number(id));
  }, []);

  const handleEdit = () => {
    userProfile(Number(id));
    router.push("/profile/account");
  };

  const isMe = customer?.id === user?.id;
  const isLoading = isLoadingCustomer || isLoadingUser;

  return (
    <LoaderLayout>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.header_box}>
              <UserCard isCube isRate size={70} user={customer} />
              {isMe && (
                <AntdProvider>
                  <Button
                    style={{
                      fontFamily: "Lexend",
                    }}
                    type="default"
                    size="large"
                    onClick={handleEdit}
                  >
                    Edit profile
                  </Button>
                </AntdProvider>
              )}
            </div>
          </div>
          <div
            className={styles.cards}
            style={{ justifyContent: cards.length ? "flex-start" : "center" }}
          >
            {cards.length ? (
              cards?.map(
                ({
                  image,
                  price,
                  title,
                  id,
                  user,
                  is_favorite,
                  favorite_id,
                }) => {
                  return (
                    <Card
                      favoriteId={favorite_id}
                      isFavorite={is_favorite}
                      isFavoriteShow={!isMe}
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
                }
              )
            ) : (
              <Result
                status="404"
                title="The seller does not have any ads yet"
              />
            )}
          </div>
        </div>
      </div>
    </LoaderLayout>
  );
};

export const Customer = observer(CustomerComponent);
