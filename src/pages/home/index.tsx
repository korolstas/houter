"use client";

import { observer } from "mobx-react-lite";
import Image from "next/image";

import { dianne_russell } from "@image";

import {
  AppLayout,
  Button,
  SvgSwitcher,
  Slider,
  Card,
  Composition,
} from "@components";
import { useStore } from "@/mobx";

import styles from "./styles.module.scss";

import { bttns, cards, partners, scrollingData } from "./config";
import { home } from "../../assets/text/index.json";

export const HomeComponent = () => {
  const { sliderStore } = useStore();
  const { bttnType } = sliderStore;

  return (
    <div className={styles.list}>
      <AppLayout scrollingData={scrollingData}>
        <div className={styles.box}>
          <h1>
            {home.prev.map((item) => {
              return "Your Dreams" === item ? <span>{item}</span> : item;
            })}
          </h1>
          <h4>{home.desription}</h4>
          <div className={styles.box_input}>
            <div className={styles.box_input_svg}>
              <SvgSwitcher variant={"location"} />
            </div>
            <input placeholder={home.inputPlaceHolder} type="text" />
            <Button variant={"common"}>
              <>
                {home.bttnSearch}
                <SvgSwitcher variant={"arrow"} />
              </>
            </Button>
          </div>
          <div className={styles.partners}>
            <h4></h4>
            <div className={styles.partners_items}>
              {partners.map(({ src, alt }) => (
                <Image src={src} alt={alt} />
              ))}
            </div>
          </div>
        </div>
      </AppLayout>
      <Slider
        style={{ gap: "40px", paddingLeft: "40px" }}
        header={home.feature}
        top={home.recom}
        bttns={bttns}
      >
        {cards
          .filter(({ type }) => type === bttnType)
          .map(({ image, title, price, user, banner }) => {
            return (
              <Card
                banner={banner}
                image={image}
                price={price}
                title={title}
                user={user}
              />
            );
          })}
      </Slider>
      <Composition
        descrioption={
          "Houses recommended by our partners that have been curated to become the home of your dreams!"
        }
        header={"Let’s tour and see our house!"}
        top={"Ready to Sell!"}
        user={{
          name: "Dianne Russell",
          image: dianne_russell,
          location: "Manchester, Kentucky",
          work: "Manager Director",
        }}
      />
    </div>
  );
};

export const Home = observer(HomeComponent);
