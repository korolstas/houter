import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";

import styles from "./styles.module.scss";

type FavoriteProps = {
  id: number | string;
};

export const Favorite = ({ id }: FavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleEdit = (event: React.MouseEvent) => {
    event.stopPropagation(); // Добавлено для предотвращения всплытия события
    setIsFavorite(!isFavorite);

    //отпрвка id-шки
  };

  return (
    <div
      className={`${styles.favorite} ${
        !isFavorite ? styles.outlined : styles.filled
      }`}
      onClick={handleEdit}
    >
      {!isFavorite ? <HeartOutlined /> : <HeartFilled />}
    </div>
  );
};
