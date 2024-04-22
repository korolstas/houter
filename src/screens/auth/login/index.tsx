"use client";

import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

import { BoxLogin, FormLogin, Loader } from "@components";

import styles from "./styles.module.scss";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 400);

  return isLoading ? (
    <Loader isLoading={isLoading} />
  ) : (
    <div className={styles.box}>
      <BoxLogin
        heading={{
          label: "Welcome Back!",
          icon: <UserOutlined className={styles.svg} />,
        }}
        banner={{
          label: "Sign Up",
          discription: "Don't Have an Account?",
          href: "signup",
        }}
        form={<FormLogin />}
      />
    </div>
  );
};
