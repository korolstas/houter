"use client";

import { Button, Carousel, Form, Input } from "antd";
import {
  SafetyCertificateOutlined,
  SwapRightOutlined,
  LoadingOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useStore } from "@mobx";

import styles from "./styles.module.scss";
import { carousel } from "./config";

type FormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const router = useRouter();
  const { userStore } = useStore();
  const { setUser } = userStore;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 400);

  const onFinish = (data: FormData) => {
    setUser({
      firstName: "Super",
      lastName: "Admin",
      id: 99,
    });
    router.push("/", { scroll: false });
  };

  return (
    <div className={styles.box}>
      {isLoading ? (
        <LoadingOutlined style={{ fontSize: "100px" }} />
      ) : (
        <div className={styles.container}>
          <div className={styles.photo}>
            <Carousel
              autoplay
              infinite
              dots={false}
              className={styles.carousel}
              autoplaySpeed={5000}
            >
              {carousel.map(({ image, alt }) => {
                return (
                  <div className={styles.photo_box}>
                    <Image
                      loading="lazy"
                      className={styles.photo_box_img}
                      src={image}
                      alt={alt}
                    />
                  </div>
                );
              })}
            </Carousel>
            <div className={styles.photo_banner}>
              <label htmlFor="">Don't have an Account?</label>
              <Button href="signup">Sign Up</Button>
            </div>
          </div>
          <div className={styles.form}>
            <UserOutlined style={{ fontSize: "60px", marginBottom: "10px" }} />
            <h1>Welcome Back!</h1>

            <Form onFinish={onFinish}>
              <div className={styles.placeholder}>
                <label>Email*</label>
              </div>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "This field should be filled" },
                  {
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email format",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Email"
                  size="large"
                  prefix={<MailOutlined style={{ paddingRight: "5px" }} />}
                />
              </Form.Item>

              <div className={styles.placeholder}>
                <label>Password*</label>
                <Link href="#">Forget Your Password?</Link>
              </div>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "This field should be filled" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter Password"
                  prefix={
                    <SafetyCertificateOutlined
                      style={{ paddingRight: "5px" }}
                    />
                  }
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className={styles.button}
                  type="primary"
                  htmlType="submit"
                  icon={<SwapRightOutlined style={{ fontSize: "25px" }} />}
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};
