import { ShowAd } from "@screens/property/ad/show";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter | Show Ad",
};

export default function PropertyItemPage() {
  return <ShowAd />;
}
