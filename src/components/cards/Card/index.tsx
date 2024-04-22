import {
  DeleteOutlined,
  PictureOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { Card as AntdCard } from "antd";

import { Favorite } from "../../buttons/Favorite";
import { UserCard } from "../../user";
import { Banner } from "../../Banner";

import { BannerVariant, User } from "@types";

import styles from "./styles.module.scss";

type CardProps = {
  id: number | string;
  title: string;
  price: string;
  image?: StaticImageData;
  banner?: BannerVariant | string;
  isFavorite?: boolean;
  isYour?: boolean;
  height?: number | string;
  width?: number | string;
  cardWidth?: number | string;
  user?: User;
  margin?: number | string;
};

const { Meta } = AntdCard;

export const Card = ({
  id,
  image,
  title,
  price,
  isFavorite,
  isYour,
  banner,
  height,
  width,
  cardWidth,
  user,
  margin,
}: CardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/property/ad/show?id=${id}`);
  };

  const handleEdit = (event: React.MouseEvent) => {
    event.stopPropagation(); // Добавлено для предотвращения всплытия события

    //отпрвка id-шки
  };

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation(); // Добавлено для предотвращения всплытия события

    //отпрвка id-шки
  };

  return (
    <AntdCard
      onClick={handleClick}
      className={styles.card}
      hoverable
      style={{ width: cardWidth ? cardWidth : 340, height: height }}
      actions={
        isYour
          ? [
              <div onClick={handleEdit} className={styles.edit}>
                <SettingOutlined key="edit" />
              </div>,
              <div onClick={handleDelete} className={styles.delete}>
                <DeleteOutlined key="delete" />
              </div>,
            ]
          : []
      }
      cover={
        image ? (
          <div className={styles.card_photo}>
            <Image
              className={styles.card_photo_img}
              style={{ width: width, height: height }}
              alt={title}
              src={image}
            />
            {banner && <Banner variant={banner} />}
            {isFavorite && <Favorite id={id} />}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Lexend",
              margin: margin,
              width: "max-content",
            }}
            className={styles.card_photo}
          >
            <PictureOutlined style={{ fontSize: 100, color: "#888b97" }} />
          </div>
        )
      }
    >
      <Meta
        style={{ fontFamily: "Lexend" }}
        title={title}
        description={price}
      />
      {user && (
        <div style={{ marginTop: 20 }}>
          <UserCard user={user} />
        </div>
      )}
    </AntdCard>
  );
};
