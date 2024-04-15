import { Affix, Layout } from "antd";
import { ReactNode } from "react";

type ScrollHeaderProps = {
  children: ReactNode;
};

export const ScrollHeader = ({ children }: ScrollHeaderProps) => {
  return (
    <Affix>
      <Layout>{children}</Layout>
    </Affix>
  );
};
