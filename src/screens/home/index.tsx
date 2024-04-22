"use client";

import { EnvironmentTwoTone, RightOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { Button, Select } from "antd";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { dianne_russell } from "@image";
import { useStore } from "@stores";
import {
  AntdProvider,
  Composition,
  SliderBox,
  AppLayout,
  Card,
} from "@components";

import { bttns, cards, partners, scrollingData } from "./config";
import styles from "./styles.module.scss";

const HomeComponent = () => {
  const { sliderStore, countriesStore, userStore } = useStore();
  const { bttnType } = sliderStore;
  const { fetchCountries, countries, isLoading } = countriesStore;
  const { getCards, cards } = userStore;

  useEffect(() => {
    getCards();
    fetchCountries();
  }, []);
  console.log(23213132, cards);

  const preview = ["Find The Place To\nLive ", "Your Dreams", "\nEasily Here"];
  const desription =
    "Everything you need about finding your place to live will be here, where it will be easier for you";
  const inputPlaceHolder = "Search for the location you want!";
  const bttnSearch = "Search";
  const partnership = "Our Partnership";
  const recom = "Our Recommendation";
  const feature = "Featured House";

  return (
    <div className={styles.page}>
      <AppLayout scrollingData={scrollingData}>
        <div className={styles.box}>
          <h1>
            {preview.map((item) => {
              return "Your Dreams" === item ? (
                <span key={item}>{item}</span>
              ) : (
                <label key={item}>{item}</label>
              );
            })}
          </h1>
          <h4>{desription}</h4>
          <div className={styles.box_input}>
            <div className={styles.box_input_svg}>
              <EnvironmentTwoTone
                twoToneColor={"#f59e0b"}
                style={{ fontSize: 22 }}
              />
            </div>
            <AntdProvider>
              <div className={styles.input}>
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  variant="borderless"
                  placeholder={inputPlaceHolder}
                  options={countries.map(({ name }) => ({
                    value: name,
                    label: name,
                  }))}
                />
              </div>
              <Link href="property?location={}">
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row-reverse",
                    padding: "23px 20px",
                    gap: 10,
                    borderRadius: 35,
                    fontFamily: "Lexend",
                  }}
                  type="primary"
                  icon={<RightOutlined style={{ fontSize: 16 }} />}
                >
                  {bttnSearch}
                </Button>
              </Link>
            </AntdProvider>
          </div>
          <div className={styles.partners}>
            <h4>{partnership}</h4>
            <div className={styles.partners_items}>
              {partners.map(({ src, alt }) => (
                <Image key={alt} src={src} alt={alt} />
              ))}
            </div>
          </div>
        </div>
      </AppLayout>
      <SliderBox
        style={{ gap: "40px", paddingLeft: "40px" }}
        header={feature}
        top={recom}
        bttns={bttns}
      >
        {cards.map(({ image, title, price, user, banner, id }) => {
          return (
            <div className={styles.items}>
              <Card
                margin={"100px 120px"}
                isFavorite
                banner={banner}
                image={image}
                price={price}
                title={title}
                // user={user}s
                key={id}
                id={id}
              />
            </div>
          );
        })}
      </SliderBox>
      <Composition
        descrioption={
          "Houses recommended by our partners that have been curated to become the home of your dreams!"
        }
        header={"Let`s tour and see our house!"}
        top={"Ready to Sell!"}
        user={{
          id: 505,
          firstName: "Dianne",
          lastName: "Russell",
          email: "dianne_russell@gmail.com",
          title: "Dianne Russell",
          imgUrl: dianne_russell,
          location: "Manchester, Kentucky",
          work: "Manager Director",
          phone: "+375 29 454 45 54",
        }}
      />
    </div>
  );
};

export const Home = observer(HomeComponent);
