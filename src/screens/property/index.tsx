"use client";

import { Input } from "antd";

import { SideFilter } from "@/components/SideFilter";

import { AntdProvider, Card } from "@components";
import { cards } from "@screens/home/config";

import styles from "./styles.module.scss";

export const Property = () => {
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
                {cards.map(({ image, title, price, user, banner }, index) => {
                  return (
                    <Card
                      isFavorite
                      width={260}
                      height={200}
                      key={index}
                      image={image}
                      title={title}
                      price={price}
                      banner={banner}
                      user={user}
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
