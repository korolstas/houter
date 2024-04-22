import { MyProperty } from "@screens/profile/my_property";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter | My Properties",
};

export default function MyPropertyPage() {
  return <MyProperty />;
}
