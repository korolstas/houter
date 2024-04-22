import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { CSSProperties } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

type AvatarProps = {
  lastName?: string;
  firstName?: string;
  id?: string | number;
  style?: CSSProperties;
  image?: string | StaticImport;
};

export const CustomAvatar = ({
  firstName,
  lastName,
  image,
  style,
  id,
}: AvatarProps) => {
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
    backgroundColor: image ? "transparent" : stringToColor(initials + id),
    color: image ? "transparent" : "#FFFFFF",
  };

  return (
    <>
      {firstName && lastName && `${firstName} ${lastName}`}
      <div className={styles.avatar_icon} style={avatarStyle}>
        {image ? (
          <Image className={styles.avatar_icon_img} src={image} alt="avatar" />
        ) : (
          <span>{initials.toUpperCase()}</span>
        )}
      </div>
    </>
  );
};
