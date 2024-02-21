import Image, { StaticImageData } from "next/image";

import { UserCard } from "../user";
import { Banner } from "../Banner";

import { BannerVariant, User } from "@types";

import styles from "./styles.module.scss";

type CardProps = {
  image: StaticImageData;
  title: string;
  price: string;
  user: User;
  banner?: BannerVariant | string;
};

export const Card = ({ image, title, price, user, banner }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_photo}>
        <Image className={styles.card_photo_img} src={image} alt={title} />
        {banner && <Banner variant={banner} />}
      </div>
      <div className={styles.card_description}>
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
      <UserCard user={user} />
    </div>
  );
};
