import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BannerVariant = "popular" | "newHouse" | "wallet";

export type User = {
  id: string | number;
  lastName: string;
  firstName: string;
  title?: string;
  email?: string;
  favorites?: number[];
  work?: string | null;
  phone?: string | null;
  location?: string | null;
  imgUrl?: string | StaticImport;
};
