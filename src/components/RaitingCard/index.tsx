import Image, { StaticImageData } from "next/image";

import styles from "./styles.module.scss";

type Props = {
  image: StaticImageData;
  description: string;
  header: string;
  alt: string;
};

export const RaitingCard = ({ image, alt, header, description }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_image}>
        <Image src={image} alt={alt} />
      </div>
      <div className={styles.item_label}>
        <h4>{header}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};
