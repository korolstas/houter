"use client";

import { useSearchParams } from "next/navigation";
import { observer } from "mobx-react-lite";
import { Empty, Input } from "antd";
import { useEffect } from "react";

import { AntdProvider, Card, LoaderLayout, SideFilter } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

const PropertyComponent = () => {
  const { cardStore } = useStore();
  const { getCards, cards, isLoadingCard } = cardStore;
  const searchParams = useSearchParams();
  const start_price = searchParams.get("start_price");
  const end_price = searchParams.get("end_price");
  const location = searchParams.get("location");
  const realty = searchParams.get("realty");
  const rent = searchParams.get("rent");

  const isLoading = isLoadingCard;

  useEffect(() => {
    getCards({ user_id: null, start_price, end_price, location, realty, rent });
  }, []);

  return (
    <LoaderLayout>
      <div className={styles.display}>
        <AntdProvider>
          <div className={styles.page}>
            <h1 className={styles.page_title}>Property</h1>
            <div className={styles.page_box}>
              <div className={styles.page_box_filters}>
                <SideFilter />
              </div>
              <div className={styles.page_box_properties}>
                <div className={styles.search}>
                  <Input.Search
                    className={styles.search_input}
                    placeholder="Search there..."
                    size="large"
                    enterButton
                  />
                </div>
                <div className={styles.page_box_properties_items}>
                  {cards.length ? (
                    cards?.map(
                      ({
                        is_favorite,
                        image,
                        title,
                        price,
                        user,
                        banner,
                        id,
                        favorite_id,
                      }) => {
                        return (
                          <Card
                            favoriteId={favorite_id}
                            isFavorite={is_favorite}
                            id={id}
                            key={id}
                            isFavoriteShow
                            width={250}
                            height={"100%"}
                            price={price}
                            title={title}
                            image={image}
                            widthImg={250}
                            heightImg={200}
                            banner={banner}
                            userCard={user}
                            isLoading={isLoading}
                          />
                        );
                      }
                    )
                  ) : (
                    <Empty style={{ fontFamily: "Lexend", margin: 60 }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </AntdProvider>
      </div>
    </LoaderLayout>
  );
};

export const Property = observer(PropertyComponent);
