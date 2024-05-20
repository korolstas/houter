"use client";

import { useSearchParams } from "next/navigation";
import { observer } from "mobx-react-lite";

import { AntdProvider, FormEditAd, LoaderLayout } from "@components";

import styles from "./styles.module.scss";

const EditAdComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <LoaderLayout>
      <div className={styles.display}>
        <AntdProvider>
          <div className={styles.page}>
            <FormEditAd id={id} />
          </div>
        </AntdProvider>
      </div>
    </LoaderLayout>
  );
};

export const EditAd = observer(EditAdComponent);
