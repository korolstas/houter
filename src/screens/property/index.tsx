"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Input } from "antd";

import { AntdProvider, Card, SideFilter } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

const PropertyComponent = () => {
  const { cardStore } = useStore();
  const { getCards, cards } = cardStore;

  useEffect(() => {
    getCards();
  }, []);

  return (
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
                {cards.map(({ image, title, price, user, banner, id }) => {
                  return (
                    <Card
                      id={id}
                      key={id}
                      isFavorite
                      width={250}
                      height={"100%"}
                      price={price}
                      title={title}
                      image={image}
                      widthImg={250}
                      heightImg={200}
                      banner={banner}
                      userCard={user}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </AntdProvider>
    </div>
  );
};

export const Property = observer(PropertyComponent);
