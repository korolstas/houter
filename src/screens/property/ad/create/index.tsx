"use client";

import { observer } from "mobx-react-lite";

import { AntdProvider, FormCreateAd } from "@components";

import styles from "./styles.module.scss";

const CreateAdComponent = () => {
  return (
    <div className={styles.display}>
      <AntdProvider>
        <div className={styles.page}>
          <FormCreateAd />
        </div>
      </AntdProvider>
    </div>
  );
};

export const CreateAd = observer(CreateAdComponent);
