"use client";

import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Empty } from "antd";

import { Card, LoaderLayout, ProfileLayout } from "@components";
import { useStore } from "@stores";

import styles from "../my_property/styles.module.scss";

const MyFavoritesComponent = () => {
  const router = useRouter();
  const { userStore } = useStore();
  const { getFavorites, favorites, isLoadingUser, isRefreshh, setIsRefresh } =
    userStore;

  const isLoading = isLoadingUser;

  useEffect(() => {
    getFavorites();

    if (isRefreshh) {
      router.refresh();
      setIsRefresh();
    }
  }, [isRefreshh]);

  return (
    <ProfileLayout>
      <LoaderLayout height={200}>
        <h1 className={styles.title}>Your favorites</h1>

        <div
          className={styles.propeties_items}
          style={{ justifyContent: !favorites.length ? "center" : "none" }}
        >
          {favorites.length ? (
            favorites.map(
              ({ image, price, title, id, user, is_favorite, favorite_id }) => {
                return (
                  <Card
                    id={id}
                    key={id}
                    width={250}
                    height={"100%"}
                    title={title}
                    price={price}
                    image={image}
                    isFavoriteShow
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

export const MyFavorites = observer(MyFavoritesComponent);
