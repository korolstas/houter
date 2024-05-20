"use client";

import { UserOutlined } from "@ant-design/icons";

import { BoxLogin, FormLogin, LoaderLayout } from "@components";

import styles from "./styles.module.scss";

export const Login = () => {
  return (
    <LoaderLayout>
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
    </LoaderLayout>
  );
};
