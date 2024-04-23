"use client";

import { useSearchParams } from "next/navigation";
import { observer } from "mobx-react-lite";

import { AntdProvider, FormEditAd } from "@components";

import styles from "./styles.module.scss";

const EditAdComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className={styles.display}>
      <AntdProvider>
        <div className={styles.page}>
          <FormEditAd id={id} />
        </div>
      </AntdProvider>
    </div>
  );
};

export const EditAd = observer(EditAdComponent);
