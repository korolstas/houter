import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { CSSProperties, useEffect, useState } from "react";

import { useStore } from "@stores";

import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";

type FavoriteProps = {
  id: number;
  isFavorite: boolean;
  favoriteId: number;
  isRefresh?: boolean;
  style?: CSSProperties;
};

const FavoriteComponent = ({
  id,
  favoriteId,
  isFavorite,
  isRefresh,
  style,
}: FavoriteProps) => {
  const { userStore } = useStore();
  const { deleteFavorite, postFavorite, user, setIsRefresh } = userStore;
  const [isFavor, setIsFavor] = useState(isFavorite);

  const handleFavorite = async () => {
    if (!isFavor) {
      await postFavorite(id, user?.id);
      setIsFavor(true);
    } else {
      await deleteFavorite(favoriteId);
      setIsFavor(false);
    }
  };

  const handleEdit = (event: React.MouseEvent) => {
    event.stopPropagation();

    handleFavorite();
  };

  return (
    <div
      style={style}
      className={`${styles.favorite} ${
        !isFavor ? styles.outlined : styles.filled
      }`}
      onClick={handleEdit}
    >
      {!isFavor ? <HeartOutlined /> : <HeartFilled />}
    </div>
  );
};

export const Favorite = observer(FavoriteComponent);
