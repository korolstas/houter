import { SvgSwitcher } from "../SvgSwitcher";

import styles from "./styles.module.scss";

export type BannerVariant = "popular" | "newHouse" | "wallet";

interface Props {
  variant: BannerVariant | string;
}

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

export const Banner = ({ variant }: Props) => {
  return (
    <div className={`${styles[variant]} ${styles.banner}`}>
      {getData(variant)}
    </div>
  );
};
