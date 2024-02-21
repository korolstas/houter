import "@styles/global.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hounter",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
