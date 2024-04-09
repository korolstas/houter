import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";

import styles from "./styles.module.scss";

type LoaderTypes = {
  isLoading: boolean;
};

export const Loader = ({ isLoading }: LoaderTypes) => {
  return (
    <div className={styles.loader}>
      {isLoading ? <LoadingOutlined style={{ fontSize: "100px" }} /> : ""}
    </div>
  );
};
