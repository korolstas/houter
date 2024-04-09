import { ReactNode, useEffect, useState } from "react";
import { Affix, Layout } from "antd";

type ScrollHeaderProps = {
  children: ReactNode;
};

export const ScrollHeader = ({ children }: ScrollHeaderProps) => {
  const [visible, setVisible] = useState<boolean>(true);

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setVisible(true);
      } else if (window.scrollY > lastScrollY) {
        setVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Affix>
      <Layout
        style={{
          background: "#fff",
          padding: 0,
          transition: "opacity 0.5s",
          opacity: visible ? 1 : 0,
        }}
      >
        {children}
      </Layout>
    </Affix>
  );
};
