"use client";

import { EnvironmentTwoTone, RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import { Button, Select } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";

import { dianne_russell } from "@image";
import { useStore } from "@stores";
import {
  AntdProvider,
  Composition,
  SliderBox,
  AppLayout,
  Card,
} from "@components";
import { LoaderLayout } from "@/components/layouts/LoaderLayout";

import { bttns, partners, scrollingData } from "./config";
import styles from "./styles.module.scss";

const HomeComponent = () => {
  const router = useRouter();
  const { countriesStore, cardStore, userStore, buttonStore } = useStore();
  const { fetchCountries, countries, isLoadingCountries } = countriesStore;
  const { getCards, cards, isLoadingCard } = cardStore;
  const { bttnType } = buttonStore;
  const { user } = userStore;

  const [selectValue, setSelectValue] = useState<string>();

  const isLoading = isLoadingCountries || isLoadingCard;

  useEffect(() => {
    getCards({ user_id: user?.id, realty: bttnType.toLowerCase() });
    if (!countries) fetchCountries();
  }, [bttnType]);

  const handleHref = () => {
    router.push(`/property?location=${selectValue}`);
  };

  const preview = ["Find The Place To\nLive ", "Your Dreams", "\nEasily Here"];
  const desription =
    "Everything you need about finding your place to live will be here, where it will be easier for you";
  const inputPlaceHolder = "Search for the location you want!";
  const bttnSearch = "Search";
  const partnership = "Our Partnership";
  const recom = "Our Recommendation";
  const feature = "Featured House";

  return (
    <LoaderLayout loading={isLoading}>
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
                    onChange={setSelectValue}
                    value={selectValue}
                    variant="borderless"
                    style={{ width: "100%" }}
                    placeholder={inputPlaceHolder}
                    options={countries.map(({ name }) => ({
                      value: name,
                      label: name,
                    }))}
                  />
                </div>
                <Button
                  onClick={handleHref}
                  type="primary"
                  icon={<RightOutlined style={{ fontSize: 16 }} />}
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
                >
                  {bttnSearch}
                </Button>
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
          bttns={bttns}
          top={recom}
        >
          {cards.length ? (
            cards?.map(
              ({
                image,
                title,
                price,
                user,
                banner,
                id,
                is_favorite,
                favorite_id,
              }) => {
                return (
                  <div className={styles.items}>
                    <Card
                      favoriteId={favorite_id}
                      isFavorite={is_favorite}
                      id={id}
                      key={id}
                      isFavoriteShow
                      width={"100%"}
                      height={"100%"}
                      price={price}
                      title={title}
                      image={image}
                      widthImg={300}
                      heightImg={200}
                      userCard={user}
                      banner={banner}
                      isLoading={isLoading}
                    />
                  </div>
                );
              }
            )
          ) : (
            <></>
          )}
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
            image: dianne_russell,
            location: "Manchester, Kentucky",
            work: "Manager Director",
            phone: "+375 29 454 45 54",
          }}
        />
      </div>
    </LoaderLayout>
  );
};

export const Home = observer(HomeComponent);
