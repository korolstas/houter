import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BannerVariant = "popular" | "newHouse" | "wallet";

export type User = {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location?: string;
  work?: string;
  // imgUrl?: string | StaticImport;
  // title?: string;
  // favorites?: number[];
};
