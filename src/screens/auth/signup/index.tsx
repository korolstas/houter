"use client";

import { SolutionOutlined } from "@ant-design/icons";

import { BoxLogin, FormSignUp, LoaderLayout } from "@components";

import styles from "../login/styles.module.scss";

export const SignUp = () => {
  return (
    <LoaderLayout>
      <div className={styles.box}>
        <BoxLogin
          heading={{
            label: "Let Us Know You!",
            icon: <SolutionOutlined className={styles.svg} />,
          }}
          banner={{
            label: "Login",
            discription: "Have an Account?",
            href: "login",
          }}
          form={<FormSignUp />}
        />
      </div>
    </LoaderLayout>
  );
};
