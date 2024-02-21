import { StaticImageData } from "next/image";

export type BannerVariant = "popular" | "newHouse" | "wallet";

export type User = {
  image: StaticImageData;
  location: string;
  work: string;
  name: string;
};
