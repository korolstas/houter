import { Carousel } from "antd";
import Image from "next/image";

import { login_1, login_2, login_3, login_4 } from "@image";
import { compositionInfo } from "@screens/home/config";
import { User } from "@types";

import styles from "./styles.module.scss";

import { SvgSwitcher } from "../SvgSwitcher";
import { UserCard } from "../user";

type CompositionProps = {
  descrioption: string;
  header: string;
  top: string;
  user: User;
};

const carousel = [
  {
    image: login_1,
    alt: "login_1",
  },
  {
    image: login_3,
    alt: "login_3",
  },
  {
    image: login_2,
    alt: "login_2",
  },
  {
    image: login_4,
    alt: "login_4",
  },
];

export const Composition = ({
  descrioption,
  header,
  user,
  top,
}: CompositionProps) => {
  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.desc}>
          <div className={styles.desc_top}>
            <span>{top}</span>
          </div>
          <div className={styles.desc_margin}>
            <h2>{header}</h2>
            <h4>{descrioption}</h4>
            <div className={styles.desc_detail}>
              <span className={styles.desc_detail_header}>House Detail</span>
              <div className={styles.desc_detail_items}>
                {compositionInfo.map(({ name, amount }) => {
                  return (
                    <div key={name} className={styles.desc_detail_items_item}>
                      <SvgSwitcher variant={name.toLowerCase()} />
                      <label>
                        {amount} {amount > 1 ? `${name}s` : name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <UserCard isContactNow size={56} user={user} />
            </div>
          </div>
        </div>
        <div className={styles.carousel}>
          <Carousel
            autoplay
            infinite
            className={styles.carousel_item}
            autoplaySpeed={5000}
          >
            {carousel.map(({ image, alt }) => {
              return (
                <Image
                  className={styles.carousel_item_img}
                  loading="lazy"
                  src={image}
                  alt={alt}
                  key={alt}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
