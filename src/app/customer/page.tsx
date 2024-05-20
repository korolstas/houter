import { Customer } from "@screens/customer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter | Customer",
};

export default function CustomerPage() {
  return <Customer />;
}
