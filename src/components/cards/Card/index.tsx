import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";
import Image, { StaticImageData } from "next/image";
import { Card as AntdCard } from "antd";

import { Favorite } from "@components";
import { UserCard } from "../../user";
import { Banner } from "../../Banner";

import { BannerVariant, User } from "@types";

import styles from "./styles.module.scss";

type CardProps = {
  image: StaticImageData;
  title: string;
  price: string;
  isFavorite?: boolean;
  isYour?: boolean;
  user?: User;
  banner?: BannerVariant | string;
  width?: number;
  height?: number;
};

const { Meta } = AntdCard;

export const Card = ({
  image,
  title,
  price,
  isYour,
  isFavorite,
  user,
  banner,
  width,
  height,
}: CardProps) => {
  return (
    <AntdCard
      className={styles.card}
      hoverable
      style={{ width: width ? width : 340 }}
      actions={
        isYour
          ? [
              <div className={styles.edit}>
                <SettingOutlined key="edit" />
              </div>,
              <div className={styles.delete}>
                <DeleteOutlined key="delete" />
              </div>,
            ]
          : []
      }
      cover={
        <div className={styles.card_photo}>
          <Image
            className={styles.card_photo_img}
            style={{ width: width, height: height }}
            alt={title}
            src={image}
          />
          {banner && <Banner variant={banner} />}
          {isFavorite && <Favorite />}
        </div>
      }
    >
      <Meta
        style={{ fontFamily: "Lexend" }}
        title={title}
        description={price}
      />
      {user && (
        <div style={{ marginTop: 10 }}>
          <UserCard user={user} />
        </div>
      )}
    </AntdCard>
  );
};

// <div className={styles.card}>
//   <div className={styles.card_photo}>
//     <Image className={styles.card_photo_img} src={image} alt={title} />
//     {banner && <Banner variant={banner} />}
//   </div>
//   <div className={styles.card_description}>
//     <h3>{title}</h3>
//     <span>{price}</span>
//   </div>
//   <UserCard user={user} />
// </div>
