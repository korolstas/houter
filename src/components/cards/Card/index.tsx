import { useRouter } from "next/navigation";
import { Card as AntdCard } from "antd";
import Image from "next/image";
import {
  SettingOutlined,
  DeleteOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import { Banner, Favorite, UserCard } from "@components";
import { BannerVariant, User } from "@types";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

type CardProps = {
  id: number;
  title: string;
  price: string;
  userCard: User;
  image?: string;
  isYour?: boolean;
  widthImg?: number;
  heightImg?: number;
  isFavorite?: boolean;
  width?: number | string;
  margin?: number | string;
  height?: number | string;
  banner?: BannerVariant | string;
};

const { Meta } = AntdCard;

export const Card = ({
  id,
  title,
  price,
  image,
  width,
  height,
  banner,
  isYour,
  margin,
  userCard,
  widthImg,
  heightImg,
  isFavorite,
}: CardProps) => {
  const router = useRouter();
  const { cardStore, userStore } = useStore();
  const { deleteCard, showCard } = cardStore;
  const { user } = userStore;

  const isYourCard = userCard?.id === user?.id;

  const handleClick = () => {
    router.push(`/property/ad/show?id=${id}`);
  };

  const handleEdit = (event: React.MouseEvent) => {
    event.stopPropagation();
    showCard({ id: Number(id) });

    router.push(`/property/ad/edit?id=${id}`);
  };

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    deleteCard({ id });

    router.push(`/profile/my_property?id=${id}`);
  };

  return (
    <AntdCard
      onClick={handleClick}
      className={styles.card}
      hoverable
      style={{ width: width ? width : 340, height: height }}
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
              src={image}
              alt={title}
              width={widthImg}
              height={heightImg}
              className={styles.card_photo_img}
              style={{ width: widthImg, height: heightImg }}
            />
            {!isYourCard && isFavorite && <Favorite id={id} />}
            {banner && <Banner variant={banner} />}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "max-content",
              fontFamily: "Lexend",
              margin: margin,
            }}
            className={styles.card_photo}
          >
            <HomeOutlined style={{ fontSize: 80, color: "#888b97" }} />
          </div>
        )
      }
    >
      <Meta
        title={title}
        description={`$ ${price}`}
        style={{ fontFamily: "Lexend" }}
      />
      {!isYour && userCard && (
        <div style={{ marginTop: 20 }}>
          <UserCard user={userCard} />
        </div>
      )}
    </AntdCard>
  );
};
