import { Property } from "@screens/property";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter | Property",
};

export default function PropertyPage() {
  return <Property />;
}
