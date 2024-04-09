"use client";

import { observer } from "mobx-react-lite";

import { FormProfile } from "@components";

import styles from "./styles.module.scss";

const ProfileComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <FormProfile />
      </div>
    </div>
  );
};

export const Profile = observer(ProfileComponent);
