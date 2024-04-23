import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  SafetyCertificateOutlined,
  SwapRightOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { AntdProvider } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

type FormLogin = {
  password: string;
  email: string;
};

const FormLoginComponent = () => {
  const router = useRouter();
  const { userStore } = useStore();
  const { fetchAuth, user } = userStore;

  useEffect(() => {
    if (user) router.push("/", { scroll: false });
  }, [user]);

  const onFinish = (data: FormLogin) => {
    fetchAuth({ password: data.password, email: data.email });
  };

  return (
    <AntdProvider>
      <Form className={styles.login} onFinish={onFinish}>
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
          rules={[
            { required: true, message: "This field should be filled" },
            {
              // pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/i,
              message:
                "The password must contain numbers, uppercase letters, lowercase letters and be between 8 and 20 characters long",
            },
          ]}
        >
          <Input.Password
            size="large"
            placeholder="Enter Password"
            prefix={
              <SafetyCertificateOutlined style={{ paddingRight: "5px" }} />
            }
          />
        </Form.Item>

        {/* <div className={styles.placeholder} style={{ marginBottom: "15px" }}>
          <Form.Item
            valuePropName="checked"
            name="checkbox"
            style={{ marginBottom: 0 }}
          >
            <Checkbox className={styles.checkbox}>Remember me</Checkbox>
          </Form.Item>
          <Link href="#">Forget Your Password?</Link>
        </div> */}

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
    </AntdProvider>
  );
};

export const FormLogin = observer(FormLoginComponent);
