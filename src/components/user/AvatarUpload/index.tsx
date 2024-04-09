import { PlusOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import Image from "next/image";

import styles from "./styles.module.scss";

type AvatarUploadsProps = {
  isDisabled: boolean;
  imgUrl?: string | null;
};

export const AvatarUpload = ({ imgUrl, isDisabled }: AvatarUploadsProps) => {
  const onChange = (info: any) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

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
      onChange={onChange}
      className={`${styles.avatar} ${styles.center}`}
    >
      <div className={`${styles.avatar_box} ${styles.center}`}>
        <PlusOutlined />
        Add Avatar
      </div>
    </Button>
  );
};
