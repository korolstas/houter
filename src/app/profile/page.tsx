import { Profile } from "@screens/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter | Profile",
};

export default function ProfilePage() {
  return <Profile />;
}
