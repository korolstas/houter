import { StaticImageData } from "next/image";
import { ReactNode } from "react";

import styles from "./styles.module.scss";

import { HorizontalScroll } from "../../HorizontalScroll";
import { RaitingCard } from "../../cards/RaitingCard";

type Props = {
  children: ReactNode;
  scrollingData?: {
    image: StaticImageData;
    description: string;
    header: string;
    alt: string;
  }[];
};

export const AppLayout = ({ children, scrollingData }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_preview}>
        <div className={styles.center}>{children}</div>
      </div>
      <div className={styles.container_image}>
        {scrollingData && (
          <div className={styles.cards}>
            <HorizontalScroll>
              {scrollingData.map(({ image, alt, header, description }) => {
                return (
                  <RaitingCard
                    description={description}
                    header={header}
                    image={image}
                    alt={alt}
                    key={alt}
                  />
                );
              })}
            </HorizontalScroll>
          </div>
        )}
      </div>
    </div>
  );
};
