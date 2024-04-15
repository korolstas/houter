import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BannerVariant = "popular" | "newHouse" | "wallet";

export type User = {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  title?: string;
  imgUrl?: string | StaticImport;
  phone?: string;
  birthday?: string;
  location?: string;
  work?: string;
};
