"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Header, Footer, LoaderLayout } from "@components";
import { useStore } from "@stores";

import "@styles/global.scss";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const { userStore } = useStore();
  const { user } = userStore;
  const pathname = usePathname();
  const router = useRouter();

  const isUser =
    pathname !== "/profile/account" &&
    pathname !== "/profile/favorites" &&
    pathname !== "/profile/my_property" &&
    pathname !== "/property/ad/create" &&
    pathname !== "/property/ad/edit";

  useEffect(() => {
    if (!isUser && !user?.id) {
      router.push("/auth/login");
    }
  }, []);

  const isHiden = pathname !== "/auth/login" && pathname !== "/auth/signup";

  return (
    <html lang="en">
      <body>
        {isHiden && <Header />}
        <div className="margin_position">{children}</div>
        {isHiden && <Footer />}
      </body>
    </html>
  );
}
