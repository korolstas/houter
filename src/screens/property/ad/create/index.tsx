"use client";

import { observer } from "mobx-react-lite";

import { AntdProvider, FormCreateAd, LoaderLayout } from "@components";

import styles from "./styles.module.scss";

const CreateAdComponent = () => {
  return (
    <LoaderLayout>
      <div className={styles.display}>
        <AntdProvider>
          <div className={styles.page}>
            <FormCreateAd />
          </div>
        </AntdProvider>
      </div>
    </LoaderLayout>
  );
};

export const CreateAd = observer(CreateAdComponent);
