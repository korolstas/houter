import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { PlusOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import Image from "next/image";

import styles from "./styles.module.scss";

type AvatarUploadsProps = {
  imgUrl?: string | StaticImport;
  isDisabled?: boolean;
};

export const AvatarUpload = ({ imgUrl, isDisabled }: AvatarUploadsProps) => {
  return imgUrl ? (
    <Image
      src={imgUrl}
      alt={"avatar"}
      style={{ border: 0 }}
      className={styles.avatar}
    />
  ) : (
    <Button
      disabled={isDisabled}
      className={`${styles.avatar} ${styles.center}`}
    >
      <div className={`${styles.avatar_box} ${styles.center}`}>
        <PlusOutlined />
        Add Avatar
      </div>
    </Button>
  );
};
