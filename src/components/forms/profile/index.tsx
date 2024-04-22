"use client";

import { QuestionCircleOutlined, MailOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import dayjs from "dayjs";
import {
  DatePicker,
  Tooltip,
  message,
  Button,
  Select,
  Input,
  Form,
} from "antd";

import { AntdProvider, UserCard } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

type FormProfile = {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  img?: string | null;
  birthday?: string | null;
  location?: string | null;
  phone?: string | null;
};

const FormProfileComponent = () => {
  const { userStore, countriesStore } = useStore();
  const { fetchCountries, countries, isLoading } = countriesStore;
  const { user } = userStore;

  useEffect(() => {
    if (!countries) fetchCountries();
  }, []);

  const onFinish = (data: FormProfile) => {
    // console.log(21212, data);
    // setUser({
    // email: user?.email,
    // firstName: user?.firstName,
    // lastName: user?.lastName,
    // birthday: user?.birthday,
    // location: user?.location,
    // });
    // router.push("/", { scroll: false });
    message.success("Account uploaded successfully");
  };

  const optionsLocation = countries.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const disabledDate = (current: dayjs.Dayjs) =>
    current && current.isAfter(dayjs(), "day");

  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    birthday: user?.birthday,
    location: user?.location,
    phone: user?.phone,
    email: user?.email,
  };

  return (
    <AntdProvider>
      <Form
        initialValues={initialValues}
        className={styles.form}
        onFinish={onFinish}
      >
        <div className={`${styles.box} ${styles.data}`}>
          <h1>Profile data</h1>

          <div className={styles.placeholder}>
            <label>Phone number</label>
          </div>

          <Form.Item
            name="phone"
            rules={[
              {
                pattern: /^\d+$/i,
                message: "Invalid phone format",
              },
            ]}
          >
            <Input placeholder="Enter Phone" size="large" />
          </Form.Item>

          <div className={styles.placeholder}>
            <label>E-mail*</label>
          </div>

          <Form.Item
            className={styles.form_item}
            name="email"
            rules={[
              { required: true, message: "This field should be filled" },
              {
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid e-mail format",
              },
            ]}
          >
            <Input
              disabled
              suffix={
                <Tooltip title="You specified this e-mail address during registration, it cannot be changed">
                  <QuestionCircleOutlined
                    style={{ color: "rgba(0,0,0,.45)" }}
                  />
                </Tooltip>
              }
              placeholder="Enter E-mail"
              size="large"
              prefix={<MailOutlined style={{ paddingRight: "5px" }} />}
            />
          </Form.Item>
        </div>

        <div className={`${styles.box} ${styles.profile}`}>
          <div style={{ marginBottom: 20 }}>
            {user && <UserCard size={45} user={user} />}
          </div>

          <div className={styles.profile_items}>
            <div className={styles.block}>
              <div className={styles.placeholder}>
                <label>Firstname*</label>
              </div>

              <Form.Item
                name="firstName"
                className={styles.item}
                rules={[
                  { required: true, message: "This field should be filled" },
                  {
                    pattern: /^[A-Z]{2,16}$/i,
                    message: "This field should be filled",
                  },
                ]}
              >
                <Input placeholder="Enter Firstname" size="large" />
              </Form.Item>
            </div>

            <div className={styles.block}>
              <div className={styles.placeholder}>
                <label>Lastname*</label>
              </div>

              <Form.Item
                name="lastName"
                className={styles.item}
                rules={[
                  { required: true, message: "This field should be filled" },
                  {
                    pattern: /^[A-Z]{2,16}$/i,
                    message: "This field should be filled",
                  },
                ]}
              >
                <Input placeholder="Enter Lastname" size="large" />
              </Form.Item>
            </div>
          </div>

          <div className={styles.profile_items}>
            <div className={styles.block}>
              <div className={styles.placeholder}>
                <label>Birthday</label>
              </div>

              <Form.Item name="birthday">
                <DatePicker
                  disabledDate={disabledDate}
                  className={styles.item}
                  placeholder="Enter Birthday"
                  size="large"
                />
                <label className={styles.descrioption}>
                  Will not be displayed in the profile
                </label>
              </Form.Item>
            </div>

            <div className={styles.block}>
              <div className={styles.placeholder}>
                <label>Location</label>
              </div>

              <Form.Item name="location">
                <Select
                  showSearch
                  loading={isLoading}
                  className={styles.item}
                  options={optionsLocation}
                  style={{ fontFamily: "Lexend" }}
                  placeholder="Enter Location"
                  size="large"
                />
                <label className={styles.descrioption}>
                  Will not be displayed in the profile
                </label>
              </Form.Item>
            </div>
          </div>

          <div>
            <Form.Item className={styles.form_item}>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className={styles.button}
              >
                Save changes
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </AntdProvider>
  );
};

export const FormProfile = observer(FormProfileComponent);
