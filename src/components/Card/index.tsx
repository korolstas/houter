import Image, { StaticImageData } from "next/image";

import { Banner, BannerVariant } from "../Banner";
import { UserCard } from "../UserCard";

import styles from "./styles.module.scss";

interface Props {
  image: StaticImageData;
  title: string;
  price: string;
  user: {
    image: StaticImageData;
    location: string;
    work: string;
    name: string;
  };
  banner?: BannerVariant | string;
}

export const Card = ({ image, title, price, user, banner }: Props) => {
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
