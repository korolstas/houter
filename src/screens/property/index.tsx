"use client";

import { Input } from "antd";
import { observer } from "mobx-react-lite";

import { AntdProvider, Card, SideFilter } from "@components";
import { cards } from "@screens/home/config";

import styles from "./styles.module.scss";

const PropertyComponent = () => {
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
                      isFavorite
                      banner={banner}
                      title={title}
                      price={price}
                      image={image}
                      height={200}
                      cardWidth={"30%"}
                      width={"100%"}
                      user={user}
                      key={id}
                      id={id}
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
