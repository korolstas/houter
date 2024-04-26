import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { PlusOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Button } from "antd";

import styles from "./styles.module.scss";

type AvatarUploadsProps = {
  imgUrl?: string | StaticImport;
  isDisabled?: boolean;
};

export const AvatarUpload = ({ imgUrl, isDisabled }: AvatarUploadsProps) => {
  return imgUrl ? (
    <Image
      className={styles.avatar}
      style={{ border: 0 }}
      alt={"avatar"}
      src={imgUrl}
    />
  ) : (
    <Button
      className={`${styles.avatar} ${styles.center}`}
      disabled={isDisabled}
    >
      <div className={`${styles.avatar_box} ${styles.center}`}>
        <PlusOutlined />
        Add Avatar
      </div>
    </Button>
  );
};
