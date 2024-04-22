"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { Header, Footer } from "@components";

import "@styles/global.scss";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();
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
