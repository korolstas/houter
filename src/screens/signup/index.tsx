"use client";

import { SolutionOutlined } from "@ant-design/icons";
import { useState } from "react";

import { BoxLogin, FormSignUp, Loader } from "@components";

import styles from "../login/styles.module.scss";

export const SignUp = () => {
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
  );
};
