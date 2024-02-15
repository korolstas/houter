import { StaticImageData } from "next/image";

import { HorizontalScroll } from "../HorizontalScroll";
import { Header } from "../Header";

import styles from "./styles.module.scss";
import { RaitingCard } from "../RaitingCard";

type Props = {
  children: JSX.Element;
  scrollingData: {
    image: StaticImageData;
    description: string;
    header: string;
    alt: string;
  }[] | undefined;
}

export const AppLayout = ({ children, scrollingData }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
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
