import { MyFavorites } from "@screens/profile/favorites";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter | My Favorites",
};

export default function MyFavoritesPage() {
  return <MyFavorites />;
}
