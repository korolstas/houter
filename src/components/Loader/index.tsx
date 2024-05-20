import { ConfigProvider, Spin } from "antd";

import styles from "./styles.module.scss";

type LoaderTypes = {
  isLoading: boolean;
  height?: number;
};

export const Loader = ({ isLoading, height }: LoaderTypes) => {
  const color = "#10b981";

  return (
    <div className={styles.loader} style={{ height: height ? height : 750 }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: color,
          },
        }}
      >
        <div>{isLoading ? <Spin size="large" /> : ""}</div>
      </ConfigProvider>
    </div>
  );
};
