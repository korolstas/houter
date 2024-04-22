import { CreateAd } from "@screens/property/ad/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter | Create Ad",
};

export default function PropertyPage() {
  return <CreateAd />;
}
