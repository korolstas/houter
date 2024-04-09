import { StaticImageData } from "next/image";
import { ReactNode } from "react";

import styles from "./styles.module.scss";

import { HorizontalScroll } from "../HorizontalScroll";
import { RaitingCard } from "../RaitingCard";
import { Header } from "../header/Header";
import { ScrollHeader } from "../header/ScrollHeader";

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
      <div className={styles.container_preview}>{children}</div>
      <div className={styles.container_image}>
        {scrollingData && (
          <HorizontalScroll>
            {scrollingData.map(({ image, alt, header, description }) => {
              return (
                <RaitingCard
                  description={description}
                  header={header}
                  image={image}
                  alt={alt}
                />
              );
            })}
          </HorizontalScroll>
        )}
      </div>
    </div>
  );
};
