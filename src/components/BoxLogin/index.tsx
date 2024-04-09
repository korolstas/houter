import { Button, Carousel } from "antd";
import { ReactNode } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

import { carousel } from "./config";
import { ArrowLeftOutlined } from "@ant-design/icons";

type BoxLoginType = {
  form: ReactNode;
  heading: {
    label: string;
    icon?: ReactNode;
  };
  banner?: {
    discription: string;
    label: string;
    href: string;
  };
};

export const BoxLogin = ({ form, banner, heading }: BoxLoginType) => {
  const photoLabel = "Buy And Own Outstanding Properties";

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.photo}>
          <Carousel
            autoplay
            infinite
            dots={false}
            className={styles.carousel}
            autoplaySpeed={5000}
          >
            {carousel.map(({ image, alt }) => {
              return (
                <div className={styles.photo_box}>
                  <Image
                    loading="lazy"
                    className={styles.photo_box_img}
                    src={image}
                    alt={alt}
                  />
                </div>
              );
            })}
          </Carousel>
          <div className={styles.photo_back}>
            <Button icon={<ArrowLeftOutlined />} href={"/"}>
              Back
            </Button>
          </div>
          <label className={styles.photo_text}>{photoLabel}</label>
          {banner && (
            <div className={styles.photo_banner}>
              <label>{banner.discription}</label>
              <Button href={banner.href}>{banner.label}</Button>
            </div>
          )}
        </div>
        <div className={styles.form}>
          {heading.icon}
          <h1>{heading.label}</h1>
          {form}
        </div>
      </div>
    </div>
  );
};
