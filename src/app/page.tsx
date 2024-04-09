import { Home } from "@screens/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter",
};

export default function HomePage() {
  return <Home />;
}
