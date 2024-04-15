"use client";

import { observer } from "mobx-react-lite";
import Image from "next/image";

import { dianne_russell } from "@image";
import { useStore } from "@stores";
import {
  Composition,
  SvgSwitcher,
  SliderBox,
  AppLayout,
  Button,
  Card,
} from "@components";

import { bttns, cards, partners, scrollingData } from "./config";
import styles from "./styles.module.scss";

const HomeComponent = () => {
  const { sliderStore } = useStore();
  const { bttnType } = sliderStore;

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
              <SvgSwitcher variant={"location"} />
            </div>
            <input placeholder={inputPlaceHolder} type="text" />
            <Button variant={"common"}>
              {bttnSearch}
              <SvgSwitcher variant={"arrow"} />
            </Button>
          </div>
          <div className={styles.partners}>
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
        {cards
          .filter(({ type }) => type === bttnType)
          .map(({ image, title, price, user, banner }) => {
            return (
              <div className={styles.items}>
                <Card
                  isFavorite
                  banner={banner}
                  image={image}
                  price={price}
                  title={title}
                  user={user}
                  key={title + price}
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
