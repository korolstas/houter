import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";

import styles from "./styles.module.scss";

export const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleEdit = () => setIsFavorite(!isFavorite);

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
