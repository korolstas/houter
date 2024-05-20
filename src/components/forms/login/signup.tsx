import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import {
  SwapRightOutlined,
  MailOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";

import { AntdProvider } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

type FormSignUp = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

const FormSignUpComponent = () => {
  const { userStore } = useStore();
  const { fetchRegister, isAuth, isLoadingUser } = userStore;
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      message.success("Account is creating successfully");
      router.push("/");
    }
  }, [isAuth]);

  const onFinish = (data: FormSignUp) => {
    fetchRegister({
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email,
    });
  };

  return (
    <AntdProvider>
      <Form className={styles.login} onFinish={onFinish}>
        <div className={styles.name}>
          <div className={styles.name_box}>
            <div className={styles.placeholder}>
              <label>Firstname*</label>
            </div>

            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "This field should be filled" },
                {
                  pattern: /^[A-Z]{2,16}$/i,
                  message: "This field should be filled",
                },
              ]}
            >
              <Input
                placeholder="Enter Firstname"
                size="large"
                prefix={<UserOutlined style={{ paddingRight: "5px" }} />}
              />
            </Form.Item>
          </div>

          <div className={styles.name_box}>
            <div className={styles.placeholder}>
              <label>Lastname*</label>
            </div>

            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "This field should be filled" },
                {
                  pattern: /^[A-Z]{2,16}$/i,
                  message: "This field should be filled",
                },
              ]}
            >
              <Input
                placeholder="Enter Lastname"
                size="large"
                prefix={<UserOutlined style={{ paddingRight: "5px" }} />}
              />
            </Form.Item>
          </div>
        </div>
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
        </div>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "This field should be filled" }]}
        >
          <Input.Password
            size="large"
            placeholder="Enter Password"
            prefix={<LockOutlined style={{ paddingRight: "5px" }} />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoadingUser}
            className={styles.button}
            icon={<SwapRightOutlined style={{ fontSize: "25px" }} />}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </AntdProvider>
  );
};

export const FormSignUp = observer(FormSignUpComponent);
