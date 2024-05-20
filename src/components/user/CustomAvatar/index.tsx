import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { EditOutlined } from "@ant-design/icons";
import React, { CSSProperties } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import { useStore } from "@stores";

type AvatarProps = {
  id: string | number;
  imgUrl: string | StaticImport | null;
  firstName: string;
  lastName: string;
  style?: CSSProperties;
  isCube?: boolean;
  isEdit?: boolean;
  size?: number;
};

export const CustomAvatar = ({
  firstName,
  lastName,
  isEdit,
  isCube,
  imgUrl,
  style,
  size,
  id,
}: AvatarProps) => {
  const { userStore } = useStore();
  const { updateUserImage } = userStore;

  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
  };

  const initials = firstName && lastName ? firstName[0] + lastName[0] : "UN";

  const avatarStyle = {
    ...style,
    fontSize: `${size ? size / 2 : size}px`,
    borderRadius: isCube ? 8 : `${size}px`,
    height: `${size}px`,
    width: `${size}px`,
    backgroundColor: imgUrl ? "transparent" : stringToColor(initials + id),
    color: imgUrl ? "transparent" : "#FFFFFF",
  };

  const onImageClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = () => {
      if (fileInput.files) {
        const form = new FormData();
        form.append("file", fileInput.files[0]);
        // setSelectedFile(form);
        updateUserImage(form);
      }
    };
    fileInput.click();
  };

  return (
    <div className={styles.avatar}>
      <div className={styles.avatar_icon} style={avatarStyle}>
        {imgUrl ? (
          <Image
            width={60}
            height={60}
            style={{ borderRadius: isCube ? 8 : "50%" }}
            className={styles.avatar_icon_img}
            src={imgUrl}
            alt={firstName + lastName}
          />
        ) : (
          <span>{initials.toUpperCase()}</span>
        )}
      </div>
      {isEdit && (
        <div onClick={onImageClick} className={styles.avatar_icon_edit}>
          <EditOutlined />
        </div>
      )}
    </div>
  );
};
