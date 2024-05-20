import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import {
  SwapRightOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";

import { AntdProvider } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

type FormLogin = {
  password: string;
  email: string;
};

const FormLoginComponent = () => {
  const router = useRouter();
  const { userStore } = useStore();
  const { fetchAuth, clearError, isLoadingUser, isAuth, errorUser } = userStore;

  useEffect(() => {
    if (isAuth) router.push("/");
    else if (errorUser) {
      message.error(errorUser);
      clearError();
    }
  }, [isAuth, errorUser]);

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
            prefix={<LockOutlined style={{ paddingRight: "5px" }} />}
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
            type="primary"
            htmlType="submit"
            loading={isLoadingUser}
            className={styles.button}
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
