import { BannerVariant } from "@types";

import styles from "./styles.module.scss";

import { SvgSwitcher } from "../SvgSwitcher";

type BannerProps = {
  variant?: BannerVariant | string;
};

const getData = (variant: BannerVariant | string) => {
  switch (variant) {
    case "popular":
      return (
        <>
          <SvgSwitcher variant={variant} />
          Popular
        </>
      );
    case "newHouse":
      return (
        <>
          <SvgSwitcher variant={variant} />
          New House
        </>
      );
    case "wallet":
      return (
        <>
          <SvgSwitcher variant={variant} />
          Best Deals
        </>
      );
    default:
      return null;
  }
};

export const Banner = ({ variant }: BannerProps) => {
  return (
    <div className={`${styles[variant ? variant : ""]} ${styles.banner}`}>
      {getData(variant ? variant : "")}
    </div>
  );
};
