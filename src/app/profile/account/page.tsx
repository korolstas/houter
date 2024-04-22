import { Profile } from "@screens/profile/account";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter | Profile",
};

export default function ProfilePage() {
  return <Profile />;
}
