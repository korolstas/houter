import { SettingOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card as AntdCard, Image, Skeleton } from "antd";
import { useRouter } from "next/navigation";

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
  isLoading?: boolean;
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
  userCard,
  widthImg,
  heightImg,
  isLoading,
  isFavorite,
}: CardProps) => {
  const router = useRouter();
  const { cardStore, userStore } = useStore();
  const { deleteCard, showCard } = cardStore;
  const { user } = userStore;

  const isYourCard = userCard?.id === user?.id;
  const isFavoriteCard = !isYourCard && isFavorite && user?.id;

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

    router.refresh();
  };

  return (
    <AntdCard
      loading={isLoading}
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
        isLoading ? (
          <Skeleton.Image
            active={isLoading}
            style={{ width: widthImg, height: heightImg }}
          />
        ) : (
          <div className={styles.card_photo}>
            <Image
              src={image}
              alt={title}
              preview={false}
              width={widthImg}
              height={heightImg}
              className={styles.card_photo_img}
              style={{ width: widthImg, height: heightImg }}
            />
            {banner && <Banner variant={banner} />}
            {isFavoriteCard && <Favorite id={id} />}
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
